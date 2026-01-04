
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. क्या पुलिस हर केस में FIR दर्ज करती है?",
        answer: "नहीं, केवल cognizable offences (गंभीर अपराध जैसे murder, theft, rape, etc.) में FIR दर्ज की जाती है।"
    },
    {
        question: "Q2. अगर पुलिस FIR दर्ज नहीं करे तो क्या करें?",
        answer: "आप Superintendent of Police (SP) या Judicial Magistrate के पास CrPC 156(3) के तहत शिकायत कर सकते हैं।"
    },
    {
        question: "Q3. False FIR को कैसे रद्द करवाया जा सकता है?",
        answer: "False FIR को High Court में CrPC 482 के तहत quash petition दाखिल करके रद्द करवाया जा सकता है।"
    },
    {
        question: "Q4. क्या FIR दर्ज करवाने के लिए वकील जरूरी है?",
        answer: "जरूरी नहीं, पर सही legal drafting aur representation से आपका case मजबूत बनता है।"
    },
    {
        question: "Q5. क्या Zero FIR किसी भी थाने में दर्ज हो सकती है?",
        answer: "हाँ, Zero FIR किसी भी police station में दर्ज की जा सकती है और बाद में jurisdiction वाले थाने को भेज दी जाती है।"
    }
];

export default function FirRegistrationPage() {
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
          <h1 className="border-b border-primary/20 pb-4">FIR Registration</h1>
          <p>
            FIR (First Information Report) किसी भी criminal case की पहली और सबसे महत्वपूर्ण legal step होती है। यह वह document है जो पुलिस किसी cognizable offence (गंभीर अपराध) के बारे में जानकारी मिलने पर दर्ज करती है।
          </p>
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            We help victims and accused both in FIR filing, cancellation, and legal defence — ताकि आपका मामला कानूनी रूप से मजबूत बने।
          </p>

          <h2 className="mt-12">What is an FIR (एफ़आईआर क्या होती है?)</h2>
          <p>
            FIR का मतलब होता है First Information Report, जो पुलिस किसी अपराध की जानकारी मिलने के बाद तैयार करती है। यह CrPC की Section 154 के तहत दर्ज की जाती है। इसमें शामिल होता है —
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>अपराध का विवरण (details of offence)</li>
            <li>घटना का समय और स्थान</li>
            <li>आरोपी और पीड़ित का नाम</li>
            <li>गवाहों के नाम</li>
            <li>और घटना का संक्षिप्त विवरण</li>
          </ul>

          <h2 className="mt-12">Types of FIR in India</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Regular FIR (सामान्य एफआईआर)</strong> – जब अपराध गंभीर (Cognizable offence) हो, जैसे murder, theft, rape आदि।</li>
            <li><strong>Zero FIR</strong> – किसी भी jurisdiction की पुलिस station में दर्ज की जा सकती है, बाद में सही jurisdiction को transfer की जाती है।</li>
            <li><strong>Cross FIR</strong> – जब एक ही घटना में दोनों पक्ष एक-दूसरे पर आरोप लगाते हैं।</li>
            <li><strong>False FIR</strong> – जब गलत जानकारी या personal vendetta के लिए झूठी FIR दर्ज की जाती है।</li>
          </ul>

          <h2 className="mt-12">Legal Provisions for FIR (कानूनी प्रावधान)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>CrPC Section 154:</strong> Police officer को duty होती है कि वह हर cognizable offence की सूचना पर FIR दर्ज करे।</li>
            <li><strong>CrPC Section 156(3):</strong> अगर पुलिस FIR दर्ज नहीं करती, तो magistrate के पास आवेदन किया जा सकता है।</li>
            <li><strong>CrPC Section 482:</strong> False FIR को quash (रद्द) कराने के लिए High Court में याचिका दायर की जा सकती है।</li>
          </ul>

          <h2 className="mt-12">How We Help You</h2>
          <p>हमारी expert legal team Jaipur में हर तरह की FIR-related situations में मदद करती है —</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>FIR Filing Assistance:</strong> अगर पुलिस FIR दर्ज नहीं कर रही है, तो हम proper draft और CrPC 156(3) के तहत magistrate के सामने आवेदन दाखिल करते हैं।</li>
            <li><strong>False FIR Defence:</strong> अगर किसी ने आपके खिलाफ झूठी FIR दर्ज की है, तो हम High Court में quashing petition file करके राहत दिलाते हैं।</li>
            <li><strong>Legal Drafting & Complaint Preparation:</strong> हम legally accurate और case-based complaint draft करते हैं जिससे FIR legally strong बने।</li>
            <li><strong>Police Inquiry & Follow-up:</strong> Investigation process में representation और guidance ताकि police inquiry fair रहे।</li>
            <li><strong>Bail & Legal Defence:</strong> FIR के बाद arrest होने की संभावना हो तो हम anticipatory bail aur regular bail में मदद करते हैं।</li>
          </ul>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Expert criminal lawyers for FIR & police matters</li>
            <li>Quick and transparent legal process</li>
            <li>Strong drafting & documentation support</li>
            <li>24×7 legal consultation for urgent FIR matters</li>
          </ul>
           <Button asChild size="lg" className="mt-4">
                <a href="tel:7597497063">
                    <Phone className="mr-2 h-5 w-5" />
                     Contact Now: 7597497063
                </a>
            </Button>
            
          <h2 className="mt-12">Who Should Contact Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Victims wanting to file FIR for any offence</li>
            <li>People wrongly accused in a false FIR</li>
            <li>Individuals needing anticipatory bail after FIR</li>
            <li>Anyone seeking guidance on police investigation</li>
          </ul>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Contact Us</h3>
            <p className="mt-2 text-muted-foreground">अगर आपकी FIR दर्ज नहीं हो रही है, या झूठी FIR के कारण आप परेशान हैं — तो आज ही हमसे संपर्क करें। हमारी legal team आपको हर स्टेप पर guide करेगी।</p>
            <p className="mt-4 font-bold text-lg">Expert FIR Registration | Legal Drafting | False FIR Quashing</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7597497063
              </a>
            </Button>
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

          <h2 className="mt-12">Conclusion</h2>
          <p>
            FIR criminal justice system की सबसे अहम शुरुआत होती है। चाहे आप victim हों या falsely accused — हम आपकी मदद करते हैं हर कानूनी स्टेज पर, ताकि आपका हक सुरक्षित रहे और न्याय समय पर मिले।
          </p>

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
