export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceDetail: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaText: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for small businesses getting started',
    price: '$1,500',
    priceDetail: 'per month',
    features: [
      'Website audit & optimization',
      'Basic SEO (up to 10 keywords)',
      'Google Business Profile setup',
      'Monthly performance report',
      '2 social media platforms',
      '8 posts per month',
      'Email support'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For businesses ready to scale',
    price: '$3,500',
    priceDetail: 'per month',
    features: [
      'Everything in Starter, plus:',
      'Advanced SEO (up to 30 keywords)',
      'Google Ads management ($2K+ ad spend)',
      'Facebook & Instagram ads',
      '3 social media platforms',
      '20 posts per month',
      'Custom content creation',
      'Bi-weekly strategy calls',
      'Priority support'
    ],
    highlighted: true,
    badge: 'Most Popular',
    ctaText: 'Start Growing'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For established brands seeking dominance',
    price: '$7,500+',
    priceDetail: 'per month',
    features: [
      'Everything in Growth, plus:',
      'Comprehensive SEO (unlimited keywords)',
      'Multi-channel ad management',
      'All social media platforms',
      'Daily posting & stories',
      'Video production & editing',
      'Dedicated account manager',
      'Weekly strategy sessions',
      'Custom reporting dashboard',
      '24/7 priority support'
    ],
    ctaText: 'Contact Us'
  }
];
