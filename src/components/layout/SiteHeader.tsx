"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { LINKS } from "@/lib/links";

const NAV = [
  { href: "/#categories", label: "과목군" },
  { href: "/#how", label: "진행 방식" },
  { href: "/#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50",
        "border-b border-zinc-200/60",
        "bg-white/70 backdrop-blur",
        scrolled ? "shadow-sm" : "",
      ].join(" ")}
    >
      <Container className="flex h-14 items-center justify-between">
        {/* Brand */}
        <Link href={LINKS.home} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-zinc-900" aria-hidden />
          <div className="text-sm font-semibold text-zinc-900">A+ Tutor</div>
        </Link>

        {/* Nav (desktop) */}
        <nav className="hidden items-center gap-6 text-sm text-zinc-600 sm:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-zinc-900">
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Button href={LINKS.tutorApply} variant="secondary" size="sm">
            튜터 지원
          </Button>
          <Button href={LINKS.studentApply} variant="primary" size="sm">
            매칭 신청
          </Button>
        </div>
      </Container>
    </header>
  );
}
