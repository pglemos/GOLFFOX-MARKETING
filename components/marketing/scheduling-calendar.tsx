"use client";

import { useMemo, useState } from "react";

import { Calendar, Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";

/**
 * Calendário de agendamento da marca Golf Fox (navy + laranja).
 * Componente de cliente: usa `new Date()` em runtime para montar o mês atual.
 *
 * IMPORTANTE — DADOS DE BACKEND:
 * As datas e horários disponíveis abaixo são PLACEHOLDERS (MOCK_*).
 * O backend deve substituí-los pelos dados reais da agenda (ver TODOs).
 */

const WEEKDAYS = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"] as const;

const MONTH_NAMES = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
] as const;

// Formata uma data como "YYYY-MM-DD" (chave estável para comparação/seleção).
function toISODate(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}

// ============================================================
// PLACEHOLDERS DE BACKEND
// ============================================================
// TODO(backend): substituir por datas disponíveis vindas da API/calendário.
// Ex.: GET /api/agenda/disponibilidade?mes=YYYY-MM -> { availableDates: string[] }
// Por enquanto: deriva alguns dias úteis futuros do mês atual como mock.
function buildMockAvailableDates(reference: Date): string[] {
    const year = reference.getFullYear();
    const month = reference.getMonth();
    const today = new Date();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dates: string[] = [];

    for (let day = 1; day <= daysInMonth; day += 1) {
        const candidate = new Date(year, month, day);
        const isPast =
            candidate <
            new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const weekday = candidate.getDay();
        const isWeekend = weekday === 0 || weekday === 6;
        // Mock: dias úteis, não passados, e (para variar) pula múltiplos de 4.
        if (!isPast && !isWeekend && day % 4 !== 0) {
            dates.push(toISODate(candidate));
        }
    }
    return dates;
}

// TODO(backend): substituir por horários disponíveis da data selecionada.
// Ex.: GET /api/agenda/horarios?data=YYYY-MM-DD -> { slots: string[] }
const MOCK_TIME_SLOTS = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
] as const;

type CalendarCell = {
    date: Date;
    iso: string;
    inMonth: boolean;
};

export function SchedulingCalendar() {
    // Mês exibido (inicia no mês atual). Navegação opcional via setas.
    const [viewDate, setViewDate] = useState<Date>(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), 1);
    });
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Início do dia de hoje, para desabilitar dias passados.
    const todayStart = useMemo(() => {
        const t = new Date();
        return new Date(t.getFullYear(), t.getMonth(), t.getDate());
    }, []);

    // TODO(backend): substituir por datas disponíveis vindas da API/calendário.
    // Ex.: GET /api/agenda/disponibilidade?mes=YYYY-MM -> { availableDates: string[] }
    const availableDates = useMemo(
        () => new Set(buildMockAvailableDates(viewDate)), // placeholder
        [viewDate],
    );

    // TODO(backend): substituir por horários disponíveis da data selecionada.
    // Ex.: GET /api/agenda/horarios?data=YYYY-MM-DD -> { slots: string[] }
    const timeSlots = MOCK_TIME_SLOTS; // placeholder

    const monthLabel = `${MONTH_NAMES[viewDate.getMonth()]} de ${viewDate.getFullYear()}`;

    // Grade do mês: completa a primeira/última semana com dias adjacentes (mutados).
    const cells = useMemo<CalendarCell[]>(() => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const firstWeekday = new Date(year, month, 1).getDay();
        const gridStart = new Date(year, month, 1 - firstWeekday);
        const result: CalendarCell[] = [];
        for (let i = 0; i < 42; i += 1) {
            const date = new Date(
                gridStart.getFullYear(),
                gridStart.getMonth(),
                gridStart.getDate() + i,
            );
            result.push({
                date,
                iso: toISODate(date),
                inMonth: date.getMonth() === month,
            });
        }
        return result;
    }, [viewDate]);

    const goToMonth = (delta: number) => {
        setViewDate(
            (prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1),
        );
        setSelectedDate(null);
        setSelectedTime(null);
        setIsSubmitted(false);
    };

    const handleSelectDate = (iso: string) => {
        setSelectedDate(iso);
        setSelectedTime(null);
        setIsSubmitted(false);
    };

    const handleSubmit = () => {
        if (!selectedDate || !selectedTime) return;
        // TODO(backend): POST /api/agenda { data, hora, ...lead } e mostrar confirmação.
        console.log("Agendamento solicitado:", {
            data: selectedDate,
            hora: selectedTime,
        });
        setIsSubmitted(true);
    };

    const selectedHuman = selectedDate
        ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "2-digit",
              month: "long",
          })
        : null;

    return (
        <div className="font-archivo mx-auto w-full max-w-[920px] overflow-hidden rounded-3xl border border-[#E7EDF3] bg-white shadow-[0_24px_60px_-30px_rgba(11,36,64,0.35)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Coluna do calendário */}
                <div className="border-b border-[#E7EDF3] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2 text-[#01557E]">
                                <Calendar className="h-4 w-4" aria-hidden="true" />
                                <span className="text-xs font-bold uppercase tracking-[0.18em]">
                                    Escolha a data
                                </span>
                            </div>
                            <p className="mt-2 text-lg font-extrabold tracking-[-0.02em] text-[#0B2440]">
                                {monthLabel}
                            </p>
                            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-[#52647A]">
                                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                                Demonstração de 30 min
                            </p>
                        </div>
                        <div className="flex shrink-0 gap-2">
                            <button
                                type="button"
                                onClick={() => goToMonth(-1)}
                                aria-label="Mês anterior"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E7EDF3] text-[#0B2440] transition-colors hover:bg-[#F4F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6007] focus-visible:ring-offset-2"
                            >
                                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                onClick={() => goToMonth(1)}
                                aria-label="Próximo mês"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E7EDF3] text-[#0B2440] transition-colors hover:bg-[#F4F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6007] focus-visible:ring-offset-2"
                            >
                                <ChevronRight className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center">
                        {WEEKDAYS.map((wd) => (
                            <div
                                key={wd}
                                className="pb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#52647A]"
                            >
                                {wd}
                            </div>
                        ))}

                        {cells.map((cell) => {
                            const isPast = cell.date < todayStart;
                            const isAvailable =
                                cell.inMonth &&
                                !isPast &&
                                availableDates.has(cell.iso);
                            const isSelected = selectedDate === cell.iso;
                            const dayNumber = cell.date.getDate();

                            if (!cell.inMonth) {
                                return (
                                    <div
                                        key={cell.iso}
                                        aria-hidden="true"
                                        className="aspect-square"
                                    />
                                );
                            }

                            return (
                                <button
                                    key={cell.iso}
                                    type="button"
                                    disabled={!isAvailable}
                                    onClick={() => handleSelectDate(cell.iso)}
                                    aria-pressed={isSelected}
                                    aria-label={
                                        isAvailable
                                            ? `Selecionar dia ${dayNumber} (disponível)`
                                            : `Dia ${dayNumber} indisponível`
                                    }
                                    className={[
                                        "flex aspect-square min-h-[44px] items-center justify-center rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6007] focus-visible:ring-offset-2",
                                        isSelected
                                            ? "bg-[#FA6007] text-white shadow-[0_8px_20px_-8px_rgba(250,96,7,0.7)]"
                                            : isAvailable
                                              ? "text-[#0B2440] hover:bg-[#FFF1E8] hover:text-[#D14600]"
                                              : "cursor-not-allowed text-[#B7C2CF]",
                                    ].join(" ")}
                                >
                                    {dayNumber}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-5 flex items-center gap-4 text-xs text-[#52647A]">
                        <span className="inline-flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#FA6007]" />
                            Disponível
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#E7EDF3]" />
                            Indisponível
                        </span>
                    </div>
                </div>

                {/* Coluna de horários + confirmação */}
                <div className="bg-[#F4F7FA] p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-[#01557E]">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span className="text-xs font-bold uppercase tracking-[0.18em]">
                            Escolha o horário
                        </span>
                    </div>

                    {!selectedDate ? (
                        <p className="mt-4 text-sm leading-relaxed text-[#52647A]">
                            Selecione um dia disponível no calendário para ver os
                            horários da demonstração.
                        </p>
                    ) : (
                        <>
                            <p className="mt-3 text-sm font-semibold capitalize text-[#0B2440]">
                                {selectedHuman}
                            </p>

                            <div className="mt-4 grid grid-cols-3 gap-2">
                                {timeSlots.map((slot) => {
                                    const active = selectedTime === slot;
                                    return (
                                        <button
                                            key={slot}
                                            type="button"
                                            onClick={() => {
                                                setSelectedTime(slot);
                                                setIsSubmitted(false);
                                            }}
                                            aria-pressed={active}
                                            aria-label={`Selecionar horário ${slot}`}
                                            className={[
                                                "flex min-h-[44px] items-center justify-center rounded-xl border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6007] focus-visible:ring-offset-2",
                                                active
                                                    ? "border-[#D14600] bg-[#D14600] text-white"
                                                    : "border-[#E7EDF3] bg-white text-[#0B2440] hover:border-[#FA6007] hover:text-[#D14600]",
                                            ].join(" ")}
                                        >
                                            {slot}
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={!selectedTime}
                                aria-label="Agendar demonstração"
                                className="mt-6 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#D14600] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#B03B00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6007] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Agendar demonstração
                            </button>

                            {isSubmitted && (
                                <div className="mt-4 flex items-start gap-2 rounded-xl border border-[#C7E5D2] bg-[#EAF7EF] p-3 text-sm text-[#0B5B33]">
                                    <Check
                                        className="mt-0.5 h-4 w-4 shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span>
                                        Solicitação enviada. Em breve confirmaremos
                                        sua demonstração.
                                    </span>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
