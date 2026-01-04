
import { ServiceCard } from '@/components/juris-consult/service-card';
import { courtMarriageServices } from '@/lib/data/court-marriage-services';
import { HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Court Marriage Services in Jaipur',
    description: 'Expert legal assistance for court marriage in Jaipur. We handle inter-caste, inter-religion, and NRI marriages under the Special Marriage Act.',
};

export default function CourtMarriagePage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <HeartHandshake className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-serif mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Court Marriage Law Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive legal solutions tailored to protect your rights and interests across various domains.
          </p>
        </div>
        <div className="mt-12 w-full max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1743044114794-dd3244e5141f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8Y291cnQlMjBtYXJyaWFnZXxlbnwwfHx8fDE3NjQxODU3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Wedding rings symbolizing court marriage services"
              fill
              className="object-cover"
              data-ai-hint="wedding rings"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courtMarriageServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

    