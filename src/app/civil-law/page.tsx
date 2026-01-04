

import { ServiceCard } from '@/components/juris-consult/service-card';
import { civilLawServices } from '@/lib/data/civil-law-services';
import { Scale } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Civil Law Experts | Resolve Civil Disputes Effectively",
    description: "Get expert legal assistance for civil litigation, contract disputes, consumer complaints, inheritance issues & more.",
    alternates: { canonical: "https://www.LegalSolutionsJaipur.com/civil-law" }
};

export default function CivilLawPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Scale className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-serif mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Civil Law Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive legal solutions tailored to protect your rights and interests across various domains.
          </p>
        </div>
        <div className="mt-12 w-full max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsYXd8ZW58MHx8fHwxNzY0MTg1NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Law books and library representing civil law services"
              fill
              className="object-cover"
              data-ai-hint="law books library"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {civilLawServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
