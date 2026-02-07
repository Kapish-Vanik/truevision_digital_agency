import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Section, SectionHeader } from '@/components/site/Section';
import { caseStudies } from '@/content/caseStudies';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function PortfolioPage() {
  usePageMeta({
    title: 'Portfolio & Case Studies - TrueVision Digital Agency',
    description: 'Explore our portfolio of successful digital marketing campaigns. Real results, real growth, real ROI for our clients across various industries.'
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="border-b border-border/40 bg-card/50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-accent">Proven Results</span> That Speak for Themselves
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Explore real case studies from real clients. These are the results we deliver when strategy meets execution.
          </p>
        </div>
      </Section>

      {/* Case Studies */}
      <Section>
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="border-accent/20 overflow-hidden">
              <CardHeader className="bg-card/50">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <Badge className="mb-2">{study.industry}</Badge>
                    <CardTitle className="text-2xl md:text-3xl">{study.title}</CardTitle>
                    <p className="mt-2 text-muted-foreground">{study.client}</p>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <TrendingUp className="h-5 w-5" />
                    <span className="font-semibold">Success Story</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-6 text-lg">{study.summary}</p>

                {/* Metrics Grid */}
                <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {study.metrics.map((metric) => (
                    <Card key={metric.label} className="border-accent/20 bg-accent/5 text-center">
                      <CardHeader className="pb-2">
                        <div className="text-3xl font-bold text-accent">{metric.value}</div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-semibold">{metric.label}</p>
                        <p className="text-xs text-muted-foreground">{metric.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Expandable Details */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="details" className="border-accent/20">
                    <AccordionTrigger className="text-accent hover:text-accent/80">
                      View Full Case Study
                    </AccordionTrigger>
                    <AccordionContent className="space-y-6 pt-4">
                      <div>
                        <h3 className="mb-2 font-semibold">The Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold">Our Approach</h3>
                        <p className="text-muted-foreground">{study.approach}</p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold">The Results</h3>
                        <p className="text-muted-foreground">{study.results}</p>
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold">Services Provided</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service) => (
                            <Badge key={service} variant="outline">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card/50">
        <Card className="border-accent/50 bg-gradient-to-br from-card to-accent/5">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's create a custom strategy that delivers results like these for your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="glow-accent-strong">
                Get Your Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
