export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string;
  metrics: Array<{
    label: string;
    value: string;
    description: string;
  }>;
  services: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-commerce Revenue Growth',
    client: 'Luxe Fashion Boutique',
    industry: 'Fashion & Retail',
    summary: 'Transformed an underperforming e-commerce store into a 7-figure revenue generator through strategic paid advertising and conversion optimization.',
    challenge: 'The client had a beautiful product line but struggled with low traffic and poor conversion rates. Their previous marketing efforts yielded minimal ROI.',
    approach: 'We implemented a comprehensive strategy combining Google Shopping ads, Instagram advertising, influencer partnerships, and website conversion optimization. We also rebuilt their product pages with SEO best practices.',
    results: 'Within 6 months, the client saw a complete transformation of their business with sustainable, profitable growth across all channels.',
    metrics: [
      { label: 'Revenue Increase', value: '340%', description: 'Year-over-year growth' },
      { label: 'ROAS', value: '5.8x', description: 'Return on ad spend' },
      { label: 'Conversion Rate', value: '+185%', description: 'Website conversion improvement' },
      { label: 'Traffic Growth', value: '+420%', description: 'Qualified website visitors' }
    ],
    services: ['Google Ads', 'Instagram Ads', 'SEO', 'Web Design']
  },
  {
    id: '2',
    title: 'B2B Lead Generation Success',
    client: 'TechSolutions Pro',
    industry: 'B2B SaaS',
    summary: 'Generated a consistent pipeline of high-quality enterprise leads through targeted LinkedIn campaigns and content marketing.',
    challenge: 'A B2B SaaS company needed to scale their lead generation efforts to support aggressive growth targets. Their existing efforts were inconsistent and costly.',
    approach: 'We developed a multi-channel lead generation strategy focused on LinkedIn advertising, SEO-optimized content, and marketing automation. We created targeted campaigns for different buyer personas and implemented lead scoring.',
    results: 'The client achieved predictable, scalable lead generation with significantly improved lead quality and sales conversion rates.',
    metrics: [
      { label: 'Qualified Leads', value: '450+', description: 'Per month average' },
      { label: 'Cost Per Lead', value: '-62%', description: 'Reduction in CPL' },
      { label: 'Sales Conversion', value: '+89%', description: 'Lead-to-customer rate' },
      { label: 'Pipeline Value', value: '$2.4M', description: 'Monthly pipeline generated' }
    ],
    services: ['Lead Generation', 'Content Creation', 'Social Media Management', 'SEO']
  },
  {
    id: '3',
    title: 'Local Business Domination',
    client: 'Elite Dental Care',
    industry: 'Healthcare',
    summary: 'Helped a dental practice become the #1 choice in their local market through local SEO and reputation management.',
    challenge: 'A high-quality dental practice was losing patients to competitors despite superior service. They had minimal online presence and few reviews.',
    approach: 'We implemented a comprehensive local SEO strategy, optimized their Google Business Profile, launched a review generation campaign, and created location-specific content. We also redesigned their website for mobile users.',
    results: 'The practice now dominates local search results and has a waiting list of new patients.',
    metrics: [
      { label: 'Local Rankings', value: '#1', description: 'For primary keywords' },
      { label: 'New Patients', value: '+275%', description: 'Monthly increase' },
      { label: 'Google Reviews', value: '4.9★', description: 'From 3.2 stars' },
      { label: 'Organic Traffic', value: '+520%', description: 'Website visitors' }
    ],
    services: ['SEO', 'Web Design', 'Social Media Management', 'Content Creation']
  },
  {
    id: '4',
    title: 'Social Media Viral Growth',
    client: 'FitLife Nutrition',
    industry: 'Health & Wellness',
    summary: 'Built a thriving social media community and drove product sales through engaging content and influencer partnerships.',
    challenge: 'A nutrition supplement brand struggled to stand out in a crowded market. Their social media presence was stagnant with low engagement.',
    approach: 'We developed a content strategy focused on educational value, user-generated content, and trending formats. We created viral reels, partnered with micro-influencers, and implemented a community engagement strategy.',
    results: 'The brand became a recognized authority in their niche with a highly engaged community driving consistent sales.',
    metrics: [
      { label: 'Follower Growth', value: '850%', description: 'Across all platforms' },
      { label: 'Engagement Rate', value: '12.4%', description: 'Average per post' },
      { label: 'Social Sales', value: '+410%', description: 'Revenue from social' },
      { label: 'Viral Reach', value: '8.5M', description: 'Total impressions' }
    ],
    services: ['Social Media Management', 'Content Creation', 'Reel Editing', 'Instagram Ads']
  }
];
