import React from "react";

import {
    Users, Zap, Clock, Shield, Building2, Truck, FileText, Settings, Play,
    CheckCircle, FileCheck, Upload, Download, TrendingUp, ShieldCheck,
    Smartphone, Heart, Award, Headphones, FileSpreadsheet, BookOpen, Video, X
} from "lucide-react";

export const IconMap: Record<string, React.ElementType> = {
    Users,
    Zap,
    Clock,
    Shield,
    Building2,
    Truck,
    FileText,
    Settings,
    Play,
    CheckCircle,
    FileCheck,
    Upload,
    Download,
    TrendingUp,
    ShieldCheck,
    Smartphone,
    Heart,
    Award,
    Headphones,
    FileSpreadsheet,
    BookOpen,
    Video,
    X
};

export function getIcon(name: string) {
    return IconMap[name] || Shield;
}
