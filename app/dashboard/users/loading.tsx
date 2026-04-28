import React from "react";
import { SidebarShell } from "@/components/sidebar-shell";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function UsersLoading() {
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
                        <Skeleton className="h-7 w-24 mb-1" />
                        <Skeleton className="h-4 w-64" />
                    </div>
                    <div className="flex gap-2">
                        <Skeleton className="h-9 w-32" />
                        <Skeleton className="h-9 w-28" />
                    </div>
                </div>

                {/* Ringkasan User (5 items) */}
                <Card className="border-primary/10">
                    <CardHeader className="flex flex-row items-center justify-between gap-2">
                        <div>
                            <Skeleton className="h-6 w-40 mb-1" />
                            <Skeleton className="h-4 w-80" />
                        </div>
                        <Skeleton className="h-6 w-32 rounded-full" />
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 @4xl/main:grid-cols-5">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="border border-border/60 bg-card/60 rounded-lg p-3">
                                    <Skeleton className="h-3 w-20 mb-2" />
                                    <Skeleton className="h-8 w-14" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Ringkasan per Divisi (4 items) */}
                <Card>
                    <CardHeader>
                        <Skeleton className="h-6 w-48" />
                    </CardHeader>
                    <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex items-center justify-between rounded-lg border border-border/60 px-3 py-2">
                                <Skeleton className="h-5 w-24" />
                                <Skeleton className="h-5 w-16 rounded-full" />
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Table */}
                <Card className="overflow-hidden">
                    <CardHeader>
                        <Skeleton className="h-6 w-32 mb-1" />
                        <Skeleton className="h-4 w-56" />
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="border-b border-border/60 p-3 bg-slate-50/50 flex gap-4">
                            <Skeleton className="h-5 w-full" />
                        </div>
                        <div className="p-4 space-y-4">
                            {[1, 2, 3, 4, 5, 6].map((row) => (
                                <div key={row} className="flex gap-4 items-center">
                                    <div className="flex flex-col gap-1 w-full max-w-[200px]">
                                        <Skeleton className="h-5 w-full" />
                                        <Skeleton className="h-4 w-2/3" />
                                    </div>
                                    <Skeleton className="h-5 w-32 hidden sm:block" />
                                    <Skeleton className="h-6 w-20 rounded-full" />
                                    <div className="ml-auto flex gap-2">
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
