/**
 * CENTRAL PROJECT DATA
 *
 * Add new work here. Cards on Home and /work are generated from this array.
 *
 * Media convention:
 *   /public/projects/<slug>/thumb.jpg   ← thumbnail still
 *   /public/projects/<slug>/logo.svg    ← WHITE client logo
 *   videoUrl                            ← hosted video link (opens in a new tab)
 *
 * Clicking a tile opens `videoUrl` in a new tab when present.
 * Missing thumbnails fall back to a dark placeholder; the white logo still overlays.
 */

export const projectCategories = [
  "Creative Direction",
  "Campaign",
  "Video",
  "Brand",
  "Digital",
  "Social",
  "Photography",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  categories: ProjectCategory[];
  services: string[];
  description: string;
  overview: string;
  role: string;
  challenge: string;
  approach: string;
  result: string;
  thumbnail: string;
  logo: string;
  heroImage: string;
  heroVideo?: string;
  gallery: string[];
  videoUrl?: string;
  externalUrl?: string;
  featured: boolean;
};

const pendingCopy = "TODO: Replace with Joshua's actual project information.";

function entry({
  slug,
  client,
  title,
  categories = ["Video", "Creative Direction"],
  featured = true,
  videoUrl,
}: {
  slug: string;
  client: string;
  title?: string;
  categories?: ProjectCategory[];
  featured?: boolean;
  videoUrl?: string;
}): Project {
  const media = `/projects/${slug}`;
  return {
    slug,
    title: title ?? client,
    client,
    year: "",
    categories,
    services: ["Creative Direction", "Video"],
    description: pendingCopy,
    overview: pendingCopy,
    role: pendingCopy,
    challenge: pendingCopy,
    approach: pendingCopy,
    result: pendingCopy,
    thumbnail: `${media}/thumb.jpg`,
    logo: `${media}/logo.svg`,
    heroImage: `${media}/thumb.jpg`,
    gallery: [],
    videoUrl,
    featured,
  };
}

export const projects: Project[] = [
  entry({
    slug: "ab-dynamics-nissan",
    client: "AB Dynamics + Nissan",
    videoUrl:
      "https://www.dropbox.com/scl/fi/bwd70v7eqo4w2hejonryn/AB-DYNAMICS-NISSAN.mp4?rlkey=z5yhxoaqoz3k2szolz2lkqswo&st=tyzhiqzi&dl=0",
  }),
  entry({
    slug: "toyota",
    client: "Toyota + Tripadvisor",
    title: "Toyota + Tripadvisor",
    videoUrl:
      "https://www.dropbox.com/scl/fi/gle9j0jfc3s3cnrkcz9k2/TOYOTA-TRIPADVISOR.mp4?rlkey=xobawiu657gta8gau32mcwdc5&st=msfcfzmj&dl=0",
  }),
  entry({
    slug: "barstool",
    client: "Barstool",
    categories: ["Social", "Campaign", "Video"],
    videoUrl:
      "https://www.dropbox.com/scl/fi/6fkrmugcesb6lx3cuavhz/BARSTOOL.mp4?rlkey=6t641iut54j3ehzz2pm4e5mk1&st=svr41ty3&dl=0",
  }),
  entry({
    slug: "the-chainsmokers",
    client: "The Chainsmokers",
    categories: ["Video", "Campaign"],
  }),
  entry({
    slug: "loud-luxury",
    client: "Loud Luxury",
    categories: ["Video", "Campaign"],
    videoUrl:
      "https://www.dropbox.com/scl/fi/ihf9cywcmratuk5mrf2xp/LOUD-LUXURY.mp4?rlkey=kvozmeuvb8cl65o998f9wncsb&st=qqui6tbf&dl=0",
  }),
  entry({
    slug: "fcfl",
    client: "Fan Controlled Football League",
    title: "FCFL",
    categories: ["Video", "Campaign", "Social"],
    videoUrl:
      "https://www.dropbox.com/scl/fi/d25eqjqozbzmbufygfe6r/FCFL.mp4?rlkey=0yf0y79xiy3foxjglp2r7kidb&st=r2505ohw&dl=0",
  }),
  entry({
    slug: "bob-menery",
    client: "Bob Menery",
    categories: ["Video", "Social"],
    videoUrl: "https://youtu.be/_U6bdI8SZCU",
  }),
  entry({
    slug: "charlie-onnafriday",
    client: "Charlie ONNAFRIDAY",
    categories: ["Video", "Social"],
    videoUrl:
      "https://www.dropbox.com/scl/fi/46q7v66m1wsllsmioz0il/CHARLIE-ONNAFRIDAY.mp4?rlkey=t7hl99074xb3r7dgjfnss184d&st=i9c4jz7p&dl=0",
  }),
  entry({
    slug: "the-grass-league",
    client: "The Grass League",
    categories: ["Video", "Campaign"],
    videoUrl:
      "https://www.dropbox.com/scl/fi/7ow8j1qos93qg0oej8du3/THE-GRASS-LEAGUE.mp4?rlkey=ndd83vf1v0vaomc51ghflapni&st=g5pu3c44&dl=0",
  }),
  entry({
    slug: "samsung",
    client: "Samsung",
    videoUrl:
      "https://www.dropbox.com/scl/fi/s69xmfqjkhjm5t51pge7m/SAMSUNG.mp4?rlkey=f0eo2rxpvdfdlg0bffuvu8ohn&st=3wu4x3kh&dl=0",
  }),
  entry({
    slug: "twinsick",
    client: "Twinsick",
    categories: ["Video", "Campaign"],
    videoUrl:
      "https://www.dropbox.com/scl/fi/s063t5vyhfpfbrmuq0f63/TWINSICK.MP4?rlkey=my0dm9z6g9whnpfe4j9outnj5&st=hfikpye0&dl=0",
  }),
  entry({
    slug: "discolines",
    client: "Discolines",
    categories: ["Video", "Campaign"],
    videoUrl:
      "https://www.dropbox.com/scl/fi/7jwqlefycpf8crbke0lpi/DISCOLINES.mp4?rlkey=l2u98s1gwida3ibvdktahtk3p&st=5zy3xugz&dl=0",
  }),
  entry({
    slug: "saltmine-studios",
    client: "Saltmine Studios",
    categories: ["Video", "Brand"],
    videoUrl:
      "https://www.dropbox.com/scl/fi/8y9wi4avtv6uxus29j5qy/SALTMINE-STUDIOS.mp4?rlkey=rgh5mv7rxa6s5jmtqpmtzgi0b&st=e0f6cjlp&dl=0",
  }),
  entry({
    slug: "arizona-biltmore",
    client: "Arizona Biltmore",
    categories: ["Video", "Brand", "Photography"],
    videoUrl:
      "https://www.dropbox.com/scl/fi/gt0lw4qgdy0qqusi4fedj/ARIZONA-BILTMORE.mp4?rlkey=66hoaamh928honih8dalbadox&st=34bnp3bb&dl=0",
  }),
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}

export function getProjectHref(project: Project): string | undefined {
  return project.videoUrl || project.externalUrl;
}
