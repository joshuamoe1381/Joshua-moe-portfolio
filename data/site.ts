export const site = {
  name: "Joshua Moe",
  shortName: "JM",
  jobTitle: "Creative Director",
  email: "moejosh.personal@gmail.com",
  linkedin: "https://linkedin.com/in/joshua-moe-5624b7128",
  location: {
    city: "Minneapolis",
    region: "MN",
    label: "Minneapolis, MN",
  },
  availability: "Available for select opportunities",
  disciplines:
    "Brand Strategy · Content Systems · Digital Campaigns · Hands-On Production · Client Partnership · Leadership",
  resumePath: "/Joshua-Moe-Resume-2026.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Portfolio of Joshua Moe, a Creative Director working with major brands and artists across production, campaigns, and digital retainers — from on-set crews to remote teams.",
} as const;

export const mailto = `mailto:${site.email}`;

export const creativeReel = {
  poster: "/media/joshua-reel.jpg",
  videoUrl:
    "https://www.dropbox.com/scl/fi/0sfw8010jm7ksrdvsfgw0/CREATIVE-REEL.mp4?rlkey=cwvcno2e9auqfj269c5vmsqng&st=w3mv96vx&dl=0",
};
