
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. क्या शादी के बाद Marriage Registration करवाना ज़रूरी है?",
        answer: "👉 हाँ, Legal Proof के लिए Marriage Registration जरूरी है।"
    },
    {
        question: "Q2. Marriage Certificate कितने दिन में मिल सकता है?",
        answer: "👉 अगर सारे documents सही हैं, तो same-day या next day मिल जाता है।"
    },
    {
        question: "Q3. क्या Inter-Religion Marriage भी register हो सकती है?",
        answer: "👉 जी हाँ, Special Marriage Act के तहत हो सकती है।"
    },
    {
        question: "Q4. क्या Arya Samaj Marriage के बाद Court Registration ज़रूरी है?",
        answer: "👉 हाँ, ताकि marriage legally valid हो सके।"
    },
    {
        question: "Q5. क्या Marriage Registration online हो सकता है?",
        answer: "👉 हाँ, आप online application शुरू कर सकते हैं, लेकिन final verification Court में होती है।"
    }
];

export default function MarriageRegistrationPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/court-marriage" className="hover:text-primary">Court Marriage</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Service Details</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <h1 className="border-b border-primary/20 pb-4">Service Overview</h1>
          
          <h2>Marriage Registration</h2>
          <p>
            अगर आपको Marriage Certificate या Legal Marriage Registration करवाना है, तो हम आपकी पूरी मदद करेंगे। हम Court Marriage, Arya Samaj Marriage और Legal Documentation – सब कुछ same-day में possible बनाते हैं।
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            अगर आपने शादी कर ली है या करने जा रहे हैं और उसे कानूनी मान्यता (Legal Validity) दिलवाना चाहते हैं, तो Marriage Registration आवश्यक है। हम आपकी मदद करते हैं ताकि आपकी शादी Government Records में दर्ज हो और आपको मिले एक वैध Marriage Certificate, जो भारत और विदेश दोनों जगह मान्य होता है।
          </p>

          <h2 className="mt-12">What is Marriage Registration?</h2>
          <p>
            Marriage Registration एक कानूनी प्रक्रिया है जिसमें शादी को Indian Marriage Act, 1955 या Special Marriage Act, 1954 के तहत Government Record में दर्ज किया जाता है। इससे आपको एक official Marriage Certificate मिलता है, जो आपकी शादी का Legal Proof होता है।
          </p>

          <h2 className="mt-12">Why is Marriage Registration Important?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ आपकी शादी को कानूनी मान्यता (Legal Recognition) मिलती है।</li>
            <li>✅ Passport, Visa, PR, और Embassy process में Marriage Certificate ज़रूरी होता है।</li>
            <li>✅ Divorce या Property matters में Legal Proof के रूप में उपयोगी।</li>
            <li>✅ Bank Account, Insurance, Nominee updates आदि के लिए आवश्यक।</li>
            <li>✅ शादी के बाद Government Benefits या Name Change के लिए ज़रूरी।</li>
          </ul>

          <h2 className="mt-12">Documents Required for Marriage Registration</h2>
          <p>For Bride and Groom:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aadhar Card / Passport (Identity Proof)</li>
            <li>Address Proof (Electricity Bill / Rent Agreement)</li>
            <li>Birth Certificate / Matric Certificate</li>
            <li>Passport Size Photos (3 each)</li>
            <li>Marriage Invitation Card or Proof of Marriage</li>
            <li>Two Witnesses with ID Proofs (Aadhar / Voter ID)</li>
            <li>Divorce Decree / Death Certificate (if applicable)</li>
          </ul>

          <h2 className="mt-12">Process of Marriage Registration in Jaipur</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Document Verification:</strong> सभी documents की जांच और validation की जाती है।</li>
            <li><strong>Affidavit Preparation:</strong> Bride और Groom का Marriage Affidavit तैयार किया जाता है।</li>
            <li><strong>Appointment at Registrar Office:</strong> Court/Marriage Officer के पास appointment बुक की जाती है।</li>
            <li><strong>Personal Appearance:</strong> Bride, Groom और Witnesses court में उपस्थित होकर sign करते हैं।</li>
            <li><strong>Marriage Certificate Issued:</strong> Marriage Officer द्वारा certificate issue किया जाता है — same-day या next working day में।</li>
          </ol>

          <h2 className="mt-12">Types of Marriage Registration We Handle</h2>
          <p>We handle all types of marriage registration services —</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Hindu Marriage Act, 1955 – For same religion Hindu couples</li>
            <li>Special Marriage Act, 1954 – For inter-caste or inter-religion marriages</li>
            <li>Arya Samaj Marriage + Court Registration</li>
            <li>NRI Marriage Registration</li>
            <li>Online Application & Appointment Support</li>
          </ul>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Same-Day Marriage Certificate Assistance</li>
            <li>✅ Experienced Advocates in Jaipur High Court</li>
            <li>✅ End-to-End Legal Paperwork Support</li>
            <li>✅ Valid for Embassy, Visa & Government Use</li>
            <li>✅ Confidential, Fast & Affordable Legal Services</li>
          </ul>
          
          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Need Marriage Registration in Jaipur?</h3>
            <p className="mt-2">अगर आपको Marriage Certificate या Court Registration करवाना है, तो हम आपकी पूरी मदद करेंगे। हम Court Marriage, Arya Samaj Marriage और Legal Documentation – सब कुछ Same-Day में possible बनाते हैं।</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call/WhatsApp: 7597497063
              </a>
            </Button>
            <p className="mt-2 text-sm">🌐 www.LegalSolutionsJaipur.com</p>
            <p className="mt-1 text-sm">📍 Office: Jaipur, Rajasthan</p>
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
