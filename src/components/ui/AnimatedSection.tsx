"use client";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in-up" | "fade-in" | "slide-in-right";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = "fade-in-up",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView();

  const animationClass = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "slide-in-right": "animate-slide-in-right",
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isInView ? undefined : 0,
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className={isInView ? animationClass : ""} style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}>
        {children}
      </div>
    </div>
  );
}
