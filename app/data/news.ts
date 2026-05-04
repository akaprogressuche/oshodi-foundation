import { photos } from "./photos";

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string; // ISO YYYY-MM-DD
  category: "Announcement" | "Impact" | "Programs" | "Story";
  image: string;
  alt: string;
};

/**
 * Starter news posts. Content is drawn from the proposal PDF — realistic
 * milestones the foundation has shared. Replace with foundation-authored
 * posts as real updates accumulate.
 */
export const news: NewsPost[] = [
  {
    slug: "welcoming-the-oshodi-family-foundation",
    title: "Welcoming the Oshodi Family Foundation",
    excerpt:
      "We're a community-centered nonprofit committed to strengthening families, addressing food insecurity, and expanding access to education and leadership opportunities.",
    body: [
      "Today we introduce the Oshodi Family Foundation — a community-centered nonprofit founded on the belief that when families are supported and individuals are equipped with opportunity, entire communities can thrive.",
      "Our work combines direct community support — through programs like Helen's Food Pantry and Kiss the Cook — with educational and leadership development through STATS and the John Oshodi Scholarship of Resilience.",
      "The foundation is led by John Oshodi, a technology executive and entrepreneur whose own path of resilience continues to inform our mission. We're just getting started, and we're glad you're here.",
    ],
    date: "2023-04-12",
    category: "Announcement",
    image: photos.about,
    alt: "Diverse hands stacked in unity",
  },
  {
    slug: "scholarship-celebrates-20-recipients",
    title: "John Oshodi Scholarship of Resilience celebrates 20 recipients",
    excerpt:
      "Since 2023, the foundation has awarded 20 scholarships and supported 15 paid internships — early proof that resilience and opportunity can change lives.",
    body: [
      "We are proud to share that the John Oshodi Scholarship of Resilience has now supported 20 recipients pursuing education and personal growth despite real adversity.",
      "Alongside the scholarships, our partners have hosted 15 paid internships — placing recipients in environments where their work is seen, valued, and compensated.",
      "Each story is unique, but the through-line is the same: when opportunity meets resilience, futures expand. Our gratitude goes to the partners and donors making this possible — and our commitment is to multiply this impact in the years ahead.",
    ],
    date: "2024-12-01",
    category: "Impact",
    image: photos.impact,
    alt: "Graduates celebrating with caps in the air",
  },
  {
    slug: "stats-stem-cohort",
    title:
      "STATS: bringing AI, machine learning, and robotics training to underserved communities",
    excerpt:
      "Our youth and adult STEM initiative is preparing the next generation of innovators with hands-on training in high-demand technical fields.",
    body: [
      "STATS — short for \"My Status Is Greater Than the Statistics\" — is the foundation's leadership and workforce development program, focused on empowering youth and adults from underserved communities.",
      "Through hands-on learning, mentorship, and leadership development, participants gain technical skills in four pillars: artificial intelligence, machine learning, robotics, and emerging technologies — alongside the confidence and vision needed to succeed in a rapidly evolving global economy.",
      "The program isn't just about jobs. It's about challenging the limiting narratives that tell young people who they can become — and replacing them with evidence to the contrary.",
    ],
    date: "2024-08-20",
    category: "Programs",
    image: photos.initiativeStats,
    alt: "Young student carrying books outside school building",
  },
  {
    slug: "helens-food-pantry-partnerships",
    title:
      "Helen's Food Pantry deepens local grocer and farmer partnerships",
    excerpt:
      "Strong partnerships are how we maximize the impact of every donated dollar — and how we keep dignity at the center of food security.",
    body: [
      "Helen's Food Pantry was founded to address food insecurity head-on, ensuring families have consistent access to nutritious meals. But running a pantry well isn't just about logistics — it's about who you partner with.",
      "Through ongoing partnerships with local grocers, farmers, and community supporters, we keep food sourcing close to home, support local food systems, and stretch every donated dollar further. Families are never asked to choose between meals and other essentials.",
      "We're grateful to every grocer, farmer, and volunteer making this possible. If you're a local provider interested in partnering with us, we'd love to hear from you.",
    ],
    date: "2024-04-08",
    category: "Programs",
    image: photos.initiativePantry,
    alt: "Volunteers organizing community food donations",
  },
];

export function getPost(slug: string): NewsPost | undefined {
  return news.find((p) => p.slug === slug);
}

export function getAllPosts(): NewsPost[] {
  return [...news].sort((a, b) => (a.date > b.date ? -1 : 1));
}
