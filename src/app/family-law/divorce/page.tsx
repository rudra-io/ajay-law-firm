
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Divorce Lawyer in Jaipur | Mutual & Contested Divorce',
    description: 'Expert divorce lawyers in Jaipur for mutual and contested divorce cases. We handle alimony, child custody, and property division with care.',
};

const faqs = [
    {
        question: "Q1. What is the difference between mutual and contested divorce?",
        answer: "👉 Mutual consent divorce is when both spouses agree to separate. A contested divorce is when one spouse files for divorce without the other's consent."
    },
    {
        question: "Q2. How long does a divorce take in India?",
        answer: "👉 A mutual consent divorce typically takes 6-18 months. A contested divorce can take several years, depending on the complexity."
    },
    {
        question: "Q3. What are the grounds for a contested divorce?",
        answer: "👉 Grounds include cruelty, adultery, desertion, conversion to another religion, mental disorder, and other reasons specified in the law."
    },
    {
        question: "Q4. Is alimony mandatory in every divorce?",
        answer: "👉 No, alimony is not automatic. It depends on the financial status of both spouses, duration of marriage, and other factors decided by the court."
    },
    {
        question: "Q5. How can Jaipur Legal Solution help in my divorce case?",
        answer: "👉 Our team provides expert guidance on legal grounds, documentation, representation in court, and mediation to ensure a smooth process."
    }
];

export default function DivorcePage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/family-law" className="hover:text-primary">Family Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Divorce Cases</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
            <h1 className="border-b border-primary/20 pb-4">Service Overview: Divorce Cases</h1>
            
            <h2>Navigating Divorce with Dignity and Expertise</h2>
            <p>
              Divorce is a challenging and emotionally draining process. At Jaipur Legal Solution, we provide compassionate and expert legal guidance to help you navigate this difficult time. Our goal is to protect your rights and ensure a fair resolution, whether through mutual consent or contested proceedings.
            </p>
            
            <Button asChild size="lg">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
              </a>
            </Button>
            
            <h2 className="mt-12">Types of Divorce Proceedings We Handle</h2>
            <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <strong>Mutual Consent Divorce:</strong>
                  <p>When both spouses agree to part ways amicably, we facilitate a smooth and quick process. We assist in drafting the petition and negotiating terms related to alimony, child custody, and property division.</p>
                </li>
                <li>
                  <strong>Contested Divorce:</strong>
                  <p>If one partner is unwilling to grant a divorce, or if there are disputes over assets or custody, we provide strong representation in court. We handle cases based on grounds like cruelty, adultery, desertion, and more.</p>
                </li>
            </ol>

            <h2 className="mt-12">Our Comprehensive Divorce Services</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Drafting and filing of divorce petitions.</li>
              <li>Representation in Family Courts, High Court, and Supreme Court.</li>
              <li>Negotiation and settlement of alimony and maintenance.</li>
              <li>Handling child custody and visitation rights.</li>
              <li>Advising on property and asset division.</li>
              <li>Mediation and counseling to explore reconciliation where possible.</li>
            </ul>
            
            <h2 className="mt-12">Why Choose Jaipur Legal Solution for Your Divorce Case?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Experienced Family Lawyers:</strong> Our team has extensive experience in handling complex divorce cases.</li>
              <li><strong>Confidential and Sensitive Approach:</strong> We understand the emotional nature of divorce and ensure complete confidentiality.</li>
              <li><strong>Client-Centric Strategy:</strong> We listen to your needs and tailor our legal strategy to achieve the best possible outcome for you.</li>
              <li><strong>Transparent Communication:</strong> We keep you informed at every stage of the legal process.</li>
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

            <h2 className="mt-12">Contact Us for a Confidential Consultation</h2>
            <p>
              If you are considering a divorce or need legal advice on a family matter, contact Jaipur Legal Solution. We are here to provide the support and guidance you need to move forward.
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

    