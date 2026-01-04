
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const faqs = [
    {
        question: "Q1. अगर कोई मेरी property पर कब्ज़ा कर ले तो क्या करूं?",
        answer: "👉 सबसे पहले legal notice भेजें, फिर civil court में possession suit file करें या police complaint दर्ज कराएँ।"
    },
    {
        question: "Q2. क्या builder से compensation मिल सकता है अगर flat delay हो गया हो?",
        answer: "👉 हां, आप RERA या Consumer Court में complaint करके compensation claim कर सकते हैं।"
    },
    {
        question: "Q3. क्या बिना title verification property खरीदना safe है?",
        answer: "👉 नहीं, बिना proper title verification के property खरीदना बहुत risk भरा होता है — fraud का खतरा बढ़ जाता है।"
    },
    {
        question: "Q4. क्या ancestral property disputes court में solve हो सकते हैं?",
        answer: "👉 हां, आप partition suit या declaration suit file करके ownership rights legally प्राप्त कर सकते हैं।"
    },
    {
        question: "Q5. Jaipur में best real estate lawyer कहाँ मिलेगा?",
        answer: "👉 हमारे यहां experienced property dispute lawyers in Jaipur available हैं जो आपके हर case में मदद करेंगे।"
    }
];

export default function RealEstateDisputesPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/civil-law" className="hover:text-primary">Civil Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Service Details</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <h1 className="border-b border-primary/20 pb-4">Service Overview</h1>
          
          <h2>Real Estate Disputes</h2>
          <p>
            Real Estate Disputes (रियल एस्टेट विवाद) – Real Estate Disputes यानी संपत्ति और जमीन से जुड़े कानूनी विवाद, आज के समय में सबसे common legal issues में...
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <div className="mt-12 w-full">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://picsum.photos/seed/real-estate/1200/675"
                alt="Real Estate Disputes"
                fill
                className="object-cover"
                data-ai-hint="city skyline"
              />
            </div>
          </div>

          <p className="mt-8">
            Real Estate Disputes (रियल एस्टेट विवाद) – Real Estate Disputes यानी संपत्ति और जमीन से जुड़े कानूनी विवाद, आज के समय में सबसे common legal issues में से एक हैं। चाहे बात property ownership, builder-buyer agreement, या land registration की हो — हर step पर legal guidance ज़रूरी होती है।
          </p>
          <p>
            हमारे expert property lawyers in Jaipur आपकी हर प्रकार की real estate legal issues में help करते हैं — चाहे वो property fraud, illegal possession, registry disputes, या title verification से related क्यों न हो।
          </p>

          <h2 className='mt-12'>रियल एस्टेट विवाद क्या होते हैं? (What are Real Estate Disputes?)</h2>
          <p>
            Real Estate disputes ऐसे legal conflicts होते हैं जो land, building, apartment या commercial property से जुड़े हों। सबसे common disputes हैं:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Property ownership disputes (मालिकाना हक़ के विवाद)</li>
            <li>Land encroachment (जमीन पर अवैध कब्ज़ा)</li>
            <li>Builder-buyer disputes (बिल्डर और खरीदार के बीच विवाद)</li>
            <li>Registry या mutation disputes (रजिस्ट्री या नामांतरण से जुड़े विवाद)</li>
            <li>Inheritance property conflicts (पैतृक संपत्ति विवाद)</li>
          </ul>
          <p>ऐसे मामलों में सही legal process follow करना ज़रूरी है ताकि आप अपनी property legally secure कर सकें।</p>

          <h2 className='mt-12'>Why Do Real Estate Disputes Arise? (विवाद क्यों होते हैं?)</h2>
          <p>
            Real estate disputes कई reasons से arise होते हैं — जैसे documentation errors, property fraud, या family conflicts. कुछ main reasons नीचे दिए गए हैं 👇
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Unclear ownership documents (मालिकाना कागज़ात स्पष्ट न होना)</li>
            <li>Multiple sale deeds (एक ही property को कई बार बेचना)</li>
            <li>Builder delay in possession (फ्लैट देने में देरी करना)</li>
            <li>Illegal encroachment (अवैध कब्ज़ा करना)</li>
            <li>Fake property papers (जाली दस्तावेज़ बनाना)</li>
          </ul>
          <p>ऐसे cases में एक experienced property dispute lawyer की legal advice बहुत जरूरी हो जाती है।</p>

          <h2 className='mt-12'>हमारी सेवाएँ (Our Legal Services for Real Estate Disputes)</h2>
          <p>हम निम्नलिखित real estate legal services provide करते हैं –</p>
          <ul className="list-disc pl-5 space-y-4">
              <li><strong>Property Title Verification (टाइटल वेरीफिकेशन)</strong> – Before buying property, we verify all legal ownership documents to avoid frauds.</li>
              <li><strong>Property Registration & Mutation (रजिस्ट्री और नामांतरण सहायता)</strong> – हम आपके लिए रजिस्ट्री, नामांतरण, और transfer of ownership process legally complete करवाते हैं।</li>
              <li><strong>Builder-Buyer Disputes Handling (बिल्डर-खरीदार विवाद समाधान)</strong> – If your builder is not giving possession or delaying the handover, we take legal action under RERA and Consumer Court.</li>
              <li><strong>Property Possession and Eviction Cases (कब्ज़ा और बेदखली मामले)</strong> – हम आपको illegal possession या unauthorized tenant के against eviction proceedings में सहायता करते हैं।</li>
              <li><strong>Property Fraud & Forgery Cases (संपत्ति धोखाधड़ी और जालसाजी)</strong> – हम FIR registration, police complaint और court proceedings में full legal support provide करते हैं।</li>
          </ul>

          <h2 className='mt-12'>Why Choose Us? (क्यों चुनें हमें?)</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Experienced Real Estate Lawyers in Jaipur</li>
                <li>Transparent Legal Process (पारदर्शी प्रक्रिया)</li>
                <li>Quick Case Resolution (तेज़ समाधान)</li>
                <li>Affordable Legal Fees (उचित फीस)</li>
                <li>Client-Focused Legal Support (ग्राहक-केंद्रित सेवा)</li>
            </ul>
          <p>हम हर client के case को अलग-अलग ध्यान से study करते हैं ताकि best possible legal remedy दी जा सके।</p>

          <h2 className='mt-12'>Legal Remedies Available (कानूनी उपाय)</h2>
          <p>Real Estate disputes को resolve करने के लिए आप इन remedies का उपयोग कर सकते हैं:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Civil Suit (दीवानी वाद) – Property ownership या possession के लिए।</li>
            <li>RERA Complaint (रीरा में शिकायत) – यदि builder possession delay करता है।</li>
            <li>Consumer Court Case – Builder या seller द्वारा cheating या fraud होने पर।</li>
            <li>Police FIR (एफआईआर दर्ज कराना) – Property fraud या illegal sale पर।</li>
            <li>Mediation / Arbitration – Court के बाहर mutual settlement के लिए।</li>
          </ul>

          <h2 className='mt-12'>Documents Required (आवश्यक दस्तावेज़)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sale Deed / Registry Copy</li>
            <li>Property Tax Receipts</li>
            <li>Mutation / Jamabandi Record</li>
            <li>Builder Agreement (if applicable)</li>
            <li>Identity Proofs</li>
            <li>Possession Letter or Payment Receipts</li>
          </ul>

          <h2 className="mt-12">FAQ – Real Estate Disputes (अक्सर पूछे जाने वाले प्रश्न)</h2>
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
                      Call Now: 7597497063
                  </a>
              </Button>
            <p className="mt-2 text-sm">Office: Civil Lines, Jaipur</p>
            <p className="mt-1 text-sm">Website: www.LegalSolutionsJaipur.com</p>
            <p className="mt-4 font-semibold">“Your Trusted Legal Partner for Every Property & Real Estate Dispute.”</p>
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
