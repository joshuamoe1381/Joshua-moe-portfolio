export type BtsStill = {
  src: string;
  alt: string;
  portrait?: boolean;
};

export const btsStills: BtsStill[] = [
  {
    src: "/media/bts/bts-1.jpg",
    alt: "Crew filming a bedroom scene in an industrial loft studio.",
  },
  {
    src: "/media/bts/bts-2.jpg",
    alt: "On-set camera team filming a talent on an urban bridge at sunset.",
  },
  {
    src: "/media/bts/bts-3.jpg",
    alt: "Cinema camera monitors glowing during a low-light production.",
  },
  {
    src: "/media/bts/bts-4.jpg",
    alt: "Overhead camera being adjusted above a bathtub scene on set.",
    portrait: true,
  },
  {
    src: "/media/bts/bts-5.jpg",
    alt: "Live camera monitor on a night exterior production.",
  },
  {
    src: "/media/bts/bts-6.jpg",
    alt: "Night shoot with a projection screen, string lights, and camera crew.",
  },
  {
    src: "/media/bts/bts-7.jpg",
    alt: "RED cinema camera and Cooke lens beside a car on a night set.",
  },
];
