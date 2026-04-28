import React from "react";
import { SidebarShell } from "@/components/sidebar-shell";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function MonthlyRankLoading() {
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
                        <Skeleton className="h-7 w-48 mb-1" />
                        <Skeleton className="h-4 w-72" />
                    </div>
                </div>

                {/* Filter Selector Row */}
                <Card className="border-primary/10">
                    <CardHeader className="py-4">
                        <Skeleton className="h-5 w-40 mb-2" />
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Skeleton className="h-10 w-full sm:w-48" />
                            <Skeleton className="h-10 w-full sm:w-48" />
                            <Skeleton className="h-10 w-full sm:w-32" />
                            <Skeleton className="h-10 w-full sm:w-32 sm:ml-auto" />
                        </div>
                    </CardHeader>
                </Card>

                {/* Top 3 Cards Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className={`border-2 ${i === 1 ? 'border-amber-200' : i === 2 ? 'border-slate-300' : 'border-amber-700/30'}`}>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <div className="space-y-1">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-3 w-12" />
                                </div>
                                <Skeleton className="h-10 w-10 rounded-full" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-6 w-40 mb-2" />
                                <Skeleton className="h-4 w-56 mb-4" />
                                <div className="space-y-2 pt-4 border-t border-border/40">
                                    <Skeleton className="h-3 w-full" />
                                    <Skeleton className="h-3 w-3/4" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Ranking Table Card */}
                <Card className="overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <Skeleton className="h-6 w-40 mb-1" />
                            <Skeleton className="h-4 w-60" />
                        </div>
                        <Skeleton className="h-6 w-32 rounded-full hidden sm:block" />
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="border-b border-border/60 p-3 bg-slate-50/50 flex gap-4 hidden md:flex">
                            <Skeleton className="h-4 w-full" />
                        </div>
                        <div className="p-4 space-y-4">
                            {[1, 2, 3, 4, 5, 6].map((row) => (
                                <div key={row} className="flex flex-col sm:flex-row gap-4 sm:items-center border-b border-border/40 pb-4 last:border-0 last:pb-0">
                                    <Skeleton className="h-8 w-8 rounded-full shrink-0" />
                                    <div className="flex-1 space-y-2">
                                        <Skeleton className="h-5 w-48" />
                                        <Skeleton className="h-4 w-32" />
                                    </div>
                                    <Skeleton className="h-5 w-24 hidden lg:block" />
                                    <Skeleton className="h-5 w-32 hidden md:block" />
                                    <div className="ml-auto flex items-center gap-4">
                                        <Skeleton className="h-5 w-16" />
                                        <Skeleton className="h-6 w-16" />
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
