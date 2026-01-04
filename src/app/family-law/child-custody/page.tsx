
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Child Custody Lawyer in Jaipur | Expert Legal Advice',
    description: 'Compassionate and expert child custody lawyers in Jaipur. We prioritize your child\'s best interests in custody, visitation, and guardianship cases.',
};

const faqs = [
    {
        question: "Q1. Who gets child custody after divorce?",
        answer: "👉 The court decides based on the child's best interests. Factors include parents' financial stability, lifestyle, and the child's preference if they are old enough."
    },
    {
        question: "Q2. What are the different types of child custody?",
        answer: "👉 Main types are physical custody (where the child lives), legal custody (who makes decisions), sole custody (one parent), and joint custody (both parents)."
    },
    {
        question: "Q3. Can a father get custody in India?",
        answer: "👉 Yes, fathers have an equal right to seek custody. The court's primary concern is the child's welfare, not the parent's gender."
    },
    {
        question: "Q4. Does the child's opinion matter in custody battles?",
        answer: "👉 Yes, if the child is mature enough to form an intelligent preference (usually above 9 years old), the court considers their opinion."
    },
    {
        question: "Q5. How does Jaipur Legal Solution help in custody cases?",
        answer: "👉 We provide strategic advice, handle all legal documentation, and represent you in court to ensure your child's best interests are prioritized and protected."
    }
];

export default function ChildCustodyPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/family-law" className="hover:text-primary">Family Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Child Custody</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
            <h1 className="border-b border-primary/20 pb-4">Service Overview: Child Custody</h1>
            
            <h2>Prioritizing Your Child's Future</h2>
            <p>
              Child custody is one of the most sensitive issues in family law. At Jaipur Legal Solution, our primary focus is to ensure the well-being and best interests of the child. We provide expert legal representation to navigate the complexities of custody, visitation rights, and guardianship.
            </p>
            
            <Button asChild size="lg">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
              </a>
            </Button>
            
            <h2 className="mt-12">Types of Child Custody Arrangements</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Physical Custody:</strong> Determines which parent the child will live with.</li>
              <li><strong>Legal Custody:</strong> Grants a parent the right to make important decisions about the child's upbringing, such as education and healthcare.</li>
              <li><strong>Joint Custody:</strong> Both parents share the responsibility of making decisions and/or have the child live with them for significant periods.</li>
              <li><strong>Sole Custody:</strong> One parent is granted exclusive physical and legal custody of the child.</li>
            </ul>

            <h2 className="mt-12">Our Approach to Child Custody Cases</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li><strong>Child-Centric Strategy:</strong> We build our case around the child's welfare, which is the court's paramount consideration.</li>
              <li><strong>Negotiation and Mediation:</strong> We strive for amicable solutions through mediation to avoid lengthy court battles that can be stressful for the child.</li>
              <li><strong>Strong Court Representation:</strong> When litigation is necessary, we provide robust representation, presenting clear evidence to support your case for custody.</li>
              <li><strong>Handling Visitation Rights:</strong> We also assist non-custodial parents in securing fair and enforceable visitation rights.</li>
            </ol>

            <h2 className="mt-12">Why Choose Us for Your Child Custody Case?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Compassionate Lawyers:</strong> We handle sensitive family matters with empathy and understanding.</li>
              <li><strong>Strategic Legal Advice:</strong> We analyze every aspect of your case to provide the best possible legal strategy.</li>
              <li><strong>Proven Track Record:</strong> We have a history of achieving favorable outcomes for our clients in custody battles.</li>
              <li><strong>Focus on Child's Welfare:</strong> Our ultimate goal is to secure a stable and nurturing environment for your child.</li>
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

            <h2 className="mt-12">Secure Your Child's Future Today</h2>
            <p>
              If you are facing a child custody dispute, don't navigate it alone. Contact Jaipur Legal Solution for a confidential consultation to discuss how we can protect your parental rights and your child's future.
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

    