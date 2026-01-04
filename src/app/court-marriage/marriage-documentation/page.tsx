
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. Marriage Certificate कितने दिन में मिल जाता है?",
        answer: "👉 अगर सारे documents सही हों, तो same-day या अगले दिन तक certificate मिल सकता है।"
    },
    {
        question: "Q2. क्या Arya Samaj Marriage के बाद Court Registration ज़रूरी है?",
        answer: "👉 हाँ, Court Registration से marriage legally valid हो जाती है।"
    },
    {
        question: "Q3. क्या NRI शादी के लिए documentation अलग होता है?",
        answer: "👉 हाँ, NRI marriage में Passport, Visa Copy और Embassy NOC आवश्यक होता है।"
    },
    {
        question: "Q4. Marriage Certificate कहाँ काम आता है?",
        answer: "👉 यह Proof होता है कि आपकी शादी कानूनी रूप से मान्य है — Visa, Embassy, Passport आदि में आवश्यक होता है।"
    },
    {
        question: "Q5. क्या Online Marriage Registration संभव है?",
        answer: "👉 हाँ, कुछ मामलों में online process शुरू की जा सकती है, पर verification और certificate issuance Court में ही होता है।"
    }
];

export default function MarriageDocumentationPage() {
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
          
          <h2>Marriage Documentation</h2>
          <p>
            अगर आपको Marriage Certificate या Legal Documentation की ज़रूरत है, तो हम आपकी मदद करेंगे। हम Court Marriage, Arya Samaj Marriage और Legal Registration – सब कुछ same-day में possible बनाते हैं।
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className='mt-8'>
            अगर आप अपनी शादी को कानूनी रूप से रजिस्टर करवाना चाहते हैं, या Marriage Certificate की ज़रूरत है — तो हम आपकी मदद के लिए हमेशा तैयार हैं। हम Court Marriage, Arya Samaj Marriage, NRI Marriage, Special Marriage Act Registration और Legal Documentation – सब कुछ एक ही जगह पर करवाते हैं।
          </p>

          <h2 className="mt-12">Why Marriage Documentation is Important</h2>
          <p>
            Marriage Documentation यानी शादी के सारे legal records और proofs। यह आपके विवाह को कानूनी मान्यता (Legal Validity) देता है और भविष्य में कई जगह ज़रूरी होता है:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Passport या Visa के लिए</li>
            <li>Name Change या Bank Record Update के लिए</li>
            <li>Divorce या Maintenance cases में Legal Proof के रूप में</li>
            <li>Foreign Embassy Submission के लिए</li>
            <li>Property या Insurance Claim में Proof के तौर पर</li>
          </ul>

          <h2 className="mt-12">Documents Required for Marriage Registration</h2>
          <p>Marriage Registration के लिए नीचे दिए गए documents आवश्यक हैं —</p>
          <h3 className='text-xl mt-4'>For Both Bride & Groom:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>आधार कार्ड या पासपोर्ट (Identity Proof)</li>
            <li>एड्रेस प्रूफ (Electricity Bill / Rent Agreement)</li>
            <li>बर्थ सर्टिफिकेट / मैट्रिक सर्टिफिकेट</li>
            <li>Passport Size Photos (6 each)</li>
            <li>दोनों Witness के ID Proof (Aadhar, Voter ID)</li>
            <li>अगर पहले शादी हो चुकी है, तो Divorce Decree या Death Certificate</li>
          </ul>
          
          <h2 className="mt-12">Our Marriage Documentation Services</h2>
          <p>We provide complete end-to-end assistance for all marriage-related legal paperwork:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Court Marriage Registration – Under Hindu Marriage Act or Special Marriage Act</li>
            <li>Arya Samaj Marriage Certificate – Same-day religious marriage certificate</li>
            <li>NRI Marriage Documentation – For couples with one or both partners abroad</li>
            <li>Inter-Caste / Inter-Religion Marriage Registration – Legal under Special Marriage Act</li>
            <li>Duplicate or Lost Marriage Certificate Assistance</li>
            <li>Marriage Certificate Attestation & Embassy Legalization</li>
          </ul>
          <p>हमारी legal team हर step पर आपको documentation से लेकर registration तक guide करती है।</p>

          <h2 className="mt-12">Process of Marriage Documentation in Jaipur</h2>
          <ol className="list-decimal pl-5 space-y-2">
              <li>Document Verification – सभी papers की जांच व verification</li>
              <li>Affidavit Preparation – Bride और Groom का legal affidavit तैयार किया जाता है</li>
              <li>Appointment at Marriage Registrar Office – Court date fix की जाती है</li>
              <li>Verification & Sign by Both Parties & Witnesses</li>
              <li>Marriage Certificate Issued – Same-day या 1–2 दिन में certificate प्राप्त</li>
          </ol>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Same-Day Marriage Certificate Service</li>
            <li>✅ Legal Assistance by Expert Advocates</li>
            <li>✅ Valid for Embassy, Visa & All Govt. Uses</li>
            <li>✅ 100% Confidential & Hassle-Free Process</li>
            <li>✅ Affordable Legal Packages</li>
          </ul>

          <h2 className="mt-12">Need Urgent Marriage Documentation Help?</h2>
          <p>अगर आपको Marriage Certificate जल्दी चाहिए या Legal Registration करवाना है, तो हम आपकी पूरी मदद करेंगे। हम Court Marriage, Arya Samaj Marriage और Legal Documentation – सब कुछ Same-Day में possible बनाते हैं!</p>

          <h2 className="mt-12">FAQs – Marriage Documentation Jaipur</h2>
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
            <p className="mt-2 text-sm">📍 Jaipur, Rajasthan</p>
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
