import React from "react";

/**
 * Kicker — the small "Chapter I" label above each chapter title. Same
 * typographic voice everywhere so chapters feel like acts in one book.
 */
export function Kicker({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "yellow" | "orange" | "green";
}) {
  const toneClass = {
    blue: "text-brand-blue",
    yellow: "text-brand-yellow",
    orange: "text-brand-orange",
    green: "text-brand-green",
  }[tone];
  return <span className={`kicker ${toneClass}`}>{children}</span>;
}
