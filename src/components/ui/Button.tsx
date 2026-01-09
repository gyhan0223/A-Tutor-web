import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  target?: "_blank" | "_self";
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  target = "_self",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/20 active:scale-[0.99]";

  const variants: Record<Variant, string> = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800",
    secondary: "bg-white text-zinc-900 ring-1 ring-zinc-200 hover:bg-zinc-50",
    ghost: "bg-transparent text-zinc-700 hover:bg-zinc-100",
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-2 text-xs rounded-xl",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-4 text-[15px]",
  };

  return (
    <Link
      href={href}
      target={target}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
