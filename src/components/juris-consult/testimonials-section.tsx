
'use client';

import { Testimonials } from '@/components/juris-consult/testimonials';
import { testimonials } from '@/lib/data';

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-transparent">
            <div className="mx-[10%]">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="font-semibold text-primary">Client Stories</p>
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Trust and results are the cornerstones of our practice. Hear directly from those we've had the privilege to represent.
                    </p>
                </div>
                <Testimonials testimonials={testimonials} />
            </div>
      </section>
    );
}
