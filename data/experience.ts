export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  detail?: string;
};

export const experience: Experience[] = [
  {
    company: "Sprouter / Sprouter Studios",
    role: "Creative Director",
    location: "Scottsdale, AZ · Hybrid",
    dates: "September 2020 — Present",
    summary:
      "Lead creative end-to-end across commercials, social, live events, podcasts, photography, email, web, and print — from brand voice and campaign concepts through art direction, production, and final delivery.",
    detail:
      "Lead creative retainers, content systems, social campaigns, digital builds, production crews, freelancers, and cross-functional partners while remaining hands-on across shooting, directing, editing, design, and execution.",
  },
  {
    company: "Two Friends Media",
    role: "Owner, Cinematographer & Editor",
    location: "Minneapolis, MN",
    dates: "June 2019 — August 2020",
    summary:
      "Founded and operated a media agency producing film, photography, design, and campaign creative for startups, talent, and brand clients.",
    detail:
      "Generated more than $75,000 in revenue across two quarters before COVID-19 disrupted operations.",
  },
  {
    company: "Flipgrid / Microsoft",
    role: "Marketing & User Engagement Intern",
    location: "Minneapolis, MN · Hybrid",
    dates: "August 2017 — May 2019",
    summary:
      "Supported social strategy, sponsorships, nurture campaigns, webinars, product announcements, and educator communications during Flipgrid's Microsoft acquisition.",
    detail: "Helped grow an ambassador ecosystem from launch to 500+ members.",
  },
  {
    company: "Dual Studios",
    role: "Production Intern — Part-Time",
    location: "Minneapolis, MN · Hybrid",
    dates: "June 2018 — August 2020",
    summary:
      "Supported multi-project production deadlines spanning camera operation, lighting, editing, and client deliverables.",
  },
];
