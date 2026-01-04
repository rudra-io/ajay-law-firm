
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. Honey Trap case में कौन-कौन सी IPC धाराएँ लागू होती हैं?",
        answer: "मुख्य रूप से IPC Sections 384, 420, 500, 506 और IT Act 67 लागू होते हैं, depending on case facts."
    },
    {
        question: "Q2. क्या ऐसे केस में जमानत मिल सकती है?",
        answer: "हाँ, अधिकांश honey trap cases में anticipatory या regular bail मिल सकती है, court ke discretion par depend karta hai."
    },
    {
        question: "Q3. अगर मेरे खिलाफ झूठा honey trap case दर्ज हुआ है तो क्या करें?",
        answer: "आप High Court में CrPC 482 के तहत FIR quashing petition दायर कर सकते हैं। Legal defence ke लिए हमसे संपर्क करें।"
    },
    {
        question: "Q4. क्या ऐसे मामलों में media exposure से बचा जा सकता है?",
        answer: "हाँ, हम court se in-camera proceedings aur privacy protection orders की request करते हैं।"
    },
    {
        question: "Q5. क्या victim को compensation मिल सकता है?",
        answer: "अगर case prove ho jata hai, to victim को defamation aur mental harassment के लिए compensation मिल सकता है।"
    }
];

export default function HoneyTrapCasesPage() {
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
            <h1 className="border-b border-primary/20 pb-4">Honey Trap Cases</h1>
            <p>
                Honey Trap (हनी ट्रैप) मामलों में अक्सर झूठे आरोप और ब्लैकमेलिंग के केस सामने आते हैं। हमारी expert legal team Jaipur में ऐसे मामलों के लिए confidential advice, FIR assistance और legal defence प्रदान करती है।
            </p>
            <Button asChild size="lg">
                <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
                </a>
            </Button>

            <p className='mt-8'>
                आज के digital era में Honey Trap Cases यानी ब्लैकमेलिंग या फंसाने के मामले तेजी से बढ़ रहे हैं। अक्सर किसी व्यक्ति को emotional या physical relationship के ज़रिए trap करके उससे money, property, या reputation damage करने की कोशिश की जाती है।
            </p>
            <p>
                ऐसे मामलों में सही legal advice और immediate action बहुत जरूरी होता है, क्योंकि ये cases अक्सर cheating (Section 420 IPC), extortion (Section 384 IPC), blackmailing, defamation, और cyber offences से जुड़े होते हैं।
            </p>
            <p>
                हमारी criminal & cyber law expert team ऐसे मामलों को confidentiality और professionalism के साथ handle करती है — ताकि आपकी privacy, dignity और legal rights दोनों सुरक्षित रहें।
            </p>

            <h2 className="mt-12">What is a Honey Trap Case? (हनी ट्रैप केस क्या होता है?)</h2>
            <p>
                Honey Trap ka matlab होता है — जब कोई व्यक्ति, अक्सर सोशल मीडिया या dating apps के ज़रिए, किसी को फँसाकर उससे पैसा, फायदा या information लेता है।
            </p>
            <p>
                ऐसे मामलों में आमतौर पर दो तरह की स्थितियाँ होती हैं —
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Victim Trap:</strong> जब किसी व्यक्ति को झूठे आरोपों या intimate visuals के जरिए ब्लैकमेल किया जाता है।</li>
                <li><strong>False Allegation:</strong> जब किसी व्यक्ति पर गलत तरीके से sexual harassment या misconduct के झूठे आरोप लगाए जाते हैं।</li>
            </ul>
            <p>
                दोनों ही स्थितियों में सही कानूनी representation आपके case को बचाने और सच सामने लाने में मदद करता है।
            </p>

            <h2 className="mt-12">Applicable Legal Sections (लागू होने वाली धाराएँ)</h2>
            <p>Honey Trap cases कई IPC sections के तहत आते हैं, जैसे –</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>Section 384 IPC – Extortion (ब्लैकमेलिंग)</li>
                <li>Section 420 IPC – Cheating & Fraud (धोखाधड़ी)</li>
                <li>Section 500 IPC – Defamation (मानहानि)</li>
                <li>Section 506 IPC – Criminal Intimidation (धमकी देना)</li>
                <li>Section 67 IT Act – Publishing or transmitting obscene content electronically</li>
                <li>Section 376 IPC – In extreme cases, false rape allegations</li>
            </ul>

            <h2 className="mt-12">Common Scenarios in Honey Trap Cases</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Social Media Trap: Fake profiles banakar victims se personal chats aur photos collect karna.</li>
                <li>Extortion Threats: Video calls ya recorded visuals ke आधार पर पैसे की मांग करना.</li>
                <li>False Allegations: Relationship ke baad revenge ya pressure create karne ke लिए झूठे rape/harassment के आरोप लगाना.</li>
                <li>Cyber Blackmailing: Online photos, chats, या videos viral करने की धमकी देना.</li>
                <li>Hidden Camera Cases: Private visuals का misuse करके settlement demand करना.</li>
            </ul>

            <h2 className="mt-12">How We Help You</h2>
            <p>हमारी expert legal team in Jaipur हर प्रकार के honey trap और blackmail cases में आपका साथ देती है।</p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Legal Consultation & Case Study:</strong> हम पहले पूरे matter ko legally analyse करते हैं aur best defence strategy prepare करते हैं।</li>
                <li><strong>FIR & Complaint Assistance:</strong> अगर आप victim हैं, तो हम proper FIR draft aur evidence collection में help करते हैं।</li>
                <li><strong>False Allegation Defence:</strong> अगर आप पर झूठे honey trap के आरोप लगे हैं, तो हम Section 482 CrPC के तहत High Court में quash petition file करते हैं।</li>
                <li><strong>Bail & Court Representation:</strong> Arrest hone ki संभावना में हम anticipatory aur regular bail process handle करते हैं।</li>
                <li><strong>Cyber Investigation Support:</strong> हम cyber cell ke साथ मिलकर technical evidence collect karne me assist karte hain, jisse आपका case मजबूत बने।</li>
                <li><strong>Confidential Legal Support:</strong> ऐसे मामलों में privacy सबसे ज़रूरी होती है। हम हर case को पूरी गोपनीयता (confidentiality) के साथ handle करते हैं।</li>
            </ul>

            <h2 className="mt-12">Why Choose Us</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Expert Criminal & Cyber Crime Lawyers in Jaipur</li>
                <li>Specialization in Honey Trap & Extortion Defence</li>
                <li>100% Confidential Legal Services</li>
                <li>Strong drafting for FIR, bail & defence</li>
                <li>Immediate consultation available 24×7</li>
            </ul>
             <Button asChild size="lg" className="mt-4">
                <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                 Call Now: 7597497063
                </a>
            </Button>
            
            <h2 className="mt-12">Who Can Contact Us</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Victims of blackmail or extortion through honey trap</li>
                <li>Individuals facing false rape or harassment allegations</li>
                <li>People accused in fake honey trap complaints</li>
                <li>NRIs or professionals trapped in online honey scams</li>
            </ul>

             <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
                <h3 className="font-serif text-2xl font-bold text-foreground">Contact Us</h3>
                <p className="mt-2">अगर आप Honey Trap या Blackmail Case में फंसे हैं — तो देरी न करें। ऐसे मामलों में prompt legal action ही आपका सबसे बड़ा बचाव है। हमारी team आपकी privacy, dignity aur justice तीनों की रक्षा करती है।</p>
                <Button asChild size="lg" className="mt-4">
                    <a href="tel:7597497063">
                        <Phone className="mr-2 h-5 w-5" />
                        Expert Legal Advice | Bail Assistance | Confidential Case Handling
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
                Honey Trap Cases (हनी ट्रैप के मामले) सिर्फ emotional नहीं बल्कि legally भी बेहद complex होते हैं। एक गलत कदम आपकी reputation और career दोनों को नुकसान पहुँचा सकता है। इसलिए ऐसे मामलों में quick legal action और professional guidance बहुत जरूरी है।
            </p>
             <Button asChild size="lg" className="mt-4">
                <a href="tel:7597497063">
                    <Phone className="mr-2 h-5 w-5" />
                     Contact Us
                </a>
            </Button>
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
