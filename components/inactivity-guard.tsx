"use client";

import { useInactivityLogout } from "@/hooks/use-inactivity-logout";

/**
 * InactivityGuard
 *
 * Wrap protected layouts with this component.
 * It silently monitors user activity and auto-logouts after inactivity.
 *
 * Usage in a Server Component layout:
 *   <InactivityGuard>{children}</InactivityGuard>
 */
export function InactivityGuard({ children }: { children: React.ReactNode }) {
    useInactivityLogout(); // 30-minute default
    return <>{children}</>;
}
