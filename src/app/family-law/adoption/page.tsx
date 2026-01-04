
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Adoption Lawyer in Jaipur | Legal Adoption Process',
    description: 'Expert legal services for child adoption in Jaipur. We guide you through the CARA registration, documentation, and court process for a smooth adoption journey.',
};

const faqs = [
    {
        question: "Q1. Who is eligible to adopt a child in India?",
        answer: "👉 A single person, or a married couple who have been in a stable marital relationship for at least two years can adopt. The prospective parents must be physically, mentally, and emotionally stable."
    },
    {
        question: "Q2. What is the role of CARA in adoption?",
        answer: "👉 The Central Adoption Resource Authority (CARA) is the nodal body for adoption of Indian children. All adoptions must be processed through their portal."
    },
    {
        question: "Q3. Can a single male adopt a girl child?",
        answer: "👉 No, as per the current regulations, a single male is not eligible to adopt a girl child."
    },
    {
        question: "Q4. How long does the adoption process take?",
        answer: "👉 The process can take anywhere from a few months to a couple of years, depending on various factors like the availability of children and completion of legal formalities."
    },
    {
        question: "Q5. How can Jaipur Legal Solution help in the adoption process?",
        answer: "👉 We guide you through the entire legal process, from registration with CARA to filing the petition in court and obtaining the final adoption order."
    }
];

export default function AdoptionPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/family-law" className="hover:text-primary">Family Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Adoption</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
            <h1 className="border-b border-primary/20 pb-4">Service Overview: Adoption</h1>
            
            <h2>Building Families Through Legal Adoption</h2>
            <p>
              Adoption is a beautiful way to build a family, but it involves a complex legal process. At Jaipur Legal Solution, we provide comprehensive legal services to guide prospective parents through every step of the adoption journey, ensuring all legal requirements are met for a smooth and successful adoption.
            </p>
            
            <Button asChild size="lg">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
              </a>
            </Button>
            
            <h2 className="mt-12">The Adoption Process in India</h2>
            <p>The adoption process is primarily governed by the Hindu Adoption and Maintenance Act, 1956, and the Juvenile Justice (Care and Protection of Children) Act, 2015. Our services cover:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Registration:</strong> Assisting prospective adoptive parents with registration on the CARA (Central Adoption Resource Authority) portal.</li>
              <li><strong>Home Study and Counseling:</strong> Guiding you through the home study process conducted by specialized adoption agencies.</li>
              <li><strong>Legal Documentation:</strong> Preparing and filing the adoption petition and all other necessary documents in the competent court.</li>
              <li><strong>Court Proceedings:</strong> Representing you in court hearings to obtain the final adoption order.</li>
              <li><strong>Post-Adoption Formalities:</strong> Assisting with birth certificate issuance and other post-adoption legal requirements.</li>
            </ul>

            <h2 className="mt-12">Who Can We Assist?</h2>
            <ol className="list-decimal pl-5 space-y-4">
              <li>Prospective Adoptive Parents (Indian and NRIs).</li>
              <li>Single individuals seeking to adopt.</li>
              <li>Step-parents wishing to adopt their step-child.</li>
              <li>Families looking for legal guidance on inter-country adoptions.</li>
            </ol>

            <h2 className="mt-12">Why Choose Jaipur Legal Solution for Adoption?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Expert Knowledge:</strong> Our lawyers are well-versed in adoption laws and procedures.</li>
              <li><strong>End-to-End Guidance:</strong> We provide support at every stage, from initial paperwork to the final court order.</li>
              <li><strong>Hassle-Free Process:</strong> We streamline the legal formalities to make the adoption process as smooth as possible for you.</li>
              <li><strong>Compassionate Approach:</strong> We understand the emotional aspect of adoption and provide supportive and empathetic counsel.</li>
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

            <h2 className="mt-12">Start Your Adoption Journey with Us</h2>
            <p>
              Embark on the rewarding journey of adoption with the right legal partner by your side. Contact Jaipur Legal Solution for a consultation to understand the process and how we can help you build your family.
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

    