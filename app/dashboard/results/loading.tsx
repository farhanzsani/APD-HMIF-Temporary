import React from "react";
import { SidebarShell } from "@/components/sidebar-shell";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ResultsLoading() {
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
                </div>

                {/* Event Selector & Export Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row shadow-sm bg-white p-2 rounded-2xl">
                    <div className="flex-1 max-w-sm">
                        <Skeleton className="h-10 w-full rounded-xl" />
                    </div>
                    <div className="flex gap-2 sm:ml-auto">
                        <Skeleton className="h-10 w-24 rounded-xl" />
                        <Skeleton className="h-10 w-24 rounded-xl" />
                    </div>
                </div>

                {/* Ringkasan Event (4 items) */}
                <Card className="border-primary/10">
                    <CardHeader className="flex flex-row items-center justify-between gap-2">
                        <div>
                            <Skeleton className="h-6 w-48 mb-1" />
                            <Skeleton className="h-4 w-60" />
                        </div>
                        <Skeleton className="h-6 w-24 rounded-full" />
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="border border-border/60 bg-card/60 rounded-lg p-3">
                                    <Skeleton className="h-3 w-20 mb-2" />
                                    <Skeleton className="h-8 w-12" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Middle Content: Indicator Avg & User Table */}
                <Card className="overflow-hidden border-sky-100">
                    <CardHeader className="pb-2 bg-sky-50/50">
                        <Skeleton className="h-6 w-48 mb-1" />
                        <Skeleton className="h-4 w-64" />
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="p-4 space-y-4">
                            {[1, 2].map((row) => (
                                <div key={row} className="flex gap-4 items-center border-b border-border/40 pb-4 last:border-0 last:pb-0">
                                    <Skeleton className="h-5 w-1/2" />
                                    <Skeleton className="h-6 w-16 ml-auto" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="overflow-hidden">
                    <CardHeader>
                        <Skeleton className="h-6 w-32 mb-1" />
                        <Skeleton className="h-4 w-72" />
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="border-b border-border/60 p-3 bg-slate-50/50 flex gap-4 hidden md:flex">
                            <Skeleton className="h-4 w-full" />
                        </div>
                        <div className="p-4 space-y-4">
                            {[1, 2, 3, 4].map((row) => (
                                <div key={row} className="flex flex-col sm:flex-row gap-4 sm:items-center border-b border-border/40 pb-4 last:border-0 last:pb-0">
                                    <Skeleton className="h-5 w-48 flex-1" />
                                    <Skeleton className="h-4 w-24 flex-1 hidden sm:block" />
                                    <Skeleton className="h-6 w-12 flex-1" />
                                    <Skeleton className="h-6 w-16" />
                                    <Skeleton className="h-8 w-24 ml-auto" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </SidebarShell>
    );
}
