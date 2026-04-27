/**
 * useInactivityLogout
 *
 * Auto-logout when:
 *  1. User has no interaction for `timeoutMs` milliseconds, OR
 *  2. The tab was hidden and then becomes visible again after `timeoutMs` ms
 *
 * Default: 30 minutes (1_800_000 ms)
 */

"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes

const ACTIVITY_EVENTS = [
    "mousemove",
    "mousedown",
    "keydown",
    "touchstart",
    "scroll",
    "wheel",
    "click",
] as const;

export function useInactivityLogout(
    timeoutMs: number = INACTIVITY_TIMEOUT_MS
) {
    const router = useRouter();
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hiddenAtRef = useRef<number | null>(null);

    const doLogout = useCallback(async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
        } catch {
            // ignore fetch errors – still redirect
        } finally {
            // Replace history so the user can't go back to protected page
            window.location.replace("/");
        }
    }, []);

    const resetTimer = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(doLogout, timeoutMs);
    }, [doLogout, timeoutMs]);

    useEffect(() => {
        // Start the inactivity timer on mount
        resetTimer();

        // Attach activity listeners – each resets the timer
        const handleActivity = () => resetTimer();
        ACTIVITY_EVENTS.forEach((event) =>
            window.addEventListener(event, handleActivity, { passive: true })
        );

        // Handle tab visibility changes
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Tab is being hidden – record the time
                hiddenAtRef.current = Date.now();
            } else {
                // Tab becomes visible again
                if (hiddenAtRef.current !== null) {
                    const elapsed = Date.now() - hiddenAtRef.current;
                    hiddenAtRef.current = null;

                    if (elapsed >= timeoutMs) {
                        // Tab was hidden longer than the allowed timeout → logout immediately
                        doLogout();
                        return;
                    }
                }
                // Still within the allowed window – reset the timer for continued use
                resetTimer();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            ACTIVITY_EVENTS.forEach((event) =>
                window.removeEventListener(event, handleActivity)
            );
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [resetTimer, doLogout, timeoutMs]);
}
