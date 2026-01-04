
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. अगर पुलिस पूछताछ के लिए बुलाए तो क्या वकील ले जाना ज़रूरी है?",
        answer: "👉 हाँ, सलाह दी जाती है कि आप अपने वकील को साथ रखें या कम से कम पहले consult कर लें ताकि आप कोई गलत बयान न दें।"
    },
    {
        question: "Q2. क्या पुलिस बिना warrant के arrest कर सकती है?",
        answer: "👉 हाँ, कुछ मामलों में (जैसे serious offences या cognizable offences) पुलिस बिना warrant के भी गिरफ्तार कर सकती है। लेकिन हर स्थिति में आपको अपने अधिकार जानने का हक़ है।"
    },
    {
        question: "Q3. FIR रद्द (quash) कैसे करवाई जा सकती है?",
        answer: "👉 अगर FIR झूठी है या बिना सबूत के दर्ज की गई है, तो आपके वकील High Court में quashing petition दायर कर सकते हैं।"
    },
    {
        question: "Q4. क्या मैं anticipatory bail पहले से ले सकता हूँ?",
        answer: "👉 जी हाँ, अगर आपको arrest का डर है, तो आप पहले से anticipatory bail लेकर गिरफ्तारी से बच सकते हैं।"
    },
    {
        question: "Q5. हम कैसे मदद करते हैं?",
        answer: "👉 हमारी टीम आपको arrest से protection, bail, और investigation में guidance देती है ताकि आपकी legal safety सुनिश्चित रहे।"
    }
];

export default function ArrestInvestigationPage() {
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
            <h1 className="border-b border-primary/20 pb-4">Arrest & Investigation</h1>
            <p>
                Arrest & Investigation (गिरफ्तारी और जांच) से जुड़े मामलों में हमारी legal team आपको हर कदम पर मार्गदर्शन देती है — चाहे वह पुलिस पूछताछ हो, गिरफ्तारी से बचाव हो या कोर्ट में पेशी, हम आपके साथ हैं।
            </p>
            <Button asChild size="lg">
                <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
                </a>
            </Button>

            <p className="mt-8">
                कानून के अंतर्गत पुलिस को कई बार किसी व्यक्ति को पूछताछ या गिरफ्तारी के लिए बुलाने का अधिकार होता है। लेकिन अक्सर लोग इस प्रक्रिया से डर जाते हैं या अपने अधिकारों को नहीं जानते। हमारी टीम ऐसे मामलों में कानूनी सुरक्षा (legal protection) और सटीक सलाह (accurate guidance) प्रदान करती है ताकि आप किसी भी स्थिति में अपने अधिकार सुरक्षित रख सकें।
            </p>

            <h2 className="mt-12">What is Arrest & Investigation? (गिरफ्तारी और जांच क्या होती है?)</h2>
            <p>
                Investigation (जांच) का मतलब है — पुलिस या जांच एजेंसी द्वारा किसी अपराध से संबंधित सबूत इकट्ठा करना, गवाहों से पूछताछ करना, और आरोपी की भूमिका का पता लगाना। वहीं Arrest (गिरफ्तारी) का अर्थ है — जब पुलिस को लगता है कि आरोपी के भागने या सबूत नष्ट करने की संभावना है, तब उसे हिरासत में लिया जा सकता है।
            </p>
            <p>
                हमारी टीम का उद्देश्य है कि पूरी प्रक्रिया में आपको कानूनी सुरक्षा और न्याय मिले।
            </p>

            <h2 className="mt-12">Our Legal Services Include: (हमारी कानूनी सेवाएँ)</h2>
            <ol className="list-decimal pl-5 space-y-4">
                <li>
                    <strong>Anticipatory Bail (पूर्व-गिरफ्तारी जमानत)</strong>
                    <p>अगर आपको आशंका है कि आपके खिलाफ पुलिस केस दर्ज कर सकती है, तो हम anticipatory bail application तैयार करते हैं और court से गिरफ्तारी से राहत दिलवाते हैं।</p>
                </li>
                <li>
                    <strong>Regular Bail (नियमित जमानत)</strong>
                    <p>गिरफ्तारी के बाद जमानत दिलवाने में हमारी टीम विशेषज्ञ है। हम आपके behalf में Sessions Court या High Court में bail petition दाखिल करते हैं।</p>
                </li>
                <li>
                    <strong>Police Investigation Assistance (पुलिस जांच में सहायता)</strong>
                    <p>पुलिस पूछताछ के दौरान क्या कहना है, क्या नहीं कहना — यह जानना बहुत ज़रूरी होता है। हमारे वकील आपको बताते हैं कि आपके अधिकार क्या हैं और कैसे cooperate करना है ताकि कोई गलत बयानबाजी न हो।</p>
                </li>
                <li>
                    <strong>FIR Registration & Quashing (एफआईआर दर्ज या रद्द करवाना)</strong>
                    <p>अगर FIR गलत तरीके से दर्ज हुई है या आपके खिलाफ झूठे आरोप हैं, तो हम High Court में FIR quash petition दाखिल कर उसे निरस्त करवाने की प्रक्रिया संभालते हैं।</p>
                </li>
                <li>
                    <strong>Legal Representation (कोर्ट में प्रतिनिधित्व)</strong>
                    <p>हम आपके केस में court appearances, charge sheet analysis, और cross-examination तक हर स्टेज पर आपका प्रतिनिधित्व करते हैं ताकि आपका पक्ष मज़बूती से रखा जा सके।</p>
                </li>
            </ol>

            <h2 className="mt-12">Why Choose Us?</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Experienced Criminal Lawyers (अनुभवी आपराधिक वकील)</li>
                <li>Local Expertise in Jaipur Police & Courts</li>
                <li>24×7 Legal Advice & Emergency Support</li>
                <li>Protection from Wrongful Arrest & False Cases</li>
                <li>Transparent Process & Regular Case Updates</li>
            </ul>
            <p className="mt-4">हमारी टीम आपको सिर्फ सलाह ही नहीं देती, बल्कि पूरे केस के दौरान साथ निभाती है — चाहे वह पुलिस थाने की जांच हो या कोर्ट की सुनवाई।</p>

            <h2 className="mt-12">Need Legal Help During Arrest or Investigation?</h2>
            <p>अगर आपको या आपके किसी जानने वाले को पुलिस ने पूछताछ या गिरफ्तारी के लिए बुलाया है, तो तुरंत हमसे संपर्क करें। हमारा उद्देश्य है — “Legal protection with dignity and confidence.”</p>
            <p className='font-bold'>Contact:</p>
            <Button asChild size="lg" className="mt-2">
                <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7597497063
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

            <h2 className="mt-12">Conclusion</h2>
            <p>
                गिरफ्तारी या जांच जैसी परिस्थितियाँ stressful हो सकती हैं, लेकिन सही कानूनी मार्गदर्शन से आप इनसे सुरक्षित निकल सकते हैं।
                हम हर स्थिति में आपके साथ खड़े हैं — आपकी सुरक्षा, सम्मान और न्याय के लिए।
            </p>

            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                <p><strong>Contact</strong></p>
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
