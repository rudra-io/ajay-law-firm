
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. क्या NRI व्यक्ति भारत में Court Marriage कर सकता है?",
        answer: "👉 हाँ, NRI व्यक्ति भारत में Court Marriage कर सकता है, बशर्ते सभी documents valid हों।"
    },
    {
        question: "Q2. क्या दोनों parties को भारत आना ज़रूरी है?",
        answer: "👉 हाँ, marriage registration के समय दोनों parties का उपस्थित होना ज़रूरी है।"
    },
    {
        question: "Q3. क्या NRI marriage certificate विदेश में valid होता है?",
        answer: "👉 जी हाँ, भारत सरकार द्वारा जारी marriage certificate विदेश में embassy और visa process के लिए valid होता है।"
    },
    {
        question: "Q4. क्या Arya Samaj Marriage NRI के लिए मान्य है?",
        answer: "👉 हाँ, Arya Samaj Marriage के बाद आप Court Registration करवा सकते हैं जिससे शादी पूरी तरह legal हो जाती है।"
    },
    {
        question: "Q5. कितने दिन में marriage certificate मिल जाता है?",
        answer: "👉 अगर सारे documents सही हैं, तो same-day marriage certificate possible है।"
    }
];

export default function NriMarriagePage() {
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
          
          <h2>NRI Marriage</h2>
          <p>
            अगर आप NRI हैं और भारत में जल्दी शादी करना चाहते हैं, तो हम आपकी मदद करेंगे। हम Court Marriage, Arya Samaj Marriage और Legal Certificate – सब कुछ same-day में करवाते हैं।
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            अगर आप NRI (Non-Resident Indian) हैं और भारत में शादी करना चाहते हैं, तो हम आपकी पूरी कानूनी मदद करते हैं। हमारी NRI Court Marriage Legal Service in Jaipur आपको देता है — Same-Day Court Marriage, Legal Certificate, और Arya Samaj Marriage Registration — सब कुछ एक ही दिन में possible है!
          </p>

          <h2 className="mt-12">Why Choose Us for NRI Marriage?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Same-Day Marriage Registration – Urgent marriage process available.</li>
            <li>✅ Complete Legal Support – Documents, affidavit, and verification assistance.</li>
            <li>✅ Special Marriage Act Registration – Inter-religion NRI marriages legally valid.</li>
            <li>✅ Experienced Lawyers in Jaipur High Court – Expert legal guidance for NRI couples.</li>
            <li>✅ Valid Marriage Certificate for Embassy & Visa – Acceptable worldwide.</li>
          </ul>

          <h2 className="mt-12">Documents Required for NRI Court Marriage</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Valid Passport & Visa Copy</li>
            <li>Address Proof (India/Abroad)</li>
            <li>Birth Certificate</li>
            <li>2 Passport Size Photos (Each)</li>
            <li>Single Status Certificate / NOC from Embassy or Country of Residence</li>
            <li>If divorced or widowed – Divorce Decree / Death Certificate</li>
          </ul>
          <p>हमारी टीम आपकी सभी documentation formalities पूरी करवाने में पूरी सहायता करती है।</p>

          <h2 className="mt-12">NRI Court Marriage Process in Jaipur</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>Documents Verification:</strong> Advocate team सभी documents verify करती है।</li>
            <li><strong>Affidavit Preparation:</strong> Marriage affidavit तैयार किया जाता है।</li>
            <li><strong>Notice to Marriage Officer:</strong> Special Marriage Act के तहत notice दिया जाता है।</li>
            <li><strong>Court Appearance:</strong> दोनों पक्ष court में उपस्थित होते हैं।</li>
            <li><strong>Marriage Registration & Certificate:</strong> Marriage Certificate same-day issue किया जाता है।</li>
          </ol>

          <h2 className="mt-12">Benefits of NRI Court Marriage</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>भारत और विदेश दोनों में वैध marriage certificate</li>
            <li>Visa, PR और Embassy Process में useful</li>
            <li>Legal security for both partners</li>
            <li>Fast, simple & fully legal process</li>
          </ul>

          <h2 className="mt-12">Urgent NRI Marriage or Legal Certificate?</h2>
          <p>
            अगर आपको जल्दी शादी करनी है या foreign partner के साथ legal marriage registration करवाना है, तो हम आपकी पूरी मदद करेंगे। Court Marriage, Arya Samaj Marriage और Legal Certificate – सब कुछ same-day में possible है।
          </p>

          <h2 className="mt-12">Frequently Asked Questions (FAQ) – NRI Court Marriage Jaipur</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Contact Us</h3>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call/WhatsApp: 7597497063
              </a>
            </Button>
            <p className="mt-2 text-sm">🌐 www.LegalSolutionsJaipur.com</p>
            <p className="mt-1 text-sm">📍 Location: Near High Court, Jaipur, Rajasthan</p>
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
