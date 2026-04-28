import React from "react";
import { SidebarShell } from "@/components/sidebar-shell";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
    const sidebarStyle = {
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
    } as React.CSSProperties;

    return (
        <SidebarShell sidebarStyle={sidebarStyle}>
            <div className="flex flex-1 flex-col p-4 md:p-6 gap-6 w-full">
                {/* Header Skeleton */}
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-72" />
                </div>

                {/* Stats Cards Skeleton */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="border border-border/60 rounded-xl p-4 flex flex-col gap-3">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-8 w-14" />
                        </div>
                    ))}
                </div>

                {/* Main Content Skeleton (e.g. Table layout) */}
                <div className="border border-border/60 rounded-xl mt-4 flex flex-col overflow-hidden">
                    <div className="border-b border-border/60 p-4 bg-slate-50/50 flex justify-between items-center">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-8 w-24 rounded-full" />
                    </div>
                    <div className="p-4 space-y-4">
                        {[1, 2, 3, 4, 5].map((row) => (
                            <div key={row} className="flex gap-4 items-center">
                                <Skeleton className="h-6 w-full" />
                                <Skeleton className="h-6 w-32 shrink-0" />
                                <Skeleton className="h-6 w-16 shrink-0" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SidebarShell>
    );
}
