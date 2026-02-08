import { 
  Globe, 
  Search, 
  Target, 
  Instagram, 
  Megaphone, 
  Palette, 
  FileText, 
  Share2,
  Pencil,
  Video,
  PenTool,
  Image
} from 'lucide-react';

export interface Service {
  id: string;
  icon: any;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'web-design',
    icon: Globe,
    title: 'Website Design & Development',
    shortDescription: 'Custom, high-converting websites built for performance',
    description: 'We create stunning, responsive websites that not only look amazing but are optimized for conversions and user experience. Every site is built with SEO best practices and lightning-fast performance.',
    benefits: [
      'Mobile-first responsive design',
      'SEO-optimized architecture',
      'Fast loading speeds (Core Web Vitals)',
      'Conversion-focused layouts'
    ]
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO (Search Engine Optimization)',
    shortDescription: 'Rank higher and drive organic traffic',
    description: 'Our data-driven SEO strategies help you dominate search results. We focus on technical SEO, content optimization, and link building to increase your organic visibility and drive qualified traffic.',
    benefits: [
      'Keyword research & strategy',
      'On-page and technical SEO',
      'Quality backlink building',
      'Monthly performance reports'
    ]
  },
  {
    id: 'google-ads',
    icon: Target,
    title: 'Google Ads Management',
    shortDescription: 'Maximize ROI with targeted paid search',
    description: 'Get instant visibility and qualified leads with expertly managed Google Ads campaigns. We optimize every dollar spent to deliver maximum return on ad spend.',
    benefits: [
      'Strategic campaign setup',
      'Advanced audience targeting',
      'A/B testing & optimization',
      'Transparent ROI tracking'
    ]
  },
  {
    id: 'social-ads',
    icon: Instagram,
    title: 'Instagram & Facebook Ads',
    shortDescription: 'Reach your audience where they spend time',
    description: 'Drive engagement and conversions with highly targeted social media advertising. We create scroll-stopping ads that resonate with your ideal customers.',
    benefits: [
      'Precise audience targeting',
      'Creative ad design & copy',
      'Retargeting campaigns',
      'Performance analytics'
    ]
  },
  {
    id: 'lead-generation',
    icon: Megaphone,
    title: 'Lead Generation Campaigns',
    shortDescription: 'Fill your pipeline with qualified leads',
    description: 'We design and execute multi-channel lead generation campaigns that attract, nurture, and convert your ideal customers into paying clients.',
    benefits: [
      'Multi-channel strategy',
      'Lead magnet creation',
      'Automated nurture sequences',
      'CRM integration'
    ]
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Creative Design',
    shortDescription: 'Build a memorable brand identity',
    description: 'Stand out from the competition with a cohesive brand identity that tells your story and connects with your audience on an emotional level.',
    benefits: [
      'Brand strategy & positioning',
      'Visual identity design',
      'Brand guidelines',
      'Marketing collateral'
    ]
  },
  {
    id: 'content-creation',
    icon: FileText,
    title: 'Content Creation',
    shortDescription: 'Engaging content that converts',
    description: 'From social media posts to video content, we create compelling content that engages your audience and drives action across all platforms.',
    benefits: [
      'Social media posts & graphics',
      'Reels & Stories production',
      'Content calendar planning',
      'Platform-specific optimization'
    ]
  },
  {
    id: 'social-management',
    icon: Share2,
    title: 'Social Media Management',
    shortDescription: 'Grow and engage your community',
    description: 'We handle your social media presence end-to-end, from strategy and content creation to community management and analytics.',
    benefits: [
      'Daily posting & scheduling',
      'Community engagement',
      'Growth strategies',
      'Monthly analytics reports'
    ]
  },
  {
    id: 'logo-design',
    icon: Pencil,
    title: 'Logo Design',
    shortDescription: 'Memorable logos that define your brand',
    description: 'Get a professional, unique logo that captures your brand essence and makes a lasting impression on your audience.',
    benefits: [
      'Multiple concept options',
      'Unlimited revisions',
      'Vector files & brand kit',
      'Social media assets'
    ]
  },
  {
    id: 'reel-editing',
    icon: Video,
    title: 'Custom Reel Editing',
    shortDescription: 'Professional video editing for social',
    description: 'Transform raw footage into engaging, professional reels that capture attention and drive engagement on Instagram and TikTok.',
    benefits: [
      'Professional editing & effects',
      'Trending audio integration',
      'Captions & graphics',
      'Fast turnaround'
    ]
  },
  {
    id: 'ad-copywriting',
    icon: PenTool,
    title: 'Ad Copywriting',
    shortDescription: 'Words that sell and convert',
    description: 'Persuasive, conversion-focused copy that speaks directly to your audience and compels them to take action.',
    benefits: [
      'Conversion-focused messaging',
      'A/B testing variations',
      'Platform-specific copy',
      'Brand voice consistency'
    ]
  },
  {
    id: 'thumbnail-design',
    icon: Image,
    title: 'YouTube Thumbnail Design',
    shortDescription: 'Click-worthy thumbnails that get views',
    description: 'Eye-catching YouTube thumbnails designed to maximize click-through rates and grow your channel.',
    benefits: [
      'High-impact visual design',
      'Text overlay optimization',
      'Brand consistency',
      'Fast delivery'
    ]
  }
];
