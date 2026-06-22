"use client";

import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Cards que empilham conforme o scroll (efeito GSAP ScrollTrigger).
 * Cada item ocupa ~1 tela (sticky) e encolhe ao ser coberto pelo próximo.
 */
export function StackedCards<T extends { id: string | number }>({
    items,
    renderCard,
}: {
    items: T[];
    renderCard: (item: T, index: number) => React.ReactNode;
}) {
    return (
        <div className="relative">
            {items.map((item, index) => (
                <StackedCard key={item.id} index={index} total={items.length}>
                    {renderCard(item, index)}
                </StackedCard>
            ))}
        </div>
    );
}

function StackedCard({
    index,
    total,
    children,
}: {
    index: number;
    total: number;
    children: React.ReactNode;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const card = cardRef.current;
        const container = containerRef.current;
        if (!card || !container) return;

        const targetScale = 1 - (total - index) * 0.04;
        gsap.set(card, { transformOrigin: "center top" });

        const st = ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            onUpdate: (self) => {
                const scale = Math.max(gsap.utils.interpolate(1, targetScale, self.progress), targetScale);
                gsap.set(card, { scale });
            },
        });

        return () => st.kill();
    }, [index, total]);

    return (
        <div ref={containerRef} className="sticky top-0 flex h-screen items-center justify-center">
            <div ref={cardRef} className="relative w-full" style={{ top: `${index * 1.75}rem` }}>
                {children}
            </div>
        </div>
    );
}
