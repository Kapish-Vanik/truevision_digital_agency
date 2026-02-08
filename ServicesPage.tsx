import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/site/Section';
import { services } from '@/content/services';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ServicesPage() {
  usePageMeta({
    title: 'Our Services - TrueVision Digital Agency',
    description: 'Comprehensive digital marketing services including SEO, Google Ads, Social Media Management, Web Development, Content Creation, and more. Tailored strategies that drive results.'
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="border-b border-border/40 bg-card/50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-accent">Comprehensive</span> Digital Marketing Services
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            From strategy to execution, we provide everything you need to dominate your market and achieve sustainable growth.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={service.id}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="mb-3 font-display text-2xl font-bold md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-4 font-semibold">Key Benefits:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact">
                    <Button className="glow-accent">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <Card className={`border-accent/20 ${!isEven ? 'lg:order-1' : ''}`}>
                  <CardContent className="flex h-full items-center justify-center p-12">
                    <Icon className="h-32 w-32 text-accent/20" />
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card/50">
        <Card className="border-accent/50 bg-gradient-to-br from-card to-accent/5">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's talk about your goals and create a custom strategy that's perfect for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="glow-accent-strong">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
