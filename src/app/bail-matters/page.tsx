
import { ServiceCard } from '@/components/juris-consult/service-card';
import { bailMatterServices } from '@/lib/data/bail-matter-services';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bail Matters Services in Jaipur',
    description: 'Comprehensive legal solutions for bail matters in Jaipur, including anticipatory and regular bail. Our expert lawyers protect your rights.',
};

export default function BailMattersPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-serif mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Bail Matters Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive legal solutions tailored to protect your rights and interests across various domains.
          </p>
        </div>
        <div className="mt-12 w-full max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsYXd5ZXJ8ZW58MHx8fHwxNzY0MTg1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Gavel and law books representing bail matters services in Jaipur"
              fill
              className="object-cover"
              data-ai-hint="gavel courtroom"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {bailMatterServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

    