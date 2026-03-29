"use client";
import { useEffect, useState } from "react";

export type BrowserName = "chrome" | "brave" | "other";

function isMobileDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function useBrowser(): BrowserName | null {
  const [browser, setBrowser] = useState<BrowserName | null>(() => {
    // Mobile: return "chrome" synchronously — no detection needed, no skeleton.
    // Desktop: return null so the skeleton shows while async detection runs.
    return isMobileDevice() ? "chrome" : null;
  });

  useEffect(() => {
    // Mobile already resolved synchronously above — skip detection entirely.
    if (isMobileDevice()) return;

    const detect = async (): Promise<BrowserName> => {
      if (!navigator.userAgent.includes("Chrome/")) return "other";

      const nav = navigator as Navigator & {
        brave?: { isBrave: () => Promise<boolean> };
      };
      if (!nav.brave) return "chrome";

      try {
        return (await nav.brave.isBrave()) ? "brave" : "chrome";
      } catch {
        return "chrome";
      }
    };

    detect().then(setBrowser).catch(() => setBrowser("other"));
  }, []);

  return browser;
}
