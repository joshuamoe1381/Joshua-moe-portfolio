import { cn } from "@/lib/cn";

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-[0.9em] w-[0.9em]", className)}
    >
      <path
        d="M5 19L19 5M19 5H8M19 5V16"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
