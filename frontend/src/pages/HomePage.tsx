import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, Star, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/site/Section';
import { services } from '@/content/services';
import { testimonials } from '@/content/testimonials';
import { siteConfig } from '@/config/site';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function HomePage() {
  usePageMeta({
    title: 'TrueVision Digital Agency - Premium Digital Marketing Services',
    description: 'Transform your brand with data-driven digital marketing. Expert SEO, Google Ads, Social Media Management, and Web Development services that deliver real results.'
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/assets/generated/truevision-hero-bg.dim_2400x1350.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-gradient">TrueVision Digital Agency</span>
              <br />
              Transform Your Brand with Data-Driven Digital Marketing
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              We help ambitious brands achieve exponential growth through strategic digital marketing that delivers measurable results. No fluff, just real ROI.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="glow-accent-strong">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`tel:${siteConfig.contactPhoneTel}`}>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  {siteConfig.contactPhone}
                </Button>
              </a>
              <a href={siteConfig.whatsAppUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <Section className="bg-card/50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
            We Don't Just Market. We <span className="text-accent">Grow Businesses</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Every strategy we create is built on data, optimized for conversions, and designed to scale. We partner with brands that are serious about growth and ready to dominate their market.
          </p>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <SectionHeader
          subtitle="Our Services"
          title="Everything You Need to Succeed Online"
          description="From strategy to execution, we provide comprehensive digital marketing services that work together to drive growth."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="group transition-all hover:border-accent/50 hover:shadow-glow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button size="lg" variant="outline">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-card/50">
        <SectionHeader
          subtitle="Our Process"
          title="How We Drive Results"
          description="A proven methodology that delivers consistent, measurable growth."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Strategy & Analysis',
              description: 'We start by understanding your business, analyzing your market, and identifying opportunities for growth.'
            },
            {
              step: '02',
              title: 'Execute & Optimize',
              description: 'We implement data-driven campaigns across multiple channels, continuously testing and optimizing for maximum ROI.'
            },
            {
              step: '03',
              title: 'Scale & Dominate',
              description: 'Once we find what works, we scale aggressively while maintaining efficiency and profitability.'
            }
          ].map((item) => (
            <Card key={item.step} className="border-accent/20">
              <CardHeader>
                <div className="mb-4 text-5xl font-bold text-accent/30">{item.step}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              Why Choose <span className="text-accent">TrueVision</span>?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We're not just another marketing agency. We're growth partners who are invested in your success.
            </p>
            <div className="space-y-4">
              {[
                'Proven track record of 3-10x growth',
                'Transparent reporting and communication',
                'Dedicated account management',
                'Data-driven strategies that scale',
                'Full-service digital marketing expertise',
                'No long-term contracts required'
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { label: 'Clients Served', value: '150+' },
              { label: 'Average ROI', value: '480%' },
              { label: 'Years Experience', value: '8+' },
              { label: 'Team Members', value: '25+' }
            ].map((stat) => (
              <Card key={stat.label} className="border-accent/20 text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-accent">{stat.value}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-card/50">
        <SectionHeader
          subtitle="Client Success Stories"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our clients have to say about working with us."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-accent/20">
              <CardHeader>
                <div className="mb-2 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <Card className="border-accent/50 bg-gradient-to-br from-card to-accent/5">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let's discuss how we can help you achieve your growth goals. Get a free strategy consultation today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="glow-accent-strong">
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href={`tel:${siteConfig.contactPhoneTel}`}>
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {siteConfig.contactPhone}
                </Button>
              </a>
              <a href={siteConfig.whatsAppUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
}
