
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Domestic Violence Lawyer in Jaipur | Legal Protection',
    description: 'Get immediate legal protection from domestic violence in Jaipur. Our expert lawyers help file complaints and obtain protection orders under the PWDVA.',
};

const faqs = [
    {
        question: "Q1. What is considered domestic violence?",
        answer: "👉 It includes physical, sexual, verbal, emotional, and economic abuse. It's not just physical harm."
    },
    {
        question: "Q2. Who can file a case under the Domestic Violence Act?",
        answer: "👉 Any woman who has been in a domestic relationship (wife, mother, sister, live-in partner) with the abuser can file a case."
    },
    {
        question: "Q3. What legal remedies are available to victims?",
        answer: "👉 Victims can get protection orders, residence orders (right to live in the shared household), monetary relief, and custody orders for children."
    },
    {
        question: "Q4. How quickly can I get a protection order?",
        answer: "👉 The law mandates that the court should hear the case within 3 days of filing, and interim protection orders can be granted quickly."
    },
    {
        question: "Q5. How does Jaipur Legal Solution help victims of domestic violence?",
        answer: "👉 We provide immediate legal assistance to file a complaint, obtain protection orders, and secure all necessary reliefs from the court, ensuring your safety and rights."
    }
];

export default function DomesticViolencePage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/family-law" className="hover:text-primary">Family Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Domestic Violence</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
            <h1 className="border-b border-primary/20 pb-4">Service Overview: Domestic Violence</h1>
            
            <h2>Your Safety Is Our Priority</h2>
            <p>
              Domestic violence is a grave issue that affects the safety and dignity of an individual. At Jaipur Legal Solution, we are committed to providing robust legal protection to victims of domestic abuse. We leverage the Protection of Women from Domestic Violence Act, 2005 (PWDVA) to ensure your immediate safety and long-term security.
            </p>
            
            <Button asChild size="lg">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call for Immediate Help: 7597497063
              </a>
            </Button>
            
            <h2 className="mt-12">What Constitutes Domestic Violence?</h2>
            <p>The PWDVA has a broad definition of domestic violence, which includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Physical Abuse:</strong> Any act that causes bodily pain, harm, or danger to life.</li>
              <li><strong>Sexual Abuse:</strong> Any conduct of a sexual nature that abuses, humiliates, or degrades.</li>
              <li><strong>Verbal and Emotional Abuse:</strong> Insults, humiliation, and threats that cause mental trauma.</li>
              <li><strong>Economic Abuse:</strong> Depriving you of financial resources you are entitled to.</li>
            </ul>

            <h2 className="mt-12">Legal Remedies We Help You Obtain</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li><strong>Protection Orders:</strong> To prevent the abuser from committing any act of domestic violence.</li>
              <li><strong>Residence Orders:</strong> To ensure you are not evicted from your shared household and can live peacefully.</li>
              <li><strong>Monetary Relief:</strong> To cover expenses and losses incurred due to the abuse, including medical expenses and loss of earnings.</li>
              <li><strong>Custody Orders:</strong> Temporary custody of any child or children.</li>
              <li><strong>Compensation Orders:</strong> For injuries, including mental torture and emotional distress.</li>
            </ol>

            <h2 className="mt-12">Why Entrust Your Case to Jaipur Legal Solution?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Immediate Action:</strong> We understand the urgency and act quickly to file your case and seek protection orders.</li>
              <li><strong>Confidential and Compassionate:</strong> We provide a safe and confidential environment for you to share your experience.</li>
              <li><strong>Expert Representation:</strong> Our lawyers are experts in the PWDVA and know how to build a strong case.</li>
              <li><strong>Holistic Support:</strong> We not only provide legal help but also guide you towards other support systems like counselors and shelters.</li>
            </ul>

            <h2 className="mt-12">Frequently Asked Questions (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
              ))}
            </Accordion>

            <h2 className="mt-12">You Are Not Alone. We Can Help.</h2>
            <p>
              If you are a victim of domestic violence, remember that the law is on your side. Take the first step towards a safe and secure life by contacting Jaipur Legal Solution for a confidential consultation.
            </p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7597497063
              </a>
            </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="font-serif flex items-center gap-2">
                  <ShieldCheck className="text-primary"/>
                  Key Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{benefit}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20 text-center p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Need Assistance?</h3>
              <div className="space-y-4">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="tel:7597497063">
                    <Phone className="mr-2" />
                    Call Us
                  </a>
                </Button>
                <p className="text-muted-foreground text-lg font-bold">7597497063</p>
              </div>
              <div className="my-6 flex items-center">
                  <div className="flex-grow border-t border-border"></div>
                  <span className="flex-shrink mx-4 text-muted-foreground">OR</span>
                  <div className="flex-grow border-t border-border"></div>
              </div>
              <div className="space-y-4">
                 <Button variant="secondary" size="lg" className="w-full" asChild>
                  <a href="mailto:Ajaykumarsharma32727@gmail.com">
                    <Mail className="mr-2" />
                    Email Us
                  </a>
                </Button>
                <p className="text-muted-foreground">Ajaykumarsharma32727@gmail.com</p>
              </div>
            </Card>
        </div>
      </section>
    </div>
  );
}

    