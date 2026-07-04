"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site-config";

const sections = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/#top" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-6 text-sm md:flex">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className="text-muted transition-colors hover:text-foreground">
              {s.label}
            </a>
          ))}
          <Link href="/blog" className="text-muted transition-colors hover:text-foreground">
            Blog
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-muted hover:bg-card hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-2 text-sm text-muted hover:bg-card hover:text-foreground"
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  );
}
