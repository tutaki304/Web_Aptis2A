import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "default" | "success" | "warning";
  className?: string;
}

export default function Badge({ label, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-0.5 text-xs font-medium",
        {
          "bg-blue-100 text-blue-700": variant === "default",
          "bg-green-100 text-green-700": variant === "success",
          "bg-yellow-100 text-yellow-700": variant === "warning",
        },
        className
      )}
    >
      {label}
    </span>
  );
}
