import { brands } from "@/data/brands";

function LogoRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex items-center gap-12 pr-12 md:gap-16 md:pr-16"
      aria-hidden={hidden || undefined}
    >
      {brands.map((brand) => (
        <li key={brand.name} className="flex h-8 shrink-0 items-center md:h-9">
          {/* Logos are pre-converted white PNGs; native img avoids next/image SVG hydration issues. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brand.logo}
            alt={hidden ? "" : brand.name}
            className="h-full w-auto max-w-[10.5rem] object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export function BrandMarquee() {
  return (
    <div className="brand-marquee relative overflow-hidden" aria-label="Selected brands">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent md:w-24" />
      <div className="brand-marquee-track flex items-center">
        <LogoRow />
        <LogoRow hidden />
      </div>
    </div>
  );
}
