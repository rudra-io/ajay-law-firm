
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q: Online fraud case कैसे register करें?",
        answer: "👉 Jaipur Cyber Cell या nearest police station में complaint देकर FIR दर्ज करवा सकते हैं।"
    },
    {
        question: "Q: Online payment या UPI fraud होने पर क्या करना चाहिए?",
        answer: "👉 तुरंत complaint दर्ज करें और evidence (screenshots, transaction details) attach करें।"
    },
    {
        question: "Q: क्या online fraud में civil और criminal दोनों actions हो सकते हैं?",
        answer: "👉 हां, civil claim के साथ criminal prosecution भी possible है।"
    },
    {
        question: "Q: क्या fake online shopping site भी cyber fraud के अंतर्गत आती है?",
        answer: "👉 हां, ऐसा करना cyber crime और cheating के अंतर्गत आता है।"
    },
    {
        question: "Q: Jaipur में online fraud case के लिए best lawyer कौन है?",
        answer: "👉 हमारी expert team cyber fraud & online cheating cases में experienced है। Call 📞 7597497063 for legal support."
    }
];

export default function OnlineFraudPage() {
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
          
          <h2>Online Fraud</h2>
          <p>
            Victim of online fraud or digital scams? We offer expert legal help for cyber fraud, financial scams, and online cheating cases in Jaipur. Call 7597497063 for legal support and justice.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Online fraud (ऑनलाइन धोखाधड़ी) आज के digital era में सबसे तेजी से बढ़ते हुए cyber crimes में से एक है। यदि कोई व्यक्ति आपकी banking details, UPI, social media accounts, या financial information का misuse करता है, तो यह serious cyber offence है।
          </p>
          <p>
            We provide professional legal support for digital scams, phishing attacks, online cheating, payment fraud, and e-commerce fraud in Jaipur.
          </p>

          <h2 className="mt-12">What is Online Fraud? (ऑनलाइन धोखाधड़ी क्या है?)</h2>
          <p>Online fraud में किसी की personal, financial या digital identity का use गलत तरीके से किया जाता है, जैसे:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Phishing या fake emails/links के जरिए bank या personal details चुराना</li>
            <li>Online shopping या e-commerce scams</li>
            <li>Fake loan or investment schemes</li>
            <li>Social media frauds and impersonation</li>
            <li>Payment or UPI related cheating</li>
          </ul>
          <p>इस तरह के cases आपकी financial security और reputation दोनों को नुकसान पहुंचा सकते हैं।</p>

          <h2 className="mt-12">Our Legal Expertise Includes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Filing FIR & Complaint with Cyber Cell Jaipur</li>
            <li>✅ Drafting Legal Notice against fraudsters</li>
            <li>✅ Court Representation under IT Act & IPC</li>
            <li>✅ Digital Evidence Collection & Forensic Support</li>
            <li>✅ Assistance in Recovering Lost Money & Account Restoration</li>
            <li>✅ Settlement or Mediation of Online Fraud Cases</li>
          </ul>
          <p>हमारी experienced legal team हर case को confidential, professional और evidence-based approach के साथ handle करती है।</p>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Best Online Fraud & Cybercrime Lawyers in Jaipur</li>
            <li>100+ Digital Scam Cases Successfully Handled</li>
            <li>Coordination with Rajasthan Cyber Police & Forensics</li>
            <li>Quick Action & Confidential Legal Support</li>
            <li>Transparent Legal Fees & 24×7 Client Assistance</li>
          </ul>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 7597497063
            </a>
          </Button>

          <h2 className="mt-12">Applicable Laws & Punishment (लागू कानून और सजा)</h2>
          <p>Online fraud cases are covered under:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>IT Act, 2000 – Sections 66, 66C, 66D (Cheating, identity theft & impersonation online)</li>
            <li>IPC Sections 420, 468, 471 (Cheating, forgery, financial fraud)</li>
          </ul>
          <p>Punishment may include imprisonment up to 3–7 years and heavy fines, depending on severity.</p>
          <p>👉 इसलिए online fraud को हल्के में ना लें — तुरंत legal action लें।</p>

          <h2 className="mt-12">Conclusion (निष्कर्ष)</h2>
          <p>
            Online fraud cases require expert cyber law guidance and quick legal action.
            We provide complete legal support to victims of digital scams, online cheating, and cybercrime.
          </p>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call 7597497063 for immediate legal help in Jaipur.
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
