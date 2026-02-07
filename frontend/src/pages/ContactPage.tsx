import { useState } from 'react';
import { MessageCircle, Mail, Phone, CheckCircle2, AlertCircle, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Section, SectionHeader } from '@/components/site/Section';
import { siteConfig } from '@/config/site';
import { useSubmitInquiry } from '@/hooks/useQueries';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us - TrueVision Digital Agency',
    description: 'Get in touch with TrueVision Digital Agency. Schedule a free consultation to discuss your digital marketing needs and growth goals.'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const submitInquiry = useSubmitInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitInquiry.mutateAsync({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phone: formData.phone || undefined
      });
      
      // Reset form on success
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      // Error is handled by the mutation
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <Section className="border-b border-border/40 bg-card/50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Let's <span className="text-accent">Grow Together</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Ready to transform your digital presence? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {submitInquiry.isSuccess ? (
                  <div className="rounded-lg border border-accent/50 bg-accent/10 p-6 text-center">
                    <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-accent" />
                    <h3 className="mb-2 text-xl font-semibold">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitInquiry.isError && (
                      <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                          <div>
                            <p className="font-semibold text-destructive">Error</p>
                            <p className="text-sm text-destructive/80">
                              {submitInquiry.error?.message || 'Failed to submit inquiry. Please try again.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          disabled={submitInquiry.isPending}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          disabled={submitInquiry.isPending}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 8155904781"
                        disabled={submitInquiry.isPending}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project and goals..."
                        rows={6}
                        disabled={submitInquiry.isPending}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full glow-accent"
                      disabled={submitInquiry.isPending}
                    >
                      {submitInquiry.isPending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href={`tel:${siteConfig.contactPhoneTel}`}
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      {siteConfig.contactPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href={siteConfig.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      {siteConfig.contactPhone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Headphones className="mt-1 h-5 w-5 text-accent" />
                  <div>
                    <p className="font-semibold">Customer Support</p>
                    <a
                      href={`tel:${siteConfig.customerSupportTel}`}
                      className="text-sm text-muted-foreground hover:text-accent"
                    >
                      {siteConfig.customerSupport}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/50 bg-gradient-to-br from-card to-accent/5">
              <CardContent className="p-6">
                <h3 className="mb-3 font-semibold">Quick Response Guarantee</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <a href={siteConfig.whatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full glow-accent">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
