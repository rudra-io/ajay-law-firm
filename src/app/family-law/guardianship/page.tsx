
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guardianship Lawyer in Jaipur | Legal Guardian Petitions',
    description: 'Appoint a legal guardian for a minor or incapacitated adult in Jaipur. Our lawyers assist with guardianship petitions and court representation.',
};

const faqs = [
    {
        question: "Q1. What is the difference between guardianship and custody?",
        answer: "👉 Custody is usually decided between parents during a divorce. Guardianship is broader and can be appointed for a minor when parents are deceased or unfit, or for an adult who cannot make their own decisions."
    },
    {
        question: "Q2. Who can be appointed as a guardian?",
        answer: "👉 A person who is a major, of sound mind, and has no conflict of interest with the ward can be appointed as a guardian by the court."
    },
    {
        question: "Q3. What are the duties of a legal guardian?",
        answer: "👉 A guardian is responsible for the ward's personal care, health, education, and management of their property and finances."
    },
    {
        question: "Q4. How do I file for guardianship?",
        answer: "👉 A petition must be filed in the competent court with details about the ward and the reasons why guardianship is necessary. The court will then assess the suitability of the proposed guardian."
    },
    {
        question: "Q5. How can Jaipur Legal Solution help in a guardianship case?",
        answer: "👉 Our team assists in drafting and filing the guardianship petition, representing you in court, and ensuring all legal formalities are completed efficiently."
    }
];

export default function GuardianshipPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/family-law" className="hover:text-primary">Family Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Guardianship</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
            <h1 className="border-b border-primary/20 pb-4">Service Overview: Guardianship</h1>
            
            <h2>Protecting the Vulnerable Through Legal Guardianship</h2>
            <p>
              Guardianship is a legal process where a court appoints a person to care for an individual who is unable to manage their own affairs, such as a minor or an incapacitated adult. At Jaipur Legal Solution, we provide expert legal services to help you establish guardianship and protect the interests of your loved ones.
            </p>
            
            <Button asChild size="lg">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
              </a>
            </Button>
            
            <h2 className="mt-12">When is Guardianship Necessary?</h2>
            <p>Guardianship may be required in various situations:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>When parents of a minor child have passed away or are unable to care for them.</li>
              <li>For an adult who has become incapacitated due to illness, accident, or old age.</li>
              <li>To manage the property and finances of a person who cannot do so themselves.</li>
            </ul>

            <h2 className="mt-12">Our Guardianship Services</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li><strong>Petition for Guardianship:</strong> We draft and file petitions in the appropriate court to have a guardian appointed.</li>
              <li><strong>Representation in Court:</strong> We represent our clients in court hearings, presenting the case for why guardianship is necessary and why our client is a suitable guardian.</li>
              <li><strong>Guardianship of Person and Property:</strong> We handle cases for both guardianship of the person (making personal and medical decisions) and guardianship of the property (managing finances and assets).</li>
              <li><strong>Legal Advice:</strong> We provide comprehensive legal advice on the rights and responsibilities of a guardian.</li>
            </ol>

            <h2 className="mt-12">Why Choose Jaipur Legal Solution?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Expertise in Guardianship Laws:</strong> Our lawyers are well-versed in the Guardians and Wards Act, 1890, and other relevant laws.</li>
              <li><strong>Sensitive Handling of Cases:</strong> We approach each case with the compassion and sensitivity it deserves.</li>
              <li><strong>Efficient Legal Process:</strong> We work diligently to ensure the legal process is as smooth and quick as possible.</li>
              <li><strong>Client-Focused:</strong> We are committed to achieving the best outcome for you and the person who needs care.</li>
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

            <h2 className="mt-12">Get Expert Legal Help for Guardianship</h2>
            <p>
              If you need to establish legal guardianship for a loved one, contact Jaipur Legal Solution. Our experienced family law attorneys will guide you through the process with professionalism and care.
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

    