import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadRequest = {
    name?: unknown;
    email?: unknown;
    company?: unknown;
    phone?: unknown;
    employees?: unknown;
    message?: unknown;
    origem?: unknown;
    source?: unknown;
    nome_completo?: unknown;
    email_corporativo?: unknown;
    empresa?: unknown;
    telefone?: unknown;
    colaboradores_transportados?: unknown;
    mensagem?: unknown;
    metadata?: unknown;
};

type LeadInsert = {
    nome_completo: string;
    email_corporativo: string;
    empresa: string;
    telefone?: string;
    colaboradores_transportados?: string;
    mensagem?: string;
    origem: string;
    metadata: Record<string, unknown>;
};

function cleanText(value: unknown, maxLength = 500) {
    if (typeof value !== "string") return "";

    return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanOptionalText(value: unknown, maxLength = 500) {
    const cleaned = cleanText(value, maxLength);

    return cleaned || undefined;
}

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function parseLeadPayload(payload: LeadRequest): { lead?: LeadInsert; error?: string } {
    const nomeCompleto = cleanText(payload.nome_completo ?? payload.name, 180);
    const emailCorporativo = cleanText(payload.email_corporativo ?? payload.email, 254).toLowerCase();
    const empresa = cleanText(payload.empresa ?? payload.company, 180);

    if (!nomeCompleto) return { error: "Nome completo é obrigatório." };
    if (!emailCorporativo || !isValidEmail(emailCorporativo)) {
        return { error: "E-mail corporativo inválido." };
    }
    if (!empresa) return { error: "Empresa é obrigatória." };

    const metadata = isRecord(payload.metadata) ? payload.metadata : {};

    return {
        lead: {
            nome_completo: nomeCompleto,
            email_corporativo: emailCorporativo,
            empresa,
            telefone: cleanOptionalText(payload.telefone ?? payload.phone, 40),
            colaboradores_transportados: cleanOptionalText(
                payload.colaboradores_transportados ?? payload.employees,
                80,
            ),
            mensagem: cleanOptionalText(payload.mensagem ?? payload.message, 1000),
            origem: cleanText(payload.origem ?? payload.source, 80) || "site",
            metadata,
        },
    };
}

function getSupabaseConfig() {
    const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
    const publishableKey =
        process.env.SUPABASE_PUBLISHABLE_KEY ??
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !publishableKey) return null;

    return {
        supabaseUrl: supabaseUrl.replace(/\/$/, ""),
        publishableKey,
    };
}

export async function POST(request: NextRequest) {
    const config = getSupabaseConfig();

    if (!config) {
        return NextResponse.json(
            { error: "Captação de leads indisponível no momento." },
            { status: 503 },
        );
    }

    let payload: unknown;

    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
    }

    if (!isRecord(payload)) {
        return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
    }

    const { lead, error } = parseLeadPayload(payload);

    if (error || !lead) {
        return NextResponse.json({ error }, { status: 400 });
    }

    let response: Response;

    try {
        response = await fetch(`${config.supabaseUrl}/rest/v1/rpc/create_golffox_marketing_lead`, {
            method: "POST",
            headers: {
                apikey: config.publishableKey,
                Authorization: `Bearer ${config.publishableKey}`,
                "Content-Type": "application/json",
                Prefer: "return=minimal",
            },
            body: JSON.stringify({
                p_nome_completo: lead.nome_completo,
                p_email_corporativo: lead.email_corporativo,
                p_empresa: lead.empresa,
                p_telefone: lead.telefone,
                p_colaboradores_transportados: lead.colaboradores_transportados,
                p_mensagem: lead.mensagem,
                p_origem: lead.origem,
                p_metadata: lead.metadata,
            }),
            cache: "no-store",
        });
    } catch {
        return NextResponse.json(
            { error: "Não foi possível registrar o lead." },
            { status: 502 },
        );
    }

    if (!response.ok) {
        console.error("Failed to persist marketing lead", {
            status: response.status,
            statusText: response.statusText,
        });

        return NextResponse.json(
            { error: "Não foi possível registrar o lead." },
            { status: 502 },
        );
    }

    return NextResponse.json({ ok: true }, { status: 201 });
}
