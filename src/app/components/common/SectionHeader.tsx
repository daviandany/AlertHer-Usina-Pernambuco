import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  badge?: ReactNode;
}

export function SectionHeader({
  title,
  description,
  align = "center",
  className = "",
  badge,
}: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignmentClass} ${className}`.trim()}>
      {badge}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {description ? <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p> : null}
    </div>
  );
}
