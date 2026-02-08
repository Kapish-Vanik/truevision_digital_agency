import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 space-y-4', centered && 'text-center')}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {subtitle}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
