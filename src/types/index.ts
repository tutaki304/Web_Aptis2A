export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  price: number;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  score: string;
  avatar?: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
