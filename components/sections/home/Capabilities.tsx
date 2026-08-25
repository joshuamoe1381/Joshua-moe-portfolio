import { homeCapabilities } from "@/data/capabilities";

export function Capabilities() {
  return (
    <section className="section-space overflow-hidden border-t border-line">
      <div className="grid-page mb-10 md:mb-16">
        <p className="meta text-ink-muted">Capabilities</p>
      </div>

      <div className="grid-page">
        <ul className="group/capabilities flex flex-col">
          {homeCapabilities.map((item) => (
            <li
              key={item}
              className="display-capability py-[0.04em] text-ink opacity-75 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/capabilities:opacity-25 hover:!opacity-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
