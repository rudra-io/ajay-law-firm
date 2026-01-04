

import { ServiceCard } from '@/components/juris-consult/service-card';
import { consumerLawServices } from '@/lib/data/consumer-law-services';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Consumer Law Services in Jaipur',
    description: 'Protect your consumer rights in Jaipur. We handle consumer complaints, product liability, and labour law disputes. Contact us for expert legal help.',
};

export default function ConsumerLawPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <ShoppingCart className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-serif mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Consumer Law Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive legal solutions tailored to protect your rights and interests across various domains.
          </p>
        </div>
        <div className="mt-12 w-full max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1589307904488-7d60ff29c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjb25zdW1lciUyMGNvdXJ0fGVufDB8fHx8MTc2NDE4NTYzNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Shopping cart representing consumer law services"
              fill
              className="object-cover"
              data-ai-hint="shopping retail"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {consumerLawServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

    