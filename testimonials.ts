export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechFlow Solutions',
    quote: 'TrueVision transformed our digital presence completely. Within 3 months, our organic traffic increased by 240% and lead quality improved dramatically. Their strategic approach and attention to detail is unmatched.',
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Urban Fitness Co.',
    quote: 'The ROI we\'ve seen from our Google Ads campaigns has been incredible. TrueVision doesn\'t just run ads—they understand our business and optimize for real results. Best marketing investment we\'ve made.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Luxe Beauty Brand',
    quote: 'Working with TrueVision has been a game-changer for our social media presence. Their content strategy and creative execution helped us grow from 5K to 50K followers in 6 months with genuine engagement.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Owner',
    company: 'Thompson Law Firm',
    quote: 'Professional, responsive, and results-driven. TrueVision redesigned our website and implemented an SEO strategy that tripled our qualified leads. They truly understand what it takes to succeed online.',
    rating: 5
  }
];
