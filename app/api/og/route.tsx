import { ImageResponse } from "next/og";

export const runtime = "edge";

// Gera a imagem de Open Graph (1200x630) dinamicamente, no padrão visual da marca
// (navy + glow laranja). Recebe ?title=... e ?subtitle=... por página.
export function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = (searchParams.get("title") || "Gestão completa do fretamento corporativo").slice(0, 110);
    const subtitle = (
        searchParams.get("subtitle") ||
        "A Torre de Controle do Fretamento Corporativo — planejamento, tempo real, embarque e governança."
    ).slice(0, 160);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#0B2440",
                    padding: "72px",
                    position: "relative",
                    fontFamily: "sans-serif",
                }}
            >
                {/* glow laranja */}
                <div
                    style={{
                        position: "absolute",
                        top: -220,
                        right: -160,
                        width: 640,
                        height: 640,
                        borderRadius: 9999,
                        background:
                            "radial-gradient(circle, rgba(250,96,7,0.38) 0%, rgba(250,96,7,0) 70%)",
                    }}
                />
                {/* glow azul */}
                <div
                    style={{
                        position: "absolute",
                        bottom: -240,
                        left: -140,
                        width: 560,
                        height: 560,
                        borderRadius: 9999,
                        background:
                            "radial-gradient(circle, rgba(1,85,126,0.55) 0%, rgba(1,85,126,0) 70%)",
                    }}
                />

                {/* marca */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{
                            width: 16,
                            height: 16,
                            borderRadius: 9999,
                            background: "#FA6007",
                            marginRight: 16,
                        }}
                    />
                    <div
                        style={{
                            color: "#FFFFFF",
                            fontSize: 30,
                            fontWeight: 800,
                            letterSpacing: 6,
                        }}
                    >
                        GOLF FOX
                    </div>
                </div>

                {/* título + subtítulo */}
                <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
                    <div
                        style={{
                            color: "#FFFFFF",
                            fontSize: 66,
                            fontWeight: 800,
                            lineHeight: 1.08,
                            letterSpacing: -1,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            color: "rgba(255,255,255,0.72)",
                            fontSize: 30,
                            lineHeight: 1.35,
                            marginTop: 26,
                            maxWidth: 880,
                        }}
                    >
                        {subtitle}
                    </div>
                </div>

                {/* rodapé */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 26 }}>
                        golffox.com.br
                    </div>
                    <div
                        style={{
                            width: 140,
                            height: 7,
                            borderRadius: 9999,
                            background: "linear-gradient(90deg, #FA6007 0%, #FA8A4E 100%)",
                        }}
                    />
                </div>
            </div>
        ),
        { width: 1200, height: 630 },
    );
}
