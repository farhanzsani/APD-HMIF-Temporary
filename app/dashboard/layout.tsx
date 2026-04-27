import { InactivityGuard } from "@/components/inactivity-guard";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <InactivityGuard>{children}</InactivityGuard>;
}
