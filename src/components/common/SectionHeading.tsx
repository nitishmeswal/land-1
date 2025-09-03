import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0361DA]/10 text-[#0361DA] text-sm font-medium mb-4">
          <span className="mr-1">✨</span>
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl text-white font-bold mb-4 relative inline-block">
        {title}
        <div
          className={cn(
            "absolute -bottom-2 h-1 bg-gradient-to-r from-[#0361DA] to-blue-500 rounded-full",
            align === "center"
              ? "left-1/2 -translate-x-1/2 w-24"
              : "left-0 w-16"
          )}
        ></div>
      </h2>

      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
