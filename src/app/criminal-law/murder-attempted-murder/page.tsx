
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. Murder और Attempt to Murder में क्या फर्क है?",
        answer: "👉 Murder (धारा 302) में व्यक्ति की मृत्यु हो जाती है, जबकि Attempt to Murder (धारा 307) में हत्या का प्रयास किया जाता है लेकिन मृत्यु नहीं होती।"
    },
    {
        question: "Q2. क्या Murder केस में जमानत मिल सकती है?",
        answer: "👉 Murder एक non-bailable offence है, लेकिन case facts के आधार पर Sessions Court या High Court से जमानत संभव है।"
    },
    {
        question: "Q3. अगर किसी पर झूठा Murder का आरोप लगाया गया है तो क्या करें?",
        answer: "👉 ऐसे में तुरंत FIR quashing petition या anticipatory bail के लिए अपने वकील से संपर्क करें। हमारी टीम इसमें आपकी मदद करती है।"
    },
    {
        question: "Q4. क्या Attempt to Murder के केस में compromise हो सकता है?",
        answer: "👉 Section 307 IPC generally non-compoundable है, यानी compromise से केस खत्म नहीं होता, लेकिन कोर्ट के विवेकाधिकार से कुछ मामलों में राहत मिल सकती है।"
    },
    {
        question: "Q5. हम कैसे मदद करते हैं?",
        answer: "👉 हमारी टीम evidence, legal procedure, aur case law के आधार पर आपका बचाव तैयार करती है — और कोर्ट में पूरे professionalism के साथ आपका प्रतिनिधित्व करती है।"
    }
];

export default function MurderAttemptedMurderPage() {
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
          <h1 className="border-b border-primary/20 pb-4">Service Overview</h1>
          
          <h2>Murder & Attempted Murder</h2>
          <p>
            Murder & Attempt to Murder (धारा 302 और 307 IPC) मामलों में हमारी expert legal team आपके लिए मजबूत बचाव (defense) तैयार करती है — चाहे आप आरोपी हों या पीड़ित पक्ष, हम न्याय तक साथ देते हैं।
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            भारत के दंड संहिता (Indian Penal Code) की धारा 302 (Murder) और धारा 307 (Attempt to Murder) बेहद गंभीर अपराधों से संबंधित हैं। ऐसे मामलों में गिरफ्तारी, जांच, और कोर्ट ट्रायल का हर कदम बेहद संवेदनशील होता है। एक छोटी सी गलती भी पूरी ज़िंदगी पर असर डाल सकती है।
          </p>
          <p>
            हमारी criminal defense team इन गंभीर मामलों में कानूनी रूप से सटीक रणनीति बनाती है ताकि आपके अधिकार (legal rights) की रक्षा हो और न्याय (justice) सुनिश्चित हो सके।
          </p>

          <h2 className="mt-12">Understanding Section 302 & 307 IPC (धारा 302 और 307 क्या हैं?)</h2>
          <h3 className="text-xl mt-4 font-semibold">Section 302 IPC – Murder (हत्या)</h3>
          <p>
            अगर कोई व्यक्ति जानबूझकर (intentionally) या पूर्व नियोजित (premeditated) तरीके से किसी की हत्या करता है, तो यह धारा 302 के अंतर्गत आता है। इस अपराध के लिए सजा मृत्युदंड (death penalty) या आजन्म कारावास (life imprisonment) तक हो सकती है।
          </p>
          <h3 className="text-xl mt-4 font-semibold">Section 307 IPC – Attempt to Murder (हत्या का प्रयास)</h3>
          <p>
            अगर किसी ने हत्या करने की नीयत (intention) से हमला किया, लेकिन व्यक्ति की मृत्यु नहीं हुई, तो यह धारा 307 IPC के अंतर्गत आता है। इसमें सजा 10 साल तक की कैद या कुछ मामलों में life imprisonment भी हो सकती है।
          </p>

          <h2 className="mt-12">Our Legal Services in Murder & Attempted Murder Cases:</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>Legal Consultation & Case Evaluation (कानूनी सलाह और केस विश्लेषण)</strong>
              <p>हम केस के सभी पहलुओं – FIR, evidence, medical reports, witness statements – को विस्तार से समझते हैं और एक मजबूत बचाव रणनीति (defense strategy) बनाते हैं।</p>
            </li>
            <li>
              <strong>Bail & Anticipatory Bail (जमानत और पूर्व-गिरफ्तारी जमानत)</strong>
              <p>ऐसे गंभीर अपराधों में जमानत पाना कठिन होता है, लेकिन हमारी अनुभवी टीम Sessions Court और High Court में प्रभावी तरीके से bail application प्रस्तुत करती है।</p>
            </li>
            <li>
              <strong>FIR & Investigation Handling (एफआईआर और जांच प्रक्रिया में सहायता)</strong>
              <p>हम पुलिस जांच के दौरान आपके अधिकारों की रक्षा करते हैं — ताकि बिना पर्याप्त सबूत के कोई अनुचित कार्रवाई न हो।</p>
            </li>
            <li>
              <strong>Court Representation (कोर्ट में प्रतिनिधित्व)</strong>
              <p>हमारे criminal lawyers evidence presentation, cross-examination, aur legal argument के ज़रिए कोर्ट में आपका पक्ष मज़बूती से रखते हैं।</p>
            </li>
            <li>
              <strong>False Case Defence (झूठे केस में बचाव)</strong>
              <p>कई बार व्यक्तिगत दुश्मनी या झूठे आरोपों के कारण निर्दोष व्यक्ति भी फंस जाते हैं। ऐसे मामलों में हम FIR quash petition और false implication defence की तैयारी करते हैं।</p>
            </li>
          </ol>

          <h2 className="mt-12">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Experienced Criminal Lawyers (अनुभवी क्रिमिनल वकील)</li>
            <li>Strong Representation in Jaipur Sessions & High Court</li>
            <li>Protection from Wrongful Arrest & False Allegations</li>
            <li>Thorough Case Documentation & Legal Drafting</li>
            <li>24×7 Legal Assistance in Emergency Arrests</li>
            <li>Transparent Process & Regular Case Updates</li>
          </ul>
          <p>हम हर केस को केवल कानून के नजरिए से नहीं, बल्कि मानवीय दृष्टिकोण से भी संभालते हैं ताकि किसी निर्दोष को सजा न मिले।</p>
          
          <h2 className="mt-12">Legal Process Overview (कानूनी प्रक्रिया कैसे होती है):</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>FIR Registration (एफआईआर दर्ज होना)</li>
            <li>Investigation by Police (पुलिस जांच)</li>
            <li>Charge Sheet Filing (आरोप पत्र दाखिल होना)</li>
            <li>Court Trial (मुकदमे की सुनवाई)</li>
            <li>Judgment & Sentencing (फैसला और सजा)</li>
          </ul>
          <p>हर स्टेज पर हमारे वकील आपको मार्गदर्शन देते हैं और आपके अधिकारों की रक्षा करते हैं।</p>

          <h2 className="mt-12">Defense Strategy in Murder & Attempt Cases</h2>
          <p>हमारी टीम हर केस में एक tailored defence तैयार करती है:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lack of intention or premeditation</li>
            <li>Self-defence claims (आत्मरक्षा का अधिकार)</li>
            <li>Absence of direct evidence</li>
            <li>Contradictions in witness statements</li>
            <li>Medical & forensic evidence analysis</li>
          </ul>
          <p>इन सबके आधार पर हम आपके पक्ष को सबसे मजबूत तरीके से कोर्ट में पेश करते हैं।</p>

          <h2 className="mt-12">Need Expert Legal Help in Murder or Attempt to Murder Case?</h2>
          <p>
            अगर आप या आपका कोई परिचित 302 या 307 IPC के तहत फंसा है, तो तुरंत अनुभवी वकील की सलाह लेना जरूरी है। हम आपको arrest से लेकर final trial तक पूरी कानूनी सहायता प्रदान करते हैं।
          </p>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
            <h3 className="font-bold text-foreground">Contact Us</h3>
            <p>Trusted Legal Defense for Murder & Attempt to Murder Cases in Jaipur</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7597497063
              </a>
            </Button>
          </div>

          <h2 className="mt-12">Frequently Asked Questions (FAQs)</h2>
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
            Murder या Attempt to Murder जैसे गंभीर मामलों में सिर्फ अनुभव ही नहीं, बल्कि रणनीति और सटीक कानून की समझ सबसे बड़ा हथियार होती है। हम आपके अधिकारों की रक्षा और न्याय सुनिश्चित करने के लिए हर कदम पर साथ खड़े हैं।
          </p>
          <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 7597497063
              </a>
          </Button>
          <p className="mt-2 text-sm">Expert Defense for Section 302 & 307 IPC Cases</p>
          
          <div className="mt-8 p-4 bg-card rounded-lg">
            <p className="font-bold">Contact</p>
            <p>Address: 96 Agra Road, Prem Nagar Jaipur, Rajasthan 302031</p>
            <p>Phone: <a href="tel:7597497063" className="text-primary hover:underline">7597497063</a></p>
            <p>Email: <a href="mailto:Ajaykumarsharma32727@gmail.com" className="text-primary hover:underline">Ajaykumarsharma32727@gmail.com</a></p>
          </div>
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

    