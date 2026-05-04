export type Initiative = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  pillars?: string[];
};

export const initiatives: Initiative[] = [
  {
    slug: "helens-food-pantry",
    name: "Helen's Food Pantry",
    tagline: "Food security through dignity and partnership.",
    description:
      "Created to address food insecurity and ensure families have consistent access to nutritious meals. Through partnerships with local grocers, farmers, and community supporters, the pantry maximizes impact while supporting local food systems.",
    image: "/images/oshodi/initiative-pantry.jpg",
  },
  {
    slug: "kiss-the-cook",
    name: "Kiss the Cook",
    tagline: "Relief meals that restore and reconnect.",
    description:
      "A relief meals program that covers the cost of a wholesome, home-cooked meal — allowing families to pause from daily pressures and reconnect over a shared table. Partners with local restaurants and food providers.",
    image: "/images/oshodi/initiative-meals.jpg",
  },
  {
    slug: "stats",
    name: "STATS",
    tagline: "My Status Is Greater Than the Statistics.",
    description:
      "A leadership and workforce development initiative empowering youth and adults from underserved communities through hands-on STEM training in AI, machine learning, robotics, and emerging technologies.",
    image: "/images/oshodi/initiative-stats.jpg",
    pillars: ["Artificial Intelligence (AI)", "Machine Learning", "Robotics", "Emerging Technologies"],
  },
  {
    slug: "john-oshodi-scholarship",
    name: "John Oshodi Scholarship of Resilience",
    tagline: "Honoring resilience. Opening doors.",
    description:
      "Established to support individuals overcoming adversity in pursuit of education and personal growth. Named for the foundation's namesake — a technology executive whose own path of resilience continues to bridge opportunity and access.",
    image: "/images/oshodi/impact.jpg",
  },
];
