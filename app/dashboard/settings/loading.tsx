import React from "react";
import { SidebarShell } from "@/components/sidebar-shell";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function SettingsLoading() {
    const sidebarStyle = {
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
    } as React.CSSProperties;

    return (
        <SidebarShell sidebarStyle={sidebarStyle}>
            <div className="flex flex-1 flex-col p-4 md:p-6 gap-6 w-full max-w-4xl max-w-full">
                {/* Header */}
                <div className="flex flex-col gap-3">
                    <Skeleton className="h-7 w-32 mb-1" />
                    <Skeleton className="h-4 w-60" />
                </div>

                <div className="grid gap-6 md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_300px]">
                    <div className="space-y-6">
                        {/* Profile Settings Card */}
                        <Card>
                            <CardHeader>
                                <Skeleton className="h-6 w-40 mb-1" />
                                <Skeleton className="h-4 w-72" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                                <Skeleton className="h-10 w-32 mt-4" />
                            </CardContent>
                        </Card>

                        {/* Password / Security Card */}
                        <Card>
                            <CardHeader>
                                <Skeleton className="h-6 w-48 mb-1" />
                                <Skeleton className="h-4 w-60" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-10 w-full" />
                                </div>
                                <Skeleton className="h-10 w-40 mt-4" />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <Skeleton className="h-5 w-32" />
                            </CardHeader>
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                                <Skeleton className="h-24 w-24 rounded-full" />
                                <Skeleton className="h-4 w-40" />
                                <Skeleton className="h-9 w-full rounded-md" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </SidebarShell>
    );
}
