
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q: Social media abuse case कैसे register करें?",
        answer: "👉 Jaipur Cyber Cell या nearest police station में complaint देकर FIR दर्ज कर सकते हैं। Screenshots और messages proof के रूप में attach करें।"
    },
    {
        question: "Q: अगर कोई मुझे online insult या threaten कर रहा है तो क्या करें?",
        answer: "👉 तुरंत legal notice और FIR file करें। हमारी टीम इसमें पूरी मदद करता है।"
    },
    {
        question: "Q: क्या cyberbullying भी social media abuse में आती है?",
        answer: "👉 हां, repeated harassment या threats online cyberbullying के अंतर्गत आते हैं।"
    },
    {
        question: "Q: क्या social media abuse case में compensation मिल सकता है?",
        answer: "👉 हां, court में mental harassment और reputation loss के लिए compensation claim किया जा सकता है।"
    },
    {
        question: "Q: Jaipur में social media abuse case के लिए best lawyer कौन है?",
        answer: "👉 हमारी टीम social media और cyber crime मामलों में expert है। Call 📞 7597497063 for consultation."
    }
];

export default function SocialMediaAbusePage() {
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
          
          <h2>Social Media Abuse</h2>
          <p>
            Victim of social media abuse or cyber harassment? We provide expert legal support for online defamation, bullying, and threats on platforms like Facebook, Instagram, and WhatsApp. Call 7597497063 today.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Social Media Abuse (सोशल मीडिया उत्पीड़न) आज के डिजिटल युग में गंभीर समस्या बन गई है। अगर कोई व्यक्ति आपको online bully, insult, defame या threaten करता है, तो यह cyber crime है और कानूनी कार्रवाई के योग्य है।
          </p>
          <p>
            Our expert lawyers provide legal support for victims of cyber harassment, online bullying, social media defamation, and digital threats in Jaipur.
          </p>

          <h2 className="mt-12">What is Social Media Abuse? (सोशल मीडिया उत्पीड़न क्या है?)</h2>
          <p>Social Media Abuse में किसी व्यक्ति को Facebook, Instagram, WhatsApp, Twitter या अन्य platforms पर परेशान करना या बदनाम करना शामिल है।</p>
          <p>Common examples include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Threatening messages or comments</li>
            <li>Sharing private photos/videos without consent</li>
            <li>Cyberbullying or fake profiles</li>
            <li>Online defamation or character assassination</li>
            <li>Targeted harassment via social networks</li>
          </ul>

          <h2 className="mt-12">Our Legal Services Include</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Filing FIR in Cyber Cell Jaipur</li>
            <li>✅ Drafting Legal Notice against Abuser</li>
            <li>✅ Court Representation under IT Act & IPC</li>
            <li>✅ Digital Evidence Collection & Preservation</li>
            <li>✅ Online Content Removal Assistance</li>
            <li>✅ Advice on Account Protection & Safety Measures</li>
          </ul>
          <p>हमारी experienced legal team हर social media abuse case को confidentiality और professionalism के साथ handle करती है ताकि victims को justice और सुरक्षा दोनों मिल सके।</p>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Best Social Media Abuse Lawyers in Jaipur</li>
            <li>100+ Cyber Crime Cases Successfully Handled</li>
            <li>Coordination with Cyber Police & Digital Forensic Experts</li>
            <li>Transparent Legal Fees & Quick Case Updates</li>
            <li>24×7 Confidential Legal Assistance</li>
          </ul>
           <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 7597497063
            </a>
          </Button>

          <h2 className="mt-12">Applicable Laws & Punishment (लागू कानून और सजा)</h2>
          <p>Social Media Abuse cases are covered under:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>IT Act, 2000 – Section 66A, 66C, 67 – Obscene content, identity misuse</li>
            <li>IPC Section 354D – Cyber stalking</li>
            <li>IPC Section 507 – Criminal intimidation</li>
            <li>IPC Section 499 – Online defamation</li>
          </ul>
          <p>Punishment may include imprisonment up to 3 years and heavy fines, depending on the severity of the offence.</p>

          <h2 className="mt-12">Conclusion (निष्कर्ष)</h2>
          <p>
            Social Media Abuse cases require timely legal action and expert handling of digital evidence.
            We ensure protection for victims of online harassment, bullying, or defamation on any social platform.
          </p>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call 7597497063 for professional legal support in Jaipur.
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
