
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q: Identity theft case कैसे register करें?",
        answer: "👉 Jaipur Cyber Cell या nearest police station में complaint देकर FIR दर्ज करवा सकते हैं, साथ में misuse के proofs attach करें।"
    },
    {
        question: "Q: अगर कोई मेरा fake social media account बना रहा है तो क्या करें?",
        answer: "👉 तुरंत report करें और हमारी टीम की help से legal notice व FIR दर्ज कराएं।"
    },
    {
        question: "Q: क्या identity theft सिर्फ online होता है?",
        answer: "👉 नहीं, यह offline documents जैसे PAN, Aadhaar या bank papers से भी हो सकता है।"
    },
    {
        question: "Q: क्या identity theft में compensation मिल सकता है?",
        answer: "👉 हां, court में आप financial loss और mental harassment के लिए compensation claim कर सकते हैं।"
    },
    {
        question: "Q: Jaipur में identity theft case के लिए best lawyer कौन है?",
        answer: "👉 हमारी टीम cyber fraud और IT Act मामलों में expert है। Call 📞 7597497063 for consultation."
    }
];

export default function IdentityTheftPage() {
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
          
          <h2>Identity Theft</h2>
          <p>
            Victim of identity theft or online fraud? We provide expert legal support for data misuse, fake profiles, and cyber fraud in Jaipur. Protect your digital identity – Call 7597497063.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Identity theft (पहचान की चोरी) आज के digital era में सबसे बढ़ते हुए cyber crimes में से एक है। जब कोई व्यक्ति आपकी personal information, documents, bank details, या photos का misuse करता है — तो यह serious offence माना जाता है under IT Act, 2000 और Indian Penal Code (IPC)।
          </p>
          <p>
            We provide expert legal support to victims of cyber fraud, data misuse, fake profile creation, financial scams, and identity impersonation.
          </p>

          <h2 className="mt-12">What is Identity Theft (पहचान की चोरी क्या है?)</h2>
          <p>
            Identity Theft का मतलब है किसी की व्यक्तिगत जानकारी (personal data) या financial details का use किसी illegal purpose के लिए करना — जैसे कि:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fake profile या social media account बनाना</li>
            <li>Credit card / bank fraud using your name</li>
            <li>Misusing PAN, Aadhaar, or mobile number</li>
            <li>Online shopping or loan fraud in your name</li>
            <li>Impersonating someone on email or WhatsApp</li>
          </ul>
          <p>ऐसे अपराध आपकी privacy, reputation और financial safety तीनों को प्रभावित करते हैं।</p>

          <h2 className="mt-12">Our Expertise Includes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Filing Complaint in Cyber Cell Jaipur</li>
            <li>✅ Drafting Legal Notice for Data Misuse</li>
            <li>✅ FIR Registration & Case Follow-up</li>
            <li>✅ Court Representation under IT Act & IPC</li>
            <li>✅ Evidence Collection & Digital Forensics Assistance</li>
            <li>✅ Assistance in Data Recovery or Account Restoration</li>
          </ul>
          <p>हमारी experienced cyber law team हर case को technical evidence और legal precision के साथ handle करती है ताकि आपको justice और compensation दोनों मिल सके।</p>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Best Identity Theft & Cyber Fraud Lawyers in Jaipur</li>
            <li>100+ Successful Cyber Crime Cases Handled</li>
            <li>Strong Coordination with Cyber Police Rajasthan</li>
            <li>Confidential and Professional Legal Support</li>
            <li>Transparent Legal Fees & 24×7 Client Assistance</li>
          </ul>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 7597497063
            </a>
          </Button>

          <h2 className="mt-12">Applicable Laws & Punishment (लागू कानून और सजा)</h2>
          <p>Identity theft cases are covered under:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Section 66C of IT Act, 2000 – Identity theft and password misuse</li>
            <li>Section 66D of IT Act – Cheating by impersonation using computer resources</li>
            <li>IPC Section 419, 420 – Fraud, cheating, and impersonation</li>
          </ul>
          <p>Punishment may include imprisonment up to 3 years and fine up to ₹1 lakh or more, depending on case severity.</p>
          <p>👉 इसलिए अगर कोई व्यक्ति आपकी identity का misuse कर रहा है, तो तुरंत कानूनी सहायता लें।</p>

          <h2 className="mt-12">Conclusion (निष्कर्ष)</h2>
          <p>
            Identity theft cases demand technical investigation और expert legal guidance।
            We provide you with complete legal protection from all kinds of cyber fraud and online impersonation.
          </p>
          <p>
            चाहे आपकी social media identity misuse हुई हो या financial scam, हमारी expert team हर step पर आपके साथ है।
          </p>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call 7597497063 for professional cyber crime legal support in Jaipur.
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
