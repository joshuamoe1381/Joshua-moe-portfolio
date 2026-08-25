import { aboutCapabilityWall } from "@/data/capabilities";

export function CapabilityWall() {
  return (
    <section className="pt-[96px] pb-8 md:pt-[120px] md:pb-16">
      <div className="grid-page">
        <ul className="group/capabilities">
          {aboutCapabilityWall.map((item) => (
            <li
              key={item}
              className="display-capability py-[0.03em] text-ink opacity-85 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/capabilities:opacity-20 hover:!opacity-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
