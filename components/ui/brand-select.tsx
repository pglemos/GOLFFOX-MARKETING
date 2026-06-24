"use client";

import { Portal } from "@ark-ui/react/portal";
import { Select, createListCollection } from "@ark-ui/react/select";
import { ChevronDown, Check } from "lucide-react";

export type SelectOption = { value: string; label: string };

/** Select de marca (Ark UI) — usado nos filtros. Navy + acento laranja. */
export function BrandSelect({
    label,
    placeholder = "Selecione",
    options,
    value,
    onValueChange,
    className,
}: {
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    value: string;
    onValueChange: (value: string) => void;
    className?: string;
}) {
    const collection = createListCollection({
        items: options,
        itemToString: (item) => item.label,
        itemToValue: (item) => item.value,
    });

    return (
        <Select.Root
            collection={collection}
            value={value ? [value] : []}
            onValueChange={(details) => onValueChange(details.value[0] ?? "")}
            className={className}
        >
            {label ? (
                <Select.Label className="mb-1.5 block text-xs font-bold uppercase tracking-[0.14em] text-[#8392A3]">
                    {label}
                </Select.Label>
            ) : null}
            <Select.Control>
                <Select.Trigger className="flex h-11 w-full min-w-[200px] items-center justify-between gap-2 rounded-xl border border-[#E7EDF3] bg-white px-4 text-[15px] font-semibold text-[#0B2440] transition-colors hover:border-[#D8E0E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6007]">
                    <Select.ValueText placeholder={placeholder} />
                    <Select.Indicator>
                        <ChevronDown className="h-4 w-4 text-[#8392A3]" />
                    </Select.Indicator>
                </Select.Trigger>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content className="z-50 min-w-(--reference-width) overflow-hidden rounded-xl border border-[#E7EDF3] bg-white shadow-[0_18px_50px_rgba(11,36,64,0.16)] focus:outline-none">
                        {options.map((opt) => (
                            <Select.Item
                                key={opt.value}
                                item={opt}
                                className="relative flex cursor-pointer select-none items-center py-2.5 pl-4 pr-9 text-[14px] font-medium text-[#1F3147] data-[highlighted]:bg-[#FFF0E6] data-[state=checked]:text-[#C2410C]"
                            >
                                <Select.ItemText>{opt.label}</Select.ItemText>
                                <Select.ItemIndicator className="absolute right-3 text-[#FA6007]">
                                    <Check className="h-4 w-4" />
                                </Select.ItemIndicator>
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
            <Select.HiddenSelect />
        </Select.Root>
    );
}
