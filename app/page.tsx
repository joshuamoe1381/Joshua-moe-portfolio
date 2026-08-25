import { About } from "@/components/sections/home/About";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { Hero } from "@/components/sections/home/Hero";
import { SelectedWork } from "@/components/sections/home/SelectedWork";
import { Showreel } from "@/components/sections/home/Showreel";
import { LetsTalk } from "@/components/sections/shared/LetsTalk";
import { btsStills } from "@/data/bts";
import { creativeReel } from "@/data/site";
import { resolvePublicSrc } from "@/lib/media";

export default function HomePage() {
  const stills = btsStills.flatMap((still) => {
    const src = resolvePublicSrc(still.src);
    return src ? [{ ...still, src }] : [];
  });

  return (
    <>
      <Hero
        heroSrc={resolvePublicSrc("/media/joshua-hero.jpg")}
        btsStills={stills}
      />
      <Showreel
        src={resolvePublicSrc(creativeReel.poster)}
        videoUrl={creativeReel.videoUrl}
      />
      <SelectedWork />
      <About />
      <Capabilities />
      <LetsTalk />
    </>
  );
}
