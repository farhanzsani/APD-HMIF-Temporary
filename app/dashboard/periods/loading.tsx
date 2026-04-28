import React from "react";
import { SidebarShell } from "@/components/sidebar-shell";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function PeriodsLoading() {
    const sidebarStyle = {
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
    } as React.CSSProperties;

    return (
        <SidebarShell sidebarStyle={sidebarStyle}>
            <div className="flex flex-1 flex-col p-4 md:p-6 gap-6 w-full">

                {/* Header */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <Skeleton className="h-7 w-40 mb-1" />
                        <Skeleton className="h-4 w-72" />
                    </div>
                    <Skeleton className="h-9 w-36" />
                </div>

                {/* Ringkasan (2 items) */}
                <Card className="border-primary/10">
                    <CardHeader className="flex flex-row items-center justify-between gap-2">
                        <div>
                            <Skeleton className="h-6 w-48 mb-1" />
                            <Skeleton className="h-4 w-52" />
                        </div>
                        <Skeleton className="h-6 w-24 rounded-full" />
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[1, 2].map((i) => (
                                <div key={i} className="border border-border/60 bg-card/60 rounded-lg p-3">
                                    <Skeleton className="h-3 w-16 mb-2" />
                                    <Skeleton className="h-8 w-14" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Table */}
                <Card className="overflow-hidden">
                    <CardHeader>
                        <Skeleton className="h-6 w-32 mb-1" />
                        <Skeleton className="h-4 w-48" />
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="border-b border-border/60 p-3 bg-slate-50/50 flex gap-4 hidden md:flex">
                            <Skeleton className="h-4 w-full" />
                        </div>
                        <div className="p-4 space-y-4">
                            {[1, 2, 3].map((row) => (
                                <div key={row} className="flex flex-col sm:flex-row gap-4 sm:items-center border-b border-border/40 pb-4 last:border-0 last:pb-0">
                                    <Skeleton className="h-5 w-40 flex-1" />
                                    <Skeleton className="h-4 w-32 flex-1" />
                                    <Skeleton className="h-6 w-16 rounded-full" />
                                    <div className="flex gap-2 ml-auto">
                                        <Skeleton className="h-8 w-8" />
                                        <Skeleton className="h-8 w-8" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </SidebarShell>
    );
}
