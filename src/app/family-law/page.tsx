
import { ServiceCard } from '@/components/juris-consult/service-card';
import { familyLawServices } from '@/lib/data/family-law-services';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Family Law Services in Jaipur',
    description: 'Compassionate and expert family law attorneys in Jaipur for divorce, child custody, maintenance, and domestic violence cases.',
};

export default function FamilyLawPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Heart className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-serif mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Family Law Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive legal solutions for sensitive family matters, ensuring your rights and interests are protected with compassion and expertise.
          </p>
        </div>
        <div className="mt-12 w-full max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmYW1pbHklMjBsYXd8ZW58MHx8fHwxNzY0MTg2MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hands of a family together, representing family law services"
              fill
              className="object-cover"
              data-ai-hint="family hands"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {familyLawServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

    