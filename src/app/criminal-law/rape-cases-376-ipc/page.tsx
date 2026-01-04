
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const faqs = [
    {
        question: "Q1. Can bail be granted in a Section 376 IPC case?",
        answer: "👉 This is a non-bailable offence, but bail can be obtained from the High Court or Sessions Court if the allegations appear to be false or if there is a lack of evidence."
    },
    {
        question: "Q2. Can a person be punished for filing a false rape case?",
        answer: "👉 Yes, if it is proven that the complaint was false and malicious, the complainant can be prosecuted under Section 211 of the IPC."
    },
    {
        question: "Q3. Can a rape case be settled through compromise?",
        answer: "👉 No, rape is a non-compoundable offence, which means it cannot be settled by a compromise between the parties."
    },
    {
        question: "Q4. Can an accused be protected from arrest?",
        answer: "👉 Yes, by obtaining anticipatory bail, an arrest can be prevented. Our team assists in this process."
    },
    {
        question: "Q5. Can the victim's identity be made public?",
        answer: "👉 Absolutely not. Under Indian law, disclosing the identity of a rape victim is a punishable offence."
    },
    {
        question: "Q6. Do you represent both the victim and the accused?",
        answer: "👉 Yes, we provide expert legal representation for both the victim seeking justice and individuals falsely accused, with full ethics and confidentiality."
    }
];

const punishmentData = [
    { type: "Rape", min: "10 years", max: "Life Imprisonment", extra: "Fine" },
    { type: "Rape by a police officer or public servant", min: "10 years", max: "Life Imprisonment", extra: "Fine" },
    { type: "Gang rape", min: "20 years", max: "Life Imprisonment for the remainder of natural life", extra: "Fine" },
    { type: "Rape on a minor (POCSO Act)", min: "20 years", max: "Life Imprisonment or Death Penalty", extra: "Fine" }
]

export default function RapeCasesPage() {
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
          <h1 className="border-b border-primary/20 pb-4">Rape Cases (376 IPC)</h1>
          <p>
            For cases related to Section 376 IPC (Rape), our expert legal team provides precise advice, FIR assistance, and court representation. Whether you’re seeking justice or defending against false charges, we stand with you.
          </p>
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Section 376 of the Indian Penal Code (IPC) deals with the crime of rape—one of the most serious and sensitive offences in Indian criminal law. This section applies to cases where sexual intercourse is committed against a woman's consent or through deceit. Rape is considered not only a crime against an individual but also a crime against the dignity of women and society as a whole.
          </p>
          <p>
            We handle rape cases with the utmost sensitivity and professionalism—whether it's a case of false allegation or a fight for justice for the victim. Our experienced criminal lawyers ensure that every client gets fair legal representation, privacy, and justice.
          </p>

          <h2 className="mt-12">What is Section 376 IPC?</h2>
          <p>
            Section 376 IPC defines the punishment for the offence of rape. According to the law: “Whoever commits rape shall be punished with rigorous imprisonment of not less than 10 years, but which may extend to life imprisonment, and shall also be liable to fine.”
          </p>
          
          <h3 className="text-xl font-semibold mt-6">Key Elements</h3>
          <p>To establish a rape offence, the prosecution must prove the following:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>That sexual intercourse occurred.</li>
            <li>That the act was committed without the woman's consent, or by force or deceit.</li>
            <li>If the woman is under 18 years of age, her consent is irrelevant in the eyes of the law (as the case would also fall under the POCSO Act).</li>
            <li>That the accused committed the act with a culpable intention.</li>
          </ul>
          
          <h2 className="mt-12">Types of Rape Cases</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Consent-Based Dispute:</strong> Cases where relationships built on a promise of marriage are later termed as rape. Courts in such cases analyze consent and intention deeply.</li>
            <li><strong>False Allegations:</strong> Some cases involve false complaints filed due to personal or family disputes. Our lawyers handle such false 376 IPC cases with a strong defense based on factual evidence.</li>
            <li><strong>Child Sexual Offences (POCSO Act Cases):</strong> If the victim is under 18, the case also falls under the POCSO Act, which has stricter punishments.</li>
            <li><strong>Marital Rape Allegations:</strong> While marital rape is not fully criminalized in India, Section 376B of the IPC addresses sexual intercourse by a husband with his wife during separation without her consent.</li>
          </ul>

          <h2 className="mt-12">Punishment under Section 376 IPC</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Type of Offence</TableHead>
                        <TableHead>Minimum Punishment</TableHead>
                        <TableHead>Maximum Punishment</TableHead>
                        <TableHead>Additional Penalty</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {punishmentData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{row.type}</TableCell>
                            <TableCell>{row.min}</TableCell>
                            <TableCell>{row.max}</TableCell>
                            <TableCell>{row.extra}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <p className="mt-2 text-sm">Note: The punishment depends on the age of the victim, the relationship with the accused, and the circumstances of the offence.</p>

          <h2 className="mt-12">Legal Process</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>FIR Registration:</strong> Filing an FIR is the first step in a rape case. The police are legally bound to register the case immediately.</li>
            <li><strong>Medical Examination:</strong> The victim's medical examination is conducted to preserve evidence.</li>
            <li><strong>Investigation:</strong> The police investigate the incident, collect forensic evidence, and record statements from both parties.</li>
            <li><strong>Bail & Defense:</strong> Section 376 is a non-bailable offence, but the accused can apply for anticipatory or regular bail from the court. If you are falsely accused, our team builds a strong defense strategy.</li>
            <li><strong>Trial:</strong> The case is tried in court based on evidence, witness statements, and medical reports.</li>
          </ol>

          <h2 className="mt-12">How We Can Help You</h2>
          <p>We handle sensitive cases like rape, molestation, and sexual assault with the utmost confidentiality. Our team consists of experienced criminal lawyers who specialize in all types of 376 IPC cases.</p>
          <h3 className="text-xl font-semibold mt-4">Our Legal Services:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Legal consultation and case assessment</li>
            <li>✅ FIR filing and anticipatory bail support</li>
            <li>✅ Evidence analysis and documentation</li>
            <li>✅ Court representation and defense strategy</li>
            <li>✅ Cross-examination and witness handling</li>
          </ul>
          <p>Whether you are the victim or have been falsely accused, we protect both your rights and your dignity.</p>
          
          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Experienced criminal lawyers for 376 IPC & POCSO Act cases</li>
            <li>Complete confidentiality & professional conduct</li>
            <li>Expertise in both defense and victim representation</li>
            <li>Transparent legal process and affordable fees</li>
            <li>Quick response and personalized guidance</li>
          </ul>
          <p>Our goal is to bring out the truth and ensure justice is served.</p>

          <h2 className="mt-12">Important Legal Rights</h2>
          <p><strong>Victim's rights:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Free medical examination</li>
            <li>Free legal aid and protection</li>
            <li>Right to privacy (Identity not to be disclosed)</li>
            <li>Right to a fair and speedy trial</li>
          </ul>
          <p className="mt-4"><strong>Accused's rights:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Right to legal representation</li>
            <li>Right to bail and a fair hearing</li>
            <li>Protection against false implication</li>
          </ul>

          <h2 className="mt-12">Frequently Asked Questions (FAQ) – Section 376 IPC</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>

          <h2 className="mt-12">Conclusion</h2>
          <p>
            Cases under Section 376 IPC are extremely sensitive and complex. They require accurate legal advice, privacy, and sensitivity. We handle every rape case with the utmost seriousness, professionalism, and empathy.
          </p>
          
          <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-xl font-bold text-foreground">Trusted Criminal & Rape Case Lawyers</h3>
            <p>We fight for truth, dignity, and justice.</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7597497063
              </a>
            </Button>
          </div>

          <div className="mt-12 p-4 bg-card rounded-lg">
            <p className="font-bold">Contact Us</p>
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
