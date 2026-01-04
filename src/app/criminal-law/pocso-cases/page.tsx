
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. POCSO Act क्या है और यह किन मामलों में लागू होता है?",
        answer: "👉 यह Act बच्चों (18 वर्ष से कम आयु) के sexual harassment, assault, और exploitation से सुरक्षा के लिए बनाया गया है।"
    },
    {
        question: "Q2. अगर किसी पर झूठा POCSO केस लगाया गया है, तो क्या किया जा सकता है?",
        answer: "👉 ऐसे में आप High Court में FIR quash petition दायर कर सकते हैं और अपने बचाव में legal evidence पेश कर सकते हैं। हमारी टीम इसमें मदद करती है।"
    },
    {
        question: "Q3. क्या POCSO मामलों में जमानत मिल सकती है?",
        answer: "👉 हाँ, लेकिन यह गंभीर offence की category में आता है। इसलिए सही legal grounds और अनुभवी वकील की मदद से bail possible है।"
    },
    {
        question: "Q4. क्या पीड़ित बच्चे की पहचान सार्वजनिक की जा सकती है?",
        answer: "👉 नहीं, POCSO Act के तहत पीड़ित की पहचान का खुलासा करना कानूनन अपराध है। गोपनीयता बनाए रखना आवश्यक है।"
    },
    {
        question: "Q5. हमारी टीम कैसे मदद करती है?",
        answer: "👉 हम आपको legal defense, bail, FIR quashing, और court representation में सहायता देते हैं — साथ ही केस की confidentiality और sensitivity का पूरा ध्यान रखते हैं।"
    }
];

export default function PocsoCasesPage() {
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
          <h1 className="border-b border-primary/20 pb-4">POCSO Cases</h1>
          <p>
            POCSO Act (Protection of Children from Sexual Offences) से जुड़े मामलों में हमारी legal team पूरी संवेदनशीलता और सटीकता के साथ legal help प्रदान करती है — चाहे आप justice चाह रहे हों या false case में फंसे हों।
          </p>
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            POCSO Act, 2012 (Protection of Children from Sexual Offences Act) बच्चों को sexual abuse, harassment, और exploitation से बचाने के लिए बनाया गया है। यह कानून बच्चों से जुड़े sexual offences को बहुत गंभीरता से लेता है, लेकिन कई बार झूठे आरोप (false allegations) या गलतफहमी के कारण निर्दोष व्यक्ति भी फंस जाते हैं।
          </p>
          <p>
            ऐसी स्थिति में आपको एक ऐसी कानूनी टीम (legal team) की ज़रूरत होती है जो कानून को गहराई से समझे और संवेदनशीलता के साथ आपका पक्ष रख सके। हमारी टीम ऐसे मामलों में आपके अधिकारों की रक्षा (protection of rights) और सही न्याय (fair justice) के लिए हर स्तर पर सहायता प्रदान करता है।
          </p>

          <h2 className="mt-12">What is POCSO Act? (POCSO कानून क्या है?)</h2>
          <p>
            POCSO Act, 2012 का उद्देश्य है बच्चों (18 वर्ष से कम आयु) को किसी भी प्रकार के sexual offence से सुरक्षा देना। यह Act gender-neutral है, यानी लड़का या लड़की – दोनों को बराबर सुरक्षा देता है।
          </p>
          <p>इस कानून के तहत आने वाले मुख्य अपराध हैं:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sexual harassment of a child (बाल यौन उत्पीड़न)</li>
            <li>Penetrative sexual assault</li>
            <li>Aggravated sexual assault (जब आरोपी शिक्षक, पुलिस या रिश्तेदार हो)</li>
            <li>Use of child for pornography</li>
          </ul>

          <h2 className="mt-12">Our Legal Services in POCSO Cases (हमारी कानूनी सेवाएँ):</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
                <strong>Legal Consultation & Case Assessment (कानूनी सलाह और केस मूल्यांकन)</strong>
                <p>हम पहले आपके केस की स्थिति, FIR, और available evidence को गहराई से समझते हैं ताकि मजबूत legal strategy तैयार की जा सके।</p>
            </li>
            <li>
                <strong>FIR Registration & Quashing (एफआईआर दर्ज या रद्द करवाना)</strong>
                <p>अगर आपके खिलाफ झूठे आरोप हैं, तो हमारी टीम High Court में FIR quashing petition दाखिल कर false case को निरस्त करवाने में मदद करती है।</p>
            </li>
            <li>
                <strong>Bail & Anticipatory Bail Assistance (जमानत और पूर्व-गिरफ्तारी जमानत)</strong>
                <p>POCSO मामलों में bail पाना थोड़ा कठिन होता है, लेकिन हमारे अनुभवी criminal lawyers कोर्ट में आपकी तरफ से प्रभावी ढंग से पेश होकर राहत दिलाने में सक्षम हैं।</p>
            </li>
            <li>
                <strong>Representation in POCSO Courts (POCSO कोर्ट में प्रतिनिधित्व)</strong>
                <p>हम आपके केस में cross-examination, witness handling, और legal documentation से लेकर final argument तक पूरा प्रतिनिधित्व करते हैं।</p>
            </li>
            <li>
                <strong>Victim Support & Child Protection (पीड़ित पक्ष के लिए सहायता)</strong>
                <p>अगर बच्चा पीड़ित पक्ष में है, तो हमारी टीम उसे legal guidance, child counseling support, और statement recording में सही माहौल और सहायता प्रदान करती है।</p>
            </li>
          </ol>

          <h2 className="mt-12">Why Choose Us for POCSO Cases?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Experienced POCSO & Criminal Lawyers</li>
            <li>Sensitive and Confidential Approach</li>
            <li>Proper Documentation & Legal Drafting</li>
            <li>Strategic Case Handling</li>
            <li>Strong Representation in POCSO Court & High Court</li>
            <li>24×7 Legal Support for Emergency Cases</li>
          </ul>
          <p>हम समझते हैं कि ऐसे मामलों में भावनात्मक और सामाजिक दबाव बहुत अधिक होता है, इसलिए हमारी टीम आपको law + empathy दोनों के साथ support करती है।</p>

          <h2 className="mt-12">Your Rights in a POCSO Case (POCSO केस में आपके अधिकार):</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>आपको बिना सबूत किसी गंभीर अपराध में दोषी नहीं ठहराया जा सकता।</li>
            <li>Legal representation और निष्पक्ष सुनवाई (fair trial) का अधिकार आपको हमेशा प्राप्त है।</li>
            <li>Investigation के दौरान आपके privacy और dignity की रक्षा करना पुलिस और कोर्ट की जिम्मेदारी है।</li>
            <li>यदि झूठे आरोप लगे हैं, तो आप defamation case या FIR quashing का सहारा ले सकते हैं।</li>
          </ul>

          <h2 className="mt-12">Legal Help in Jaipur – Contact Us</h2>
          <p>अगर आप या आपका कोई परिचित POCSO केस में फंसा है, तो घबराने की जरूरत नहीं है। हमारी टीम ऐसे संवेदनशील मामलों को professionalism, confidentiality और compassion के साथ handle करती है।</p>

          <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
            <h3 className="font-bold text-foreground">Your Legal Shield in POCSO Matters</h3>
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
            POCSO मामले में जल्दबाजी या घबराहट की बजाय सही कानूनी सलाह और अनुभव सबसे बड़ा सहारा होता है। हमारी अनुभवी टीम न केवल कानूनी रूप से बल्कि मानवीय दृष्टिकोण से भी हर कदम पर आपके साथ खड़ी है।
          </p>
          <Button asChild size="lg" className="mt-4">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call Today: 7597497063
            </a>
          </Button>
          <p className="mt-2 text-sm">For Trusted POCSO Case Support in Jaipur</p>
          
          <div className="mt-8 p-4 bg-card rounded-lg">
            <p className="font-bold">Contact Us</p>
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
