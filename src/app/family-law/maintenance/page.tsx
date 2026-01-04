
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Maintenance Lawyer in Jaipur | Alimony & Child Support',
    description: 'Secure your financial future with expert maintenance lawyers in Jaipur. We handle cases for alimony and child support under Section 125 CrPC and other family laws.',
};

const faqs = [
    {
        question: "Q1. Who can claim maintenance?",
        answer: "👉 A wife, children, and dependent parents can claim maintenance. Under certain conditions, a husband can also claim it."
    },
    {
        question: "Q2. How is the amount of maintenance decided?",
        answer: "👉 The court considers the income, assets, and liabilities of both spouses, as well as the needs of the claimant and their standard of living."
    },
    {
        question: "Q3. What is interim maintenance?",
        answer: "👉 Interim maintenance is a temporary amount paid during the legal proceedings to support the claimant until the final order is passed."
    },
    {
        question: "Q4. Can a working wife claim maintenance?",
        answer: "👉 Yes, a working wife can claim maintenance if her income is not sufficient to maintain the same standard of living she had during the marriage."
    },
    {
        question: "Q5. How does Jaipur Legal Solution assist in maintenance cases?",
        answer: "👉 We help in filing maintenance petitions, gathering financial evidence, and representing you in court to secure a fair and just maintenance amount."
    }
];

export default function MaintenancePage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/family-law" className="hover:text-primary">Family Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Maintenance Cases</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
            <h1 className="border-b border-primary/20 pb-4">Service Overview: Maintenance Cases</h1>
            
            <h2>Securing Your Financial Stability</h2>
            <p>
              In family law, maintenance (or alimony) is a crucial provision that ensures financial support for a spouse and dependent children after a separation or divorce. At Jaipur Legal Solution, we are dedicated to helping our clients secure their financial future by expertly handling maintenance cases under various Indian laws.
            </p>
            
            <Button asChild size="lg">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
              </a>
            </Button>
            
            <h2 className="mt-12">Legal Provisions for Maintenance in India</h2>
            <p>We provide legal assistance under various statutes, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Section 125 of CrPC:</strong> A secular law that provides a swift remedy for maintenance to wives, children, and parents.</li>
              <li><strong>Hindu Marriage Act, 1955:</strong> Allows for the provision of maintenance pendente lite (during the case) and permanent alimony.</li>
              <li><strong>Hindu Adoption and Maintenance Act, 1956:</strong> Governs the maintenance of a Hindu wife, widowed daughter-in-law, children, and aged parents.</li>
              <li><strong>Domestic Violence Act, 2005:</strong> Provides for monetary relief to aggrieved persons facing domestic violence.</li>
            </ul>

            <h2 className="mt-12">Our Services in Maintenance Cases</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li><strong>Filing Maintenance Petitions:</strong> We expertly draft and file petitions to claim maintenance in the appropriate court.</li>
              <li><strong>Defending Against Unjust Claims:</strong> We also represent clients who are facing unreasonable or false maintenance claims, ensuring a fair assessment by the court.</li>
              <li><strong>Securing Interim Maintenance:</strong> We prioritize getting our clients immediate financial relief through interim maintenance orders during the pendency of the case.</li>
              <li><strong>Enforcement of Maintenance Orders:</strong> If the other party fails to comply with the court's order, we take swift legal action to enforce it.</li>
            </ol>

            <h2 className="mt-12">Why Jaipur Legal Solution is Your Best Choice</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Expert Knowledge:</strong> Our lawyers have in-depth knowledge of all legal provisions related to maintenance.</li>
              <li><strong>Strategic Approach:</strong> We use a strategic approach to gather financial evidence and present a strong case in court.</li>
              <li><strong>Negotiation Skills:</strong> We are skilled in negotiating fair settlement amounts, saving you time and stress.</li>
              <li><strong>Dedicated Support:</strong> We provide continuous support and keep you updated throughout the legal process.</li>
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

            <h2 className="mt-12">Claim Your Right to Financial Support</h2>
            <p>
              Whether you need to claim maintenance or defend against a claim, having the right legal partner is crucial. Contact Jaipur Legal Solution for an expert consultation on your maintenance case.
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

    