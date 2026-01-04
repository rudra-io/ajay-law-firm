
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q: Data theft case कैसे register करें?",
        answer: "👉 Jaipur Cyber Cell या nearest police station में complaint देकर FIR दर्ज करवा सकते हैं, साथ में digital evidence attach करें।"
    },
    {
        question: "Q: अगर कोई मेरी business या personal data चोरी कर रहा है तो क्या करें?",
        answer: "👉 तुरंत legal notice भेजें और FIR दर्ज कराएं। हमारी टीम इसमें मदद करता है।"
    },
    {
        question: "Q: क्या data theft सिर्फ online होता है?",
        answer: "👉 नहीं, offline storage और physical data theft भी IT Act & IPC के तहत आता है।"
    },
    {
        question: "Q: क्या data theft में compensation मिल सकता है?",
        answer: "👉 हां, court में आप financial loss और damage claim कर सकते हैं।"
    },
    {
        question: "Q: Jaipur में data theft case के लिए best lawyer कौन है?",
        answer: "👉 हमारी टीम cyber law और IT Act मामलों में expert है। Call 📞 7597497063 for consultation."
    }
];

export default function DataTheftPage() {
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
          
          <h2>Data Theft</h2>
          <p>
            Victim of data theft or cyber breach? We provide expert legal support for stolen data, hacking, and IT Act violations. Protect your privacy and business. Call 7597497063 today.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Data theft (डेटा चोरी) आज के डिजिटल युग में सबसे गंभीर cyber crimes में से एक है। जब कोई व्यक्ति आपके personal, financial, या business data को चोरी करता है, misuse करता है या unauthorized access करता है, तो यह IT Act, 2000 और IPC के अंतर्गत अपराध माना जाता है।
          </p>
          <p>
            Our team provides expert legal support to victims of data theft, hacking, cyber breaches, and digital fraud.
          </p>

          <h2 className="mt-12">What is Data Theft? (डेटा चोरी क्या है?)</h2>
          <p>
            Data theft का मतलब है किसी की sensitive information को चोरी, misuse या unauthorized तरीके से access करना। Common forms include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Hacking into personal or business accounts</li>
            <li>Stealing financial or confidential business data</li>
            <li>Unauthorized access to emails, cloud storage, or databases</li>
            <li>Copying or leaking sensitive digital information</li>
            <li>Online espionage or corporate data theft</li>
          </ul>
          <p>डेटा चोरी आपकी privacy, reputation और financial security के लिए खतरा बन सकती है।</p>

          <h2 className="mt-12">Our Expertise Includes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Filing complaint with Cyber Cell Jaipur</li>
            <li>✅ Drafting legal notice against data thieves</li>
            <li>✅ FIR registration & case follow-up</li>
            <li>✅ Court representation under IT Act & IPC</li>
            <li>✅ Digital evidence collection & forensic support</li>
            <li>✅ Assistance in data recovery and account security</li>
          </ul>
          <p>हमारी legal team हर case को technical evidence और legal strategy के साथ handle करती है ताकि victims को justice और protection दोनों मिले।</p>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Best Data Theft & Cyber Crime Lawyers in Jaipur</li>
            <li>100+ Successful Cyber Fraud Cases Handled</li>
            <li>Coordination with Rajasthan Cyber Police & Forensic Experts</li>
            <li>Confidential, professional, and prompt legal support</li>
            <li>Transparent fees & 24×7 client assistance</li>
          </ul>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 7597497063
            </a>
          </Button>

          <h2 className="mt-12">Applicable Laws & Punishment (लागू कानून और सजा)</h2>
          <p>Data theft cases are covered under:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Section 43 & 66 of IT Act, 2000 – Hacking, unauthorized access, and data theft</li>
            <li>IPC Sections 420, 468, 469 – Cheating, fraud, and forgery</li>
          </ul>
          <p>Punishment may include imprisonment up to 3 years and heavy fines, depending on the case severity.</p>
          <p>👉 इसलिए डेटा चोरी के मामलों में तुरंत legal action लेना जरूरी है।</p>

          <h2 className="mt-12">Conclusion (निष्कर्ष)</h2>
          <p>
            Data theft cases require technical investigation and strong legal representation. We provide you with legal protection from cyber fraud and data misuse.
          </p>
          <p>
            चाहे आपकी business, personal, या financial data चोरी हुई हो, हमारी legal team आपकी मदद के लिए हमेशा तैयार है।
          </p>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call 7597497063 for expert data theft legal support in Jaipur.
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
