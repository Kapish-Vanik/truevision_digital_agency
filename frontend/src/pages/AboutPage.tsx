import { Link } from '@tanstack/react-router';
import { ArrowRight, Target, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/site/Section';
import { aboutContent } from '@/content/about';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta({
    title: 'About Us - TrueVision Digital Agency',
    description: 'Learn about TrueVision Digital Agency\'s mission, vision, and values. We\'re a team of digital marketing experts dedicated to driving real results for ambitious brands.'
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="border-b border-border/40 bg-card/50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            We're <span className="text-accent">TrueVision</span> Digital Agency
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            A team of passionate digital marketing experts on a mission to help ambitious brands achieve exponential growth through strategic, data-driven marketing.
          </p>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-accent/20">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">{aboutContent.vision.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{aboutContent.vision.description}</p>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Lightbulb className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">{aboutContent.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{aboutContent.mission.description}</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-card/50">
        <SectionHeader
          subtitle="Our Values"
          title="What Drives Us"
          description="These core values guide every decision we make and every strategy we create."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutContent.values.map((value) => (
            <Card key={value.title} className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <SectionHeader
          subtitle="Why Choose TrueVision"
          title="What Makes Us Different"
          description="We're not just another marketing agency. Here's what sets us apart."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {aboutContent.differentiators.map((diff, index) => (
            <Card key={diff.title} className="group transition-all hover:border-accent/50 hover:shadow-glow">
              <CardHeader>
                <div className="mb-2 text-3xl font-bold text-accent/30">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <CardTitle className="text-xl">{diff.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{diff.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Approach */}
      <Section className="bg-card/50">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              A Team Built for <span className="text-accent">Your Success</span>
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Our diverse team brings together experts in strategy, creative, analytics, and execution. We work as an extension of your team, fully invested in your growth.
            </p>
            <p className="text-muted-foreground">
              With over 8 years of combined experience and a proven track record of delivering 3-10x growth for our clients, we have the expertise and dedication to help you achieve your most ambitious goals.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: Users, label: 'Expert Team', value: '25+ Specialists' },
              { icon: TrendingUp, label: 'Client Growth', value: '480% Avg ROI' },
              { icon: Target, label: 'Success Rate', value: '98% Satisfaction' },
              { icon: Lightbulb, label: 'Innovation', value: 'Cutting-Edge' }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="border-accent/20 text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-bold text-accent">{item.value}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Card className="border-accent/50 bg-gradient-to-br from-card to-accent/5">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your growth goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="glow-accent-strong">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
