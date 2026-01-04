
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Money Recovery Lawyer | Send Legal Notice for Recovery",
    description: "File legal notices and suits for money recovery, loan default, cheque bounce & fraud cases.",
    alternates: { canonical: "https://www.LegalSolutionsJaipur.com/civil-law/money-recovery" }
};

const faqs = [
    {
        question: "Legal Notice भेजने पर भी पैसा न मिले तो क्या करें?",
        answer: "Civil Suit for Recovery of Money फाइल करें।"
    },
    {
        question: "क्या Police Complaint कर सकते हैं?",
        answer: "हाँ, अगर धोखाधड़ी (Fraud) हुई है तो IPC 420 के तहत FIR दर्ज करा सकते हैं।"
    },
    {
        question: "Cheque Bounce केस में क्या होता है?",
        answer: "Section 138 NI Act के तहत Criminal Case बनता है, जिसमें सजा और जुर्माना दोनों हो सकते हैं।"
    },
    {
        question: "Court Fee कितनी लगती है?",
        answer: "यह आपके claim amount पर निर्भर करती है और हर राज्य में अलग-अलग होती है।"
    },
    {
        question: "Recovery case में कितना समय लगता है?",
        answer: "Legal Notice से 15-30 दिन, Cheque Bounce Case में 3-6 महीने, और Civil Suit में 6-12 महीने लग सकते हैं।"
    }
];

const legalOptions = [
    { 
        title: "Legal Notice भेजना",
        description: "सबसे पहला कदम – Advocate के द्वारा Legal Notice भेजना। Legal Notice में लिखा जाता है: आपने कितना पैसा दिया, कब वापस करना था, अब तक क्यों नहीं मिला, कितने दिनों में भुगतान करना होगा, अन्यथा क्या कानूनी कार्रवाई होगी। अक्सर, Legal Notice भेजते ही 70% मामले सुलझ जाते हैं।"
    },
    {
        title: "Civil Suit for Money Recovery (सिविल कोर्ट में दावा)",
        description: "यदि Notice का जवाब नहीं आए, तो Court में Civil Suit दाखिल किया जाता है। Court में Recovery Suit के फायदे: Court Decree के बाद legally पैसा वापस मिलता है, Interest भी claim किया जा सकता है, Property attachment भी हो सकती है, salary/goods को attach करवाया जा सकता है, Police seal भी करवाया जा सकता है।"
    },
    {
        title: "Cheque Bounce Case (Section 138 – NI Act)",
        description: "अगर सामने वाले ने cheque दिया है और वह bounce हो गया, तो आप: Legal Notice भेजेंगे, Court में 138 NI Act के तहत केस दर्ज करेंगे। इसमें Court आरोपी को सजा, जुर्माना और Payment दोनों दिलवा सकता है।"
    },
    {
        title: "Criminal Complaint (धोखाधड़ी – IPC 406, 420 आदि)",
        description: "अगर सामने वाले ने धोखाधड़ी करके पैसा लिया है तो: FIR दर्ज, Police Investigation, Criminal Charges, Arrest, Court में Chargesheet. Criminal case में recovery की संभावना तेजी से बढ़ जाती है।"
    }
];

export default function MoneyRecoveryPage() {
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
          
          <h2>Money Recovery</h2>
          <p>
            पैसे वापस लेना है? Loan recovery, fraud, cheque bounce, business dues, online scam cases के लिए Best Money Recovery Lawyer in Jaipur.
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
                src="https://picsum.photos/seed/money-recovery/1200/675"
                alt="Money Recovery"
                fill
                className="object-cover"
                data-ai-hint="cash money"
              />
            </div>
          </div>
          
          <p className="mt-8">
            Money Recovery Case (पैसे वापस लेने का मामला) एक ऐसा कानूनी उपाय है जिसके जरिए कोई भी व्यक्ति या व्यवसाय अपने बकाया पैसे को कानूनी तरीके से वापस ले सकता है। चाहे पैसा उधार दिया हो, व्यापार में बकाया हो, किसी ने आपका भुगतान रोक रखा हो, ऑनलाइन फ्रॉड हुआ हो, या किसी ने विश्वास पैदा करके आपका पैसा हड़प लिया हो—सभी मामलों में Money Recovery Law आपकी मदद के लिए उपलब्ध है।
          </p>
          <p>
            We are a भरोसेमंद Legal Service Provider जो Money Recovery Cases, Civil Suit, Cheque Bounce, Fraud Cases, और Contract Breach में विशेषज्ञता रखता है।
          </p>

          <h2 className="mt-12">1. Money Recovery Case क्या होता है?</h2>
          <p>
            जब कोई व्यक्ति दूसरे व्यक्ति से लिए गए पैसे को समय पर वापस नहीं करता या जानबूझकर भुगतान टालता है, तो इस स्थिति में Money Recovery Case दर्ज किया जाता है। ये मामले खासतौर पर इन कारणों से बनते हैं:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>उधार दिया हुआ पैसा वापस न मिलना</li>
            <li>व्यापार में Payment रोक लेना</li>
            <li>फर्जीवाड़ा/धोखाधड़ी (Fraud)</li>
            <li>Property/Flat booking में पैसा डूब जाना</li>
            <li>Online पैसे का लेन-देन में scam</li>
            <li>Agreement या Contract का उल्लंघन (Breach of Contract)</li>
            <li>Loan या Partnership के मामले</li>
          </ul>
          <p>Indian Contract Act, Civil Procedure Code और कई अन्य laws ऐसे मामलों में लागू होते हैं।</p>

          <h2 className="mt-12">2. किन-किन मामलों में Money Recovery Case किया जा सकता है?</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Loan Recovery:</strong> आपने किसी दोस्त/रिश्तेदार/परिचित को पैसा उधार दिया था – वापस नहीं कर रहा।</li>
                <li><strong>Business Recovery:</strong> किसी Client या Vendor ने आपके Invoice का Payment रोका है।</li>
                <li><strong>Cheque Bounce Section 138:</strong> आपने Payment लिया, लेकिन Cheque Dishonor हो गया।</li>
                <li><strong>Fraud / Online Scam:</strong> ऑनलाइन लेन-देन, investment scam, crypto fraud, property fraud आदि।</li>
                <li><strong>Property Booking Money:</strong> Builder ने समय पर flat/plot नहीं दिया या प्रोजेक्ट बंद कर दिया।</li>
                <li><strong>Salary / Dues Recovery:</strong> Employer ने Salary, Incentive या PF रोक लिया।</li>
                <li><strong>Security Money / Advance Refund:</strong> Advance payment लिया लेकिन Product/Service प्रदान नहीं की।</li>
                <li><strong>Breach of Contract:</strong> किसी ने Agreement के नियमों का उल्लंघन किया हो।</li>
            </ul>
          <p className='mt-4'>इन सभी में आप Civil Suit for Money Recovery और कई मामलों में Criminal Complaint (धोखाधड़ी) दोनों कर सकते हैं।</p>
          

          <h2 className="mt-12">3. Money Recovery के लिए कौन-कौन से Legal Options उपलब्ध हैं?</h2>
          <div className="space-y-6">
            {legalOptions.map((option, index) => (
                <div key={index}>
                    <h3 className="font-semibold text-lg text-foreground">({String.fromCharCode(65 + index)}) {option.title}</h3>
                    <p className='mt-2'>{option.description}</p>
                </div>
            ))}
          </div>


          <h2 className="mt-12">4. Money Recovery के लिए कौन-कौन से Documents जरूरी होते हैं?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Written Agreement / Contract</li>
            <li>WhatsApp / Email चैट</li>
            <li>Bank Transfer / UPI Proof</li>
            <li>Cheque / Receipt</li>
            <li>Audio/Video evidence</li>
            <li>Ledger / Account Statement</li>
            <li>Invoice / Bill Copies</li>
          </ul>
          <p className="mt-4">जितने ज्यादा documents होंगे, उतना strong आपका केस बनेगा।</p>

          <h2 className="mt-12">हम आपकी कैसे मदद करते हैं?</h2>
          <p>हम Jaipur और Rajasthan में Money Recovery Cases में विशेषज्ञता रखते हैं। हमारी Services:</p>
          <ul className="list-disc pl-5 space-y-2">
              <li>Legal Notice Drafting</li>
              <li>Defaulter से Negotiation</li>
              <li>Cheque Bounce Case Filing</li>
              <li>Civil Suit for Recovery</li>
              <li>Fraud/Complaint Registration</li>
              <li>Court Hearings</li>
              <li>Settlement Assistance</li>
              <li>Fast Documentation</li>
          </ul>
          <p className='mt-4'>हम हर तरह के recovery मामलों में clients को fast और strong legal support देते हैं।</p>

          <h2 className="mt-12">Frequently Asked Questions (FAQ)</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{`Q${index + 1}. ${faq.question}`}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Need Immediate Legal Help?</h3>
            <p className="mt-2 text-muted-foreground">अगर आप पैसा वापस लेना चाहते हैं, कोई आपका Payment रोक रहा है या Cheque Bounce हो गया है, हम आपकी मदद करेंगे।</p>
            <Button asChild size="lg" className="mt-4">
                <a href="tel:7597497063">
                    <Phone className="mr-2 h-5 w-5" />
                    Call/WhatsApp: 7597497063
                </a>
            </Button>
            <p className="mt-2 text-sm">Legal Solutions</p>
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
