import React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Loader2 } from "lucide-react";

export default function DashboardLoading() {
    const sidebarStyle = {
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
    } as React.CSSProperties;

    return (
        <SidebarProvider style={sidebarStyle} defaultOpen={true}>
            <aside className="w-[var(--sidebar-width)] hidden md:flex h-screen bg-slate-50 border-r border-border/40"></aside>
            <SidebarInset>
                <div className="flex h-screen w-full items-center justify-center bg-slate-50/20">
                    <div className="flex flex-col items-center gap-3 text-slate-500">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="text-sm font-medium animate-pulse">Memuat halaman...</p>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
