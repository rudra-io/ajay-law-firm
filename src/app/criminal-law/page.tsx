
import { ServiceCard } from '@/components/juris-consult/service-card';
import { criminalLawServices } from '@/lib/data/criminal-law-services';
import { Shield } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Criminal Law Services in Jaipur',
    description: 'Top criminal lawyers in Jaipur providing defense for assault, theft, FIR registration, and other criminal cases. Get expert legal representation.',
};

export default function CriminalLawPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-serif mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Criminal Law Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive legal solutions tailored to protect your rights and interests across various domains.
          </p>
        </div>
        <div className="mt-12 w-full max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1521437100987-e1cb2178879b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnJlc3R8ZW58MHx8fHwxNzY0MTg1ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Handcuffs representing criminal law and arrest cases"
              fill
              className="object-cover"
              data-ai-hint="handcuffs law"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {criminalLawServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

    