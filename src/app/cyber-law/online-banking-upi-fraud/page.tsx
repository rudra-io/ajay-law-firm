
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q: Online banking fraud case कैसे register करें?",
        answer: "👉 आप Jaipur Cyber Cell या nearest police station में complaint देकर FIR दर्ज करवा सकते हैं, साथ में bank transaction details और evidence attach करें।"
    },
    {
        question: "Q: अगर UPI या net banking से unauthorized transaction हो जाए तो क्या करना चाहिए?",
        answer: "👉 तुरंत bank और Jaipur Cyber Cell को inform करें, और हमारी टीम की मदद से legal notice और FIR दर्ज कराएं।"
    },
    {
        question: "Q: क्या phishing और OTP चोरी भी cyber crime है?",
        answer: "👉 हां, phishing, OTP theft और fake payment apps से financial loss cyber crime under IT Act आता है।"
    },
    {
        question: "Q: क्या hacked account का पैसा recover किया जा सकता है?",
        answer: "👉 हां, case investigation और legal notice के जरिए stolen fund recovery में मदद की जा सकती है।"
    },
    {
        question: "Q: Jaipur में online banking / UPI fraud case के लिए best lawyer कौन है?",
        answer: "👉 हमारी टीम cyber banking और IT Act मामलों में expert है। Call 📞 7597497063 for consultation."
    }
];

export default function OnlineBankingUpiFraudPage() {
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
          
          <h2>Online Banking / UPI Fraud</h2>
          <p>
            Victim of online banking or UPI fraud? We provide expert legal support for unauthorized transactions, phishing, and cyber banking scams. Call 7597497063 for immediate protection and legal action.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Online banking और UPI fraud आज के digital era में सबसे बढ़ती हुई cyber समस्याओं में से एक है। जब कोई व्यक्ति आपकी bank account, UPI ID या debit/credit card का unauthorized use करता है या आपको phishing, OTP theft, या online financial scam का सामना करना पड़ता है, तो यह serious cyber crime माना जाता है।
          </p>
          <p>
            Our expert cyber lawyers help victims of online banking fraud, unauthorized UPI transactions, phishing scams, and digital financial impersonation.
          </p>

          <h2 className="mt-12">What is Online Banking / UPI Fraud?</h2>
          <p>
            Online Banking & UPI Fraud का मतलब है किसी के बैंक account या UPI ID का illegal इस्तेमाल financial benefit के लिए करना। Common types include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Unauthorized UPI/Net Banking transactions</li>
            <li>OTP, PIN, or login credentials theft</li>
            <li>Fake payment apps or phishing scams</li>
            <li>Impersonation for money transfer</li>
            <li>Account takeover for online purchases</li>
          </ul>
          <p>ऐसे cyber fraud से आपकी financial security और privacy खतरे में पड़ सकती है।</p>

          <h2 className="mt-12">Our Legal Expertise Includes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Filing Complaint in Cyber Cell Jaipur</li>
            <li>✅ Drafting Legal Notice against Fraudsters</li>
            <li>✅ FIR Registration & Police Follow-up</li>
            <li>✅ Court Representation under IT Act & IPC</li>
            <li>✅ Digital Evidence Collection & Forensic Support</li>
            <li>✅ Recovery Assistance for Stolen Funds</li>
          </ul>
          <p>हमारी legal team हर case को confidentiality और evidence-based strategy के साथ handle करती है ताकि आपको जल्द से जल्द justice और compensation मिल सके।</p>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Best Online Banking & UPI Fraud Lawyers in Jaipur</li>
            <li>100+ Successful Cyber Banking Cases Handled</li>
            <li>Coordination with Cyber Police Rajasthan & Banks</li>
            <li>Expert in Digital Forensics & Transaction Analysis</li>
            <li>Transparent Legal Fees & Quick Updates</li>
            <li>24×7 Confidential Legal Support</li>
          </ul>
           <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 7597497063
            </a>
          </Button>

          <h2 className="mt-12">Applicable Laws & Punishment</h2>
          <p>Online banking and UPI fraud cases are covered under:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>IT Act, 2000 – Sections 66C, 66D (Identity theft & cheating via computer)</li>
            <li>IPC Sections 419, 420, 406 – Cheating, fraud, and criminal breach of trust</li>
            <li>Banking Regulation Act & RBI Guidelines for banking fraud</li>
          </ul>
          <p>Punishment may include imprisonment up to 3–5 years and heavy fines, depending on the severity of the offence.</p>

          <h2 className="mt-12">Conclusion</h2>
          <p>
            Online Banking / UPI Fraud cases require expert legal intervention and quick action. We provide complete legal support against all kinds of cyber financial fraud.
          </p>
          <p>
            चाहे आप victim हों या false allegation में फंसे हों, हमारी expert legal team हर step पर आपके साथ है।
          </p>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call 7597497063 for immediate cyber banking legal assistance in Jaipur.
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
