
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. What is the difference between Kidnapping and Abduction?",
        answer: "Kidnapping primarily involves taking away a minor without the consent of their lawful guardian. Abduction involves forcing or deceiving any person to go from a place. Age is a key factor in kidnapping, while force or deceit is central to abduction."
    },
    {
        question: "Q2. How is an FIR filed in a kidnapping case?",
        answer: "You can file an FIR at the nearest police station. Our legal team will help you draft the complaint with the correct sections of the law."
    },
    {
        question: "Q3. What should I do if I am falsely accused of kidnapping?",
        answer: "In such cases, immediately apply for anticipatory bail and collect evidence to prove your innocence. Our defense team will represent you in court."
    },
    {
        question: "Q4. What is the punishment for kidnapping for ransom?",
        answer: "Under Section 364A of the IPC, kidnapping for ransom is punishable with life imprisonment or even the death penalty."
    },
    {
        question: "Q5. Can a love affair case with a consenting adult be considered kidnapping?",
        answer: "If both individuals are adults (boy 21+, girl 18+) and have gone with their own free will, it is not considered kidnapping. Defending against false FIRs is crucial in such cases."
    }
];

export default function KidnappingAbductionCasesPage() {
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
          <h1 className="border-b border-primary/20 pb-4">Kidnapping & Abduction Cases</h1>
          <p>
            For cases related to Sections 363–366 of the IPC (Kidnapping & Abduction), our experienced lawyers provide complete legal assistance with FIRs, bail, and trials—whether you are the victim or the accused.
          </p>
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Kidnapping and Abduction are serious offenses against a person's freedom and safety. In India, these offences are dealt with under Sections 359 to 374 of the Indian Penal Code (IPC), with punishments ranging from rigorous imprisonment to a life sentence depending on the severity of the act.
          </p>
          <p>
            Our criminal law expert team provides proper legal guidance, case defense, and court representation to both victims and accused persons in such cases.
          </p>

          <h2 className="mt-12">Meaning & Difference</h2>
          <h3 className="text-xl font-semibold mt-4">Kidnapping:</h3>
          <p>
            When a person takes away a minor or a person of unsound mind without the consent of their lawful guardian, it is called kidnapping.
          </p>
          <p>➡ Section 363 IPC – Punishment for Kidnapping</p>
          <p>Punishment – up to 7 years imprisonment + fine.</p>
          
          <h3 className="text-xl font-semibold mt-4">Abduction:</h3>
          <p>
            When a person compels by force, or induces by any deceitful means, any person to go from any place, it is abduction.
          </p>
          <p>➡ Section 362 IPC – Abduction definition</p>
          <p>The punishment for abduction varies according to the purpose – for ransom, marriage, or murder.</p>
          
          <h2 className="mt-12">Related Legal Sections</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Section 363 IPC – Punishment for Kidnapping.</li>
            <li>Section 364 IPC – Kidnapping or abducting in order to murder.</li>
            <li>Section 364A IPC – Kidnapping for ransom (A serious offence punishable with life imprisonment or death).</li>
            <li>Section 365 IPC – Kidnapping or abducting with intent secretly and wrongfully to confine person.</li>
            <li>Section 366 IPC – Kidnapping, abducting or inducing woman to compel her marriage, etc.</li>
          </ul>
          <p>The police investigation, FIR filing, and court trial in all these cases are highly sensitive. Therefore, choosing the right lawyer is very important.</p>

          <h2 className="mt-12">Common Scenarios</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>Child Kidnapping Cases:</strong>
              <p>Taking children from lawful guardianship or cases of missing children.</p>
            </li>
            <li>
              <strong>Marriage-Related Kidnapping:</strong>
              <p>When a woman is taken against her will for marriage or illicit relations, Section 366 IPC applies.</p>
            </li>
            <li>
              <strong>Kidnapping for Ransom:</strong>
              <p>Threatening to release a person in exchange for money or property – Section 364A IPC.</p>
            </li>
            <li>
              <strong>Love Affairs & False Kidnapping Allegations:</strong>
              <p>Often, false kidnapping allegations are made in cases where couples elope with mutual consent. Our defense team provides precise representation in such cases.</p>
            </li>
            <li>
              <strong>Human Trafficking or Forced Labour:</strong>
              <p>These serious crimes fall under Section 370 and 374 of the IPC.</p>
            </li>
          </ul>

          <h2 className="mt-12">Legal Remedies & Assistance</h2>
          <h3 className="text-xl font-semibold mt-4">1. For Victims:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Police FIR registration under the appropriate IPC section.</li>
            <li>Filing a missing person report and assistance in tracing.</li>
            <li>Court orders for protection and custody (especially for minors).</li>
            <li>Representation during investigation and trial.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">2. For the Accused:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Anticipatory Bail (if there is an apprehension of arrest).</li>
            <li>Regular Bail after arrest.</li>
            <li>Case defense through proper evidence and witness cross-examination.</li>
            <li>Legal representation before the Sessions Court and High Court.</li>
          </ul>

          <h2 className="mt-12">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Expert criminal lawyers specializing in kidnapping & abduction cases.</li>
            <li>Assistance in FIR drafting, bail, and trial defense.</li>
            <li>Quick response and transparent legal advice.</li>
            <li>Representation before all courts in Jaipur and Rajasthan.</li>
            <li>100% confidentiality and client privacy assured.</li>
          </ul>
          <p className="mt-4">Our aim is – “Justice with Protection” – so that no innocent person is punished and no victim is denied justice.</p>

          <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Contact Us Today</h3>
            <p className="mt-2 text-muted-foreground">If you are involved in a kidnapping or abduction case—or if a family member is missing, seek immediate legal help.</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2" />
                Call us at 7597497063
              </a>
            </Button>
            <p className="mt-2 font-semibold">Best Kidnapping & Abduction Case Lawyers</p>
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

          <div className="mt-12 p-6 bg-card/50 rounded-lg">
            <h3 className="font-serif text-xl font-bold text-foreground">For Expert Legal Advice & Case Defence:</h3>
            <p className="font-semibold">Top Criminal Lawyers for Kidnapping & Abduction Cases</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7597497063
              </a>
            </Button>
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
