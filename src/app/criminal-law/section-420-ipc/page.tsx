
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. Is Section 420 IPC a bailable offence?",
        answer: "➡️ No, Section 420 IPC is a non-bailable offence, but bail can be granted by the court depending on the facts of the case."
    },
    {
        question: "Q2. Can Section 420 IPC be applied if someone has committed online fraud against me?",
        answer: "➡️ Yes, if someone has taken money through false information online, Section 420 IPC is applicable."
    },
    {
        question: "Q3. Can the police arrest directly in a 420 IPC case?",
        answer: "➡️ Yes, as it is a cognizable offence, the police can arrest without a warrant."
    },
    {
        question: "Q4. How to defend a 420 IPC case?",
        answer: "➡️ If your intention was not dishonest and the transaction was genuine, you can defend your case with legal documents and communication proof."
    },
    {
        question: "Q5. Is compromise possible in a 420 IPC case?",
        answer: "➡️ In some cases, if both parties agree, a settlement or compounding may be possible before the court, but this depends on the court's discretion."
    }
];

export default function Section420IpcPage() {
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
          <h1 className="border-b border-primary/20 pb-4">Section 420 IPC - Cheating & Fraud</h1>
          <p>
            Facing a cheating or fraud case under Section 420 IPC? We offer expert defense, bail support, and legal guidance. Call 7597497063 for immediate help.
          </p>
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>
          
          <p className="mt-8">
            Fraud and cheating are common but serious offenses in today's world. Whether it's an online scam, property dealing fraud, or a business-related deception, Section 420 of the Indian Penal Code (IPC) applies to all such cases.
          </p>
          <p>
            Our team of experienced criminal lawyers specializes in cases under Section 420 IPC (Cheating and Dishonestly Inducing Delivery of Property). We provide expert legal assistance to clients who are either accused of cheating or are victims of such fraudulent acts.
          </p>

          <h2 className="mt-12">What is Section 420 IPC?</h2>
          <p>
            Section 420 IPC deals with “Cheating and Dishonestly Inducing Delivery of Property.” This means that if a person deceives someone with false information or promises to take their money, property, or any valuable item, it is considered a crime.
          </p>
          
          <p>👉 <strong>Punishment:</strong> The punishment for this offence may extend up to 7 years of imprisonment along with a fine.</p>
          
          <h2 className="mt-12">Essential Ingredients of Section 420 IPC</h2>
          <p>To prove an offence under Section 420 IPC, the following conditions must be met:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cheating</strong> — The accused must have deceived a person.</li>
            <li><strong>Dishonest Intention</strong> — The accused must have had a dishonest intention from the very beginning.</li>
            <li><strong>Delivery of Property</strong> — As a result of the deception, the victim must have delivered their property to the accused.</li>
            <li><strong>Inducement</strong> — The accused must have induced the victim to do so with false statements.</li>
          </ul>
          <p>In short, the intention to cheat must exist from the beginning; without dishonest intention, Section 420 IPC does not apply.</p>

          <h2 className="mt-12">Common Situations Where Section 420 IPC Applies</h2>
            <ul className="list-disc pl-5 space-y-4">
                <li><strong>Online Fraud or Cyber Scam:</strong> Cheating through online transactions, UPI payments, fake websites, or digital investments. We help victims of online scams by filing cyber complaints and representing them legally.</li>
                <li><strong>Property Dealing Fraud:</strong> When a person sells the same property to multiple people or deals with false documents.</li>
                <li><strong>Business or Partnership Fraud:</strong> Section 420 IPC also applies in cases of financial mismanagement between partners or false investment promises.</li>
                <li><strong>Fake Documents & Loan Fraud:</strong> Obtaining money or getting a loan approved in someone else's name using forged papers.</li>
                <li><strong>Bank & Financial Fraud:</strong> Cases of intentional loan default, false account statements, or cheque manipulation.</li>
            </ul>
          
          <h2 className="mt-12">Legal Process in Section 420 IPC Cases</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Filing of FIR:</strong> If someone has cheated you, the first step is to file an FIR at the nearest police station. Our team helps in drafting the FIR and filing the complaint.</li>
            <li><strong>Investigation:</strong> The police investigate and collect evidence like documents, messages, bank records, etc.</li>
            <li><strong>Arrest & Bail:</strong> Section 420 IPC is a cognizable & non-bailable offence, but bail can be granted. Our lawyers assist in applying for anticipatory or regular bail before the court.</li>
            <li><strong>Court Trial:</strong> The case is tried based on evidence and witness statements. We prepare a strong defense on your behalf to get you relief.</li>
          </ol>

          <h2 className="mt-12">How We Can Help</h2>
          <ul className="list-disc pl-5 space-y-2">
              <li><strong>Case Analysis & Strategy:</strong> We understand each case in detail to create a strong legal plan.</li>
              <li><strong>FIR & Bail Assistance:</strong> Immediate support for anticipatory or regular bail in 420 cases.</li>
              <li><strong>Court Representation:</strong> Experienced advocates represent you in court.</li>
              <li><strong>Document Verification:</strong> Expert examination in cases of fraud or false documents.</li>
              <li><strong>Client Updates:</strong> Transparent communication and legal clarity at every step.</li>
          </ul>
          <p>Whether you are a victim or an accused, our goal is to provide you with justice and legal protection.</p>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Experienced criminal lawyers with a proven record in 420 IPC cases</li>
            <li>✅ Personalized strategy based on your situation</li>
            <li>✅ 24×7 legal consultation available</li>
            <li>✅ Affordable and transparent fee structure</li>
            <li>✅ Fast response and dedicated support</li>
          </ul>
          <p className="mt-4">We are your trusted legal partner, protecting your rights and providing legal solutions.</p>

          <h2 className="mt-12">Our Expertise</h2>
          <p>We handle various criminal and fraud cases such as:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Section 406 IPC (Criminal Breach of Trust)</li>
            <li>Section 415 IPC (Cheating)</li>
            <li>Section 467, 468 IPC (Forgery and Fraudulent Documents)</li>
            <li>Cyber Crime & Online Scam Cases</li>
            <li>Business & Financial Dispute Cases</li>
          </ul>

          <h2 className="mt-12">Frequently Asked Questions (FAQs) – Section 420 IPC</h2>
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
            In cases related to Section 420 IPC, correct legal advice and prompt action are extremely important. A single wrong step can impact your case outcome, so it is always better to get expert guidance.
          </p>
          <p>
            Our team is an expert in all kinds of cheating, fraud, and property-related cases. We make your legal journey easy and safe.
          </p>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Trusted Criminal & Cheating Case Lawyers</h3>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7597497063
              </a>
            </Button>
          </div>

          <div className="mt-8 p-4 bg-card rounded-lg">
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
