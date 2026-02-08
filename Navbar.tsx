import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { siteConfig } from '@/config/site';
import BrandLogo from './BrandLogo';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <BrandLogo variant="mark" size="sm" showText className="hidden sm:flex" />
          <BrandLogo variant="mark" size="sm" className="sm:hidden" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                currentPath === link.path
                  ? 'text-accent'
                  : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons - Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${siteConfig.contactPhoneTel}`}>
            <Button variant="ghost" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.contactPhone}
            </Button>
          </a>
          <a href={siteConfig.whatsAppUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </a>
          <Link to="/contact">
            <Button className="glow-accent">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 pt-6">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-lg font-medium transition-colors hover:text-accent ${
                      currentPath === link.path
                        ? 'text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <div className="mt-4 space-y-3">
                <SheetClose asChild>
                  <a href={`tel:${siteConfig.contactPhoneTel}`} className="block">
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      {siteConfig.contactPhone}
                    </Button>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href={siteConfig.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us
                    </Button>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/contact">
                    <Button className="w-full glow-accent">Get Started</Button>
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
