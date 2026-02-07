import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';
import BrandLogo from './BrandLogo';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Pricing', path: '/pricing' }
  ],
  support: [
    { label: 'Contact Us', path: '/contact' },
    { label: 'Get Started', path: '/contact' }
  ]
};

const socialLinks = [
  { icon: SiFacebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { icon: SiInstagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: SiLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: SiX, href: siteConfig.social.twitter, label: 'Twitter' }
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <BrandLogo variant="mark" size="md" showText />
            <p className="text-sm text-muted-foreground">
              Transform your brand with data-driven digital marketing strategies that deliver real results.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-accent">
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contactPhoneTel}`} className="hover:text-accent">
                  {siteConfig.contactPhone}
                </a>
              </li>
              <li>
                <a 
                  href={siteConfig.whatsAppUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-accent" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
