"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

function NavLink({
  href,
  label,
  external,
  className,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active =
    !external &&
    !href.includes("#") &&
    (pathname === href || (href !== "/" && pathname.startsWith(href)));

  if (external || href.includes("#")) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external && !href.startsWith("mailto:") ? "_blank" : undefined}
        rel={
          external && !href.startsWith("mailto:")
            ? "noopener noreferrer"
            : undefined
        }
        className={cn("link-underline", className)}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("link-underline", active && "text-ink", className)}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  return <HeaderInner key={pathname} />;
}

function HeaderInner() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="grid-page pointer-events-auto flex h-[72px] items-center justify-between md:h-[84px]">
          <Link
            href="/"
            className="meta text-ink transition-opacity duration-300 hover:opacity-70"
          >
            {site.shortName} ©
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                label={item.label}
                external={item.external}
                className="meta text-ink-secondary hover:text-ink"
              />
            ))}
          </nav>

          <button
            type="button"
            className="meta text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bg lg:hidden"
          >
            <nav
              className="grid-page flex h-full flex-col justify-end pb-16 pt-28"
              aria-label="Mobile"
            >
              <div className="flex flex-col gap-3">
                <NavLink
                  href="/"
                  label="Home"
                  onClick={() => setOpen(false)}
                  className="font-display text-[clamp(2.75rem,12vw,4.5rem)] leading-[0.9] tracking-[-0.05em] uppercase"
                />
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 * (index + 1),
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <NavLink
                      href={item.href}
                      label={item.label}
                      external={item.external}
                      onClick={() => setOpen(false)}
                      className="font-display text-[clamp(2.75rem,12vw,4.5rem)] leading-[0.9] tracking-[-0.05em] uppercase"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="meta mt-16 text-ink-muted">{site.location.label}</p>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
