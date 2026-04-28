import React from "react";
import { SidebarShell } from "@/components/sidebar-shell";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function IndicatorsLoading() {
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
                    <Skeleton className="h-9 w-36" />
                </div>

                {/* Ringkasan Indikator (2 items) */}
                <Card className="border-primary/10">
                    <CardHeader className="flex flex-row items-center justify-between gap-2">
                        <div>
                            <Skeleton className="h-6 w-48 mb-1" />
                            <Skeleton className="h-4 w-60" />
                        </div>
                        <Skeleton className="h-6 w-32 rounded-full" />
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="border border-border/60 bg-card/60 rounded-lg p-3">
                                    <Skeleton className="h-3 w-16 mb-2" />
                                    <Skeleton className="h-8 w-12" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Filter Navigation */}
                <div className="flex gap-2 border-b pb-4 overflow-x-auto">
                    <Skeleton className="h-9 w-32 rounded-full hidden sm:block" />
                    <Skeleton className="h-9 w-40 rounded-full" />
                    <Skeleton className="h-9 w-36 rounded-full" />
                </div>

                {/* Table Group */}
                <Card className="overflow-hidden border-sky-100">
                    <CardHeader className="pb-2 bg-sky-50/50">
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-6 w-32 rounded-full" />
                            <Skeleton className="h-4 w-40" />
                            <Skeleton className="h-4 w-16 ml-auto" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="border-b border-border/60 p-3 bg-slate-50/50 flex gap-4">
                            <Skeleton className="h-5 w-full" />
                        </div>
                        <div className="p-4 space-y-4">
                            {[1, 2, 3, 4].map((row) => (
                                <div key={row} className="flex gap-4 items-center">
                                    <Skeleton className="h-5 w-full max-w-[300px]" />
                                    <Skeleton className="h-6 w-16 rounded-full ml-auto" />
                                    <div className="ml-4 flex gap-2">
                                        <Skeleton className="h-8 w-8" />
                                        <Skeleton className="h-8 w-8" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Additional Table Group */}
                <Card className="overflow-hidden border-slate-200">
                    <CardHeader className="pb-2 bg-slate-50/50">
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-6 w-32 rounded-full" />
                            <Skeleton className="h-4 w-16 ml-auto" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="p-4 space-y-4">
                            {[1, 2].map((row) => (
                                <div key={row} className="flex gap-4 items-center">
                                    <Skeleton className="h-5 w-full max-w-[300px]" />
                                    <Skeleton className="h-6 w-16 rounded-full ml-auto" />
                                    <div className="ml-4 flex gap-2">
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
