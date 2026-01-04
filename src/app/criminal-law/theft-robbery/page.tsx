
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. What is the difference between Theft and Robbery?",
        answer: "👉 Theft involves only the stealing of property, while Robbery also includes the use of force, fear, or threat."
    },
    {
        question: "Q2. Can bail be granted in a theft case?",
        answer: "👉 Yes, in most theft cases, bail can be granted, but it depends on the severity of the case and the evidence."
    },
    {
        question: "Q3. Is anticipatory bail possible in a robbery case?",
        answer: "👉 Yes, if you have been falsely accused, you can apply for anticipatory bail in court."
    },
    {
        question: "Q4. Can the police arrest without a warrant?",
        answer: "👉 Yes, if the offence is cognizable (like robbery or dacoity), the police can make an arrest without a warrant."
    },
    {
        question: "Q5. How can you help?",
        answer: "👉 Our team assists you with bail, FIR quashing, evidence defense, and court representation—to make your case legally strong."
    }
];

export default function TheftRobberyPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/criminal-law" className="hover:text-primary">Criminal Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Service Details</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <h1 className="border-b border-primary/20 pb-4">Theft & Robbery</h1>
          <p>
            In cases related to Theft & Robbery (Sections 378 and 392 of the IPC), our legal team provides legal protection and proper representation—whether you are the accused or the victim, we ensure both justice and protection.
          </p>
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className='mt-8'>
            Theft and Robbery are serious criminal offenses under the Indian Penal Code. The process of police investigation, FIR, and court trial can be quite complex in such cases—so it is very important to get help from an experienced criminal lawyer.
          </p>
          <p>
            Our criminal defense team provides legal protection, bail assistance, and court representation to ensure justice from your side.
          </p>

          <h2 className="mt-12">Understanding the Law:</h2>
          <h3 className="text-xl font-semibold mt-4">Section 378 IPC – Theft:</h3>
          <p>If a person dishonestly takes any movable property out of the possession of any person without that person's consent, it is called "Theft." The punishment for this can be imprisonment for up to 3 years, a fine, or both.</p>

          <h3 className="text-xl font-semibold mt-4">Section 390 IPC – Robbery:</h3>
          <p>If, in order to the committing of the theft, or in carrying away property obtained by the theft, the offender voluntarily causes or attempts to cause any person death or hurt or wrongful restraint, or fear of instant death or of instant hurt, or of instant wrongful restraint, the theft is "robbery". The punishment for this offence can be imprisonment for up to 10 years, and in some cases, life imprisonment.</p>
          
          <h3 className="text-xl font-semibold mt-4">Section 391 IPC – Dacoity:</h3>
          <p>When five or more persons conjointly commit or attempt to commit a robbery, it is designated as “Dacoity,” which is punishable with life imprisonment or rigorous imprisonment.</p>

          <h2 className="mt-12">Our Legal Services in Theft & Robbery Cases</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>Legal Advice & Case Review:</strong> We understand the entire situation of your case—FIR, evidence, witness statements, and allegations—to prepare a strong defense strategy.</li>
            <li><strong>Bail & Anticipatory Bail:</strong> If you have been falsely implicated in a theft or robbery case, our team acts immediately for anticipatory bail to provide protection from arrest.</li>
            <li><strong>FIR Quashing:</strong> Often, false FIRs are filed due to personal enmity or misunderstanding. We file an FIR quashing petition in the High Court to get it dismissed.</li>
            <li><strong>Evidence Analysis & Court Representation:</strong> Our team examines the evidence, finds loopholes, and presents your side with legal strength in court.</li>
            <li><strong>Victim Legal Support:</strong> If you are a victim of theft or robbery, our team provides full assistance in FIR registration, property recovery, and court proceedings.</li>
          </ol>

          <h2 className="mt-12">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Experienced Criminal Lawyers</li>
            <li>Specialized in Theft, Robbery & Dacoity Cases</li>
            <li>Legal Protection from False Allegations</li>
            <li>Strategic Bail and Defence Planning</li>
            <li>Transparent Legal Procedure & Regular Updates</li>
            <li>24×7 Legal Support in Emergency Arrest Cases</li>
          </ul>
          <p>Our aim is not just to win the case, but also to protect your rights and reputation.</p>

          <h2 className="mt-12">Our Approach:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Case Details Collection</li>
            <li>FIR & Investigation Review</li>
            <li>Witness & Evidence Analysis</li>
            <li>Legal Drafting & Documentation</li>
            <li>Strong Court Representation</li>
          </ul>
          <p>In every case, we adopt a different strategy so that you can get legal protection as well as peace of mind.</p>
          
          <h2 className="mt-12">Common Defences in Theft & Robbery Cases</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>No direct evidence linking the accused</li>
                <li>False implication or mistaken identity</li>
                <li>Recovery made without witnesses</li>
                <li>No proof of dishonest intention</li>
                <li>Violation of arrest or search procedure</li>
            </ul>
            <p>Our team presents these legal loopholes correctly in court so that your side can be presented strongly.</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Need Legal Help in a Theft or Robbery Case?</h3>
            <p className="mt-2 text-muted-foreground">If you are stuck in a case of theft, robbery, or false criminal charges, don't delay. Our criminal lawyers will cooperate with you at every stage of arrest, investigation, and trial.</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2" />
                Call Now: 7597497063
              </a>
            </Button>
            <p className="mt-2 font-semibold">Expert Criminal Lawyers for Theft & Robbery Cases</p>
          </div>

          <h2 className="mt-12">Frequently Asked Questions (FAQ)</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>

          <h2 className="mt-12">Conclusion</h2>
          <p>Theft and Robbery are offenses with many legal complexities, but with the right lawyer and a precise strategy, you can protect your rights. Our team is with you in every situation—whether you are the accused or the victim, we are with you until justice is served.</p>

          <div className="mt-8 p-4 bg-card rounded-lg">
            <h3 className="font-bold">Contact Us</h3>
            <p>Address: 96 Agra Road, Prem Nagar Jaipur, Rajasthan 302031</p>
            <p>Phone: <a href="tel:7597497063" className="text-primary hover:underline">7597497063</a></p>
            <p>Email: <a href="mailto:Ajaykumarsharma32727@gmail.com" className="text-primary hover:underline">Ajaykumarsharma32727@gmail.com</a></p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
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
