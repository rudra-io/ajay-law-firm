
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q: Cyber harassment case register कैसे करें?",
        answer: "👉 आप Jaipur Cyber Cell या nearest police station में written complaint दे सकते हैं, साथ ही evidence (screenshots, chat, email) attach करें।"
    },
    {
        question: "Q: अगर कोई online मुझे insult या threaten कर रहा है तो क्या करना चाहिए?",
        answer: "👉 तुरंत FIR या online cyber complaint दर्ज करें और legal notice भेजें। हमारी टीम इसमें पूरी मदद करता है।"
    },
    {
        question: "Q: क्या cyber harassment में bail मिल सकती है?",
        answer: "👉 हां, यह offence की nature पर depend करता है। हमारी legal team bail process को जल्दी handle करती है।"
    },
    {
        question: "Q: क्या social media harassment भी cyber crime है?",
        answer: "👉 हां, social media पर किसी को insult, defame या threaten करना cyber crime के अंतर्गत आता है।"
    },
    {
        question: "Q: Jaipur में cyber harassment case के लिए best lawyer कौन है?",
        answer: "👉 हमारी टीम cyber law और IT Act मामलों में expert है। Call 📞 7597497063 for legal consultation."
    }
];

export default function CyberHarassmentPage() {
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
          
          <h2>Cyber Harassment</h2>
          <p>
            Facing online abuse or threats? We offer expert legal help for cyber harassment, stalking, and defamation in Jaipur. Protect your privacy and rights. Call 7597497063 for immediate support.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            We provide professional legal support for Cyber Harassment, Online Threats, Blackmailing, and Defamation Cases under the Information Technology (IT) Act, 2000 and the Indian Penal Code (IPC).
          </p>
          <p>
            आज के digital era में cyber harassment एक common लेकिन गंभीर अपराध है। अगर कोई व्यक्ति आपको online insult, threat, abusive messages, photos/videos misuse या किसी भी तरह से mental harassment करता है, तो आप कानूनी कार्रवाई कर सकते हैं।
          </p>

          <h2 className="mt-12">What is Cyber Harassment?</h2>
          <p>
            Cyber harassment किसी व्यक्ति को online platform जैसे Facebook, Instagram, WhatsApp, Telegram, या Email के ज़रिए परेशान करना, बदनाम करना, या धमकाना होता है।
          </p>

          <h2 className="mt-12">Our Expertise Includes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Filing Complaint with Cyber Cell Jaipur</li>
            <li>✅ Drafting Legal Notice against Offenders</li>
            <li>✅ FIR Registration & Police Coordination</li>
            <li>✅ Court Representation in IT & IPC Sections</li>
          </ul>

          <h2 className="mt-12">Frequently Asked Questions (FAQs)</h2>
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
