import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section, SectionHeader } from '@/components/site/Section';
import { pricingPackages } from '@/content/pricing';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function PricingPage() {
  usePageMeta({
    title: 'Pricing - TrueVision Digital Agency',
    description: 'Transparent pricing for premium digital marketing services. Choose a package that fits your needs or get a custom quote for enterprise solutions.'
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="border-b border-border/40 bg-card/50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-accent">Transparent</span> Pricing for Real Results
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Choose a package that fits your needs and budget. All plans include our commitment to delivering measurable ROI.
          </p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative flex flex-col ${
                pkg.highlighted
                  ? 'border-accent shadow-glow lg:scale-105'
                  : 'border-accent/20'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground">
                    <Sparkles className="mr-1 h-3 w-3" />
                    {pkg.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{pkg.tagline}</p>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-accent">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.priceDetail}</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 block">
                  <Button
                    className={`w-full ${pkg.highlighted ? 'glow-accent' : ''}`}
                    variant={pkg.highlighted ? 'default' : 'outline'}
                  >
                    {pkg.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Custom Quote CTA */}
      <Section className="bg-card/50">
        <Card className="border-accent/50 bg-gradient-to-br from-card to-accent/5">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Need a <span className="text-accent">Custom Solution</span>?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Every business is unique. Let's create a custom package tailored to your specific goals, budget, and timeline.
            </p>
            <Link to="/contact">
              <Button size="lg" className="glow-accent-strong">
                Request a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Section>

      {/* FAQ / Additional Info */}
      <Section>
        <SectionHeader
          title="Frequently Asked Questions"
          description="Everything you need to know about our pricing and services."
        />
        <div className="mx-auto max-w-3xl space-y-6">
          {[
            {
              q: 'Are there any setup fees?',
              a: 'No hidden fees. The price you see is what you pay. We believe in transparent, straightforward pricing.'
            },
            {
              q: 'Can I upgrade or downgrade my plan?',
              a: 'Absolutely. You can adjust your plan at any time to match your evolving needs and budget.'
            },
            {
              q: 'What if I need services from multiple packages?',
              a: 'We can create a custom package that combines services from different tiers to perfectly match your needs.'
            },
            {
              q: 'Do you require long-term contracts?',
              a: 'No. While we recommend at least 3-6 months to see optimal results, we work on a month-to-month basis with no long-term commitments.'
            }
          ].map((faq) => (
            <Card key={faq.q} className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
