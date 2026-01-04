
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q: Hacking या phishing case कैसे register करें?",
        answer: "👉 Cyber Cell Jaipur या nearest police station में complaint देकर FIR दर्ज कर सकते हैं। Screenshots और emails evidence के रूप में attach करें।"
    },
    {
        question: "Q: अगर मेरा bank account hack हो गया है तो क्या करना चाहिए?",
        answer: "👉 तुरंत FIR दर्ज करें और हमारी टीम से legal notice और recovery assistance लें।"
    },
    {
        question: "Q: क्या phishing email या fake website भी अपराध है?",
        answer: "👉 हां, phishing emails और fake websites IT Act और IPC Sections के अंतर्गत punishable हैं।"
    },
    {
        question: "Q: क्या hacking case में compensation claim किया जा सकता है?",
        answer: "👉 हां, financial loss और damages के लिए court में claim किया जा सकता है।"
    },
    {
        question: "Q: Jaipur में hacking और phishing case के लिए best lawyer कौन है?",
        answer: "👉 हमारी टीम expert cyber crime lawyers के साथ hacking और phishing cases में trusted है। Call 📞 7597497063।"
    }
];

export default function HackingPhishingPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/cyber-law" className="hover:text-primary">Cyber Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Service Details</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <h1 className="border-b border-primary/20 pb-4">Service Overview</h1>
          
          <h2>Hacking & Phishing</h2>
          <p>
            Victim of hacking or phishing attacks? We offer expert legal help for cyber theft, online fraud, and IT Act violations in Jaipur. Call 7597497063 for swift legal action and protection.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            In today’s digital world, hacking and phishing attacks have become major cyber crimes affecting individuals and businesses. अगर कोई व्यक्ति आपकी bank account, email, social media, या financial data को illegally access करता है या fraudulent messages भेजकर personal information चुराता है, तो यह serious cyber crime है under IT Act, 2000 और IPC।
          </p>
          <p>
            Our expert cyber crime lawyers provide legal assistance for hacking, phishing, online fraud, and data breaches in Jaipur.
          </p>

          <h2 className="mt-12">What is Hacking & Phishing? (हैकिंग और फ़िशिंग क्या है?)</h2>
          <p><strong>Hacking</strong> – Unauthorized access of computer systems, accounts, or networks.</p>
          <p><strong>Phishing</strong> – Fraudulent attempts to steal sensitive information like passwords, bank details, or OTPs using fake emails, messages, or websites.</p>
          <p>Common examples include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fake emails or SMS requesting login credentials</li>
            <li>Unauthorized access to bank accounts, email, or social media</li>
            <li>Malware or ransomware attacks</li>
            <li>Online identity impersonation for financial gain</li>
            <li>Fake websites mimicking legitimate services to steal data</li>
          </ul>

          <h2 className="mt-12">Our Expertise Includes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ FIR Registration & Complaint Filing in Cyber Cell Jaipur</li>
            <li>✅ Legal Notice & Case Drafting for Cyber Attacks</li>
            <li>✅ Court Representation under IT Act & IPC Sections</li>
            <li>✅ Digital Forensics & Evidence Collection</li>
            <li>✅ Assistance in Account Recovery & Fraud Prevention</li>
            <li>✅ Legal Protection Against Financial Loss and Online Threats</li>
          </ul>
          <p>हमारी legal team हर hacking या phishing case को confidentiality और technical precision के साथ handle करती है ताकि आपको सुरक्षित और सही न्याय मिल सके।</p>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Best Hacking & Phishing Lawyers in Jaipur</li>
            <li>100+ Cyber Crime Cases Successfully Handled</li>
            <li>Expertise in Digital Evidence & IT Act Sections</li>
            <li>Coordination with Rajasthan Cyber Police & Forensic Experts</li>
            <li>Transparent Fees & 24×7 Legal Assistance</li>
          </ul>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
               Call Now: 7597497063
            </a>
          </Button>

          <h2 className="mt-12">Applicable Laws & Punishment (लागू कानून और सजा)</h2>
          <p>Hacking & phishing cases are covered under:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>IT Act, 2000 – Sections 43, 66, 66C, 66D</li>
            <li>IPC Section 420 – Cheating and fraud</li>
            <li>IPC Section 66E – Privacy violations</li>
          </ul>
          <p>Punishment may include imprisonment up to 3–5 years and heavy fines, depending on severity.</p>
          <p>👉 इसलिए hacking या phishing incidents को ignore न करें और तुरंत legal help लें।</p>

          <h2 className="mt-12">Conclusion (निष्कर्ष)</h2>
          <p>
            Hacking and phishing cases require quick legal action, digital evidence expertise, and strong representation.
            We provide complete legal support for cyber attacks, online fraud, and IT Act violations in Jaipur.
          </p>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
               Call 7597497063 for immediate cyber crime legal assistance.
            </a>
          </Button>

          <h2 className="mt-12">Frequently Asked Questions (FAQs)</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-card/50 rounded-lg">
            <h3 className="font-bold">Contact Us</h3>
            <p>Address: 96 Agra Road, Prem Nagar Jaipur, Rajasthan 302031</p>
            <p>Phone: <a href="tel:7597497063" className="text-primary hover:underline">7597497063</a></p>
            <p>Email: <a href="mailto:Ajay32727@gmail.com" className="text-primary hover:underline">Ajay32727@gmail.com</a></p>
          </div>
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
                  <a href="mailto:Ajay32727@gmail.com">
                    <Mail className="mr-2" />
                    Email Us
                  </a>
                </Button>
                <p className="text-muted-foreground">Ajay32727@gmail.com</p>
              </div>
            </Card>
        </div>
      </section>
    </div>
  );
}
