"use client";

import { cn } from "@/lib/utils";
import type { CVLocale } from "@/i18n/section-labels";

export function LocaleToggle({
  locale,
  loading,
  error,
  onToggle,
}: {
  locale: CVLocale;
  loading?: boolean;
  error?: string | null;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      {error && (
        <span className="text-xs text-red-500 dark:text-red-400 max-w-[140px] truncate" role="alert">
          {error}
        </span>
      )}
      <button
        type="button"
        onClick={onToggle}
        disabled={loading}
        className={cn(
          "h-8 rounded-lg border border-cv px-2.5 text-xs font-mono",
          "text-cv-muted hover:border-electric-500/50 hover:text-cv-accent",
          "disabled:opacity-60 transition-colors",
        )}
        aria-label="Switch language"
      >
        {loading ? "…" : locale === "vi" ? "EN" : "VI"}
      </button>
    </div>
  );
}
