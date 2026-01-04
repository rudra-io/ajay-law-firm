
import { WhatsAppCard } from '@/components/juris-consult/whatsapp-card';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-[#2E3142]">
            <div className="mx-[10%]">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="font-semibold text-primary-foreground/80">Get in Touch</p>
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                        Contact Us
                    </h2>
                    <p className="mt-4 text-lg text-primary-foreground/70">
                        We're here to help. Reach out to us through your preferred method.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <WhatsAppCard />

                    <Card className="shadow-xl bg-background/10">
                        <CardContent className="p-8 text-center flex flex-col justify-between h-full items-center">
                            <div>
                                <h3 className="font-headline text-2xl font-bold text-primary-foreground">Call Us</h3>
                                <p className="mt-2 text-primary-foreground/80">
                                Speak directly with our legal team for immediate assistance.
                                </p>
                                <div className="my-6 flex justify-center">
                                    <div className="p-2 rounded-lg flex items-center justify-center h-[216px]">
                                        <Phone className="h-24 w-24 text-primary" />
                                    </div>
                                </div>
                            </div>
                            <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                <a href="tel:7597497063">
                                    <Phone />
                                    <span>Call 7597497063</span>
                                </a>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="shadow-xl bg-background/10">
                        <CardContent className="p-8 text-center flex flex-col items-center justify-between h-full">
                           <div>
                            <h3 className="font-headline text-2xl font-bold text-primary-foreground">Email Us</h3>
                                <p className="mt-2 text-primary-foreground/80">
                                Send us your queries and we will get back to you shortly.
                                </p>
                                <div className="my-6 flex justify-center">
                                     <div className="p-2 rounded-lg flex items-center justify-center h-[216px]">
                                        <Mail className="h-24 w-24 text-destructive" />
                                    </div>
                                </div>
                           </div>
                            <Button asChild size="lg" className="w-full" variant="destructive">
                                <a href="mailto:Ajaykumarsharma32727@gmail.com">
                                    <Mail />
                                    <span>Email Us</span>
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
      </section>
    );
}
