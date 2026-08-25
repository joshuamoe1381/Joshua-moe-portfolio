import { footerLinks } from "@/data/nav";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="grid-page grid gap-10 py-10 md:grid-cols-3 md:items-end md:py-14">
        <p className="meta text-ink">
          {site.name} © {new Date().getFullYear()}
        </p>
        <p className="meta text-ink-secondary md:text-center">
          {site.location.label}
        </p>
        <nav
          className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end"
          aria-label="Footer"
        >
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                item.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="meta link-underline text-ink-secondary hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
