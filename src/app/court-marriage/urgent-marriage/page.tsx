
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. Kya Urgent Marriage same day me ho sakti hai?",
        answer: "👉 Haan, agar sabhi documents complete hain, to Arya Samaj Marriage same day ho sakti hai, aur certificate aapko 24 hours me mil jata hai."
    },
    {
        question: "Q2. Kya parents ki permission zaroori hai?",
        answer: "👉 Nahi, agar dono parties 18+ (female) aur 21+ (male) hain, to legally marriage bina parental consent ke valid hoti hai."
    },
    {
        question: "Q3. Kya inter-religion marriage possible hai?",
        answer: "👉 Bilkul. Special Marriage Act के तहत Hindu-Muslim, Sikh-Christian, ya kisi bhi religion ke couples legally marry kar sakte hain."
    },
    {
        question: "Q4. Marriage certificate kab milta hai?",
        answer: "👉 Same-day Arya Samaj Marriage ke liye turant certificate milta hai. Court marriage ke liye 1-2 din lag sakte hain."
    },
    {
        question: "Q5. Kya aap foreigner / NRI marriages bhi handle karte hain?",
        answer: "👉 Haan, hamari team NRI aur foreigner marriages ke liye affidavit, visa aur apostille documentation handle karti hai."
    },
    {
        question: "Q6. Kya Urgent Marriage legally valid hai?",
        answer: "👉 Ji haan, hamare through hui har marriage Court aur Government approved hoti hai."
    }
];

export default function UrgentMarriagePage() {
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
          
          <h2>Urgent Marriage</h2>
          <p>
            अगर आपको जल्दी शादी करनी है तो हम आपकी मदद करेंगे। Court Marriage, Arya Samaj Marriage और Legal Certificate – सब कुछ same-day में possible है।
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            कई बार ज़िंदगी में ऐसे हालात आते हैं जब marriage जल्दी और legal तरीके से करवाना ज़रूरी हो जाता है — जैसे family pressure, travel urgency, court appearance, visa purpose, inter-religion marriage, या love marriage without delay. ऐसे में हम आपकी पूरी Urgent Marriage Legal Process में मदद करते हैं — legal documentation से लेकर court registration तक.
          </p>

          <h2 className="mt-12">What is Urgent Marriage (तुरंत शादी क्या होती है)?</h2>
          <p>
            Urgent Marriage का मतलब होता है ऐसी शादी जो legal तरीके से same day या 1-2 दिन में पूरी की जाती है, और जिसका marriage certificate तुरंत issue किया जा सके। यह marriage process Special Marriage Act, 1954 या Arya Samaj Marriage के तहत की जा सकती है।
          </p>
          
          <h2 className="mt-12">Why Choose Us for Urgent Marriage?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Same-Day Legal Marriage Facility – Documentation ke baad aapka marriage ceremony aur registration within hours complete ho sakta hai.</li>
            <li>✅ Experienced Legal Team – Hamare advocates aur legal experts aapke case ko legally safe banate hain.</li>
            <li>✅ Confidential Process – Aapke personal details aur documents ka pura confidentiality ke sath handle kiya jata hai.</li>
            <li>✅ Government-Recognized Marriage Certificate – Marriage ke baad aapko valid court certificate milta hai jo passport, visa, aur legal proof ke liye accepted hota hai.</li>
            <li>✅ Support for Inter-Religion & Inter-Caste Marriages – Hindu-Muslim, Sikh-Christian, ya different caste couples ke liye complete legal assistance.</li>
          </ul>

          <h2 className="mt-12">Documents Required for Urgent Marriage (ज़रूरी दस्तावेज़)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aadhar Card / ID Proof (Bride & Groom)</li>
            <li>Passport Size Photos (6-6 each)</li>
            <li>Birth Certificate / Age Proof</li>
            <li>Address Proof (Permanent & Current)</li>
            <li>Affidavit of Marital Status (unmarried/divorced/widow)</li>
            <li>Two Witnesses with ID Proof</li>
            <li>Passport or Visa (for NRI / foreigner marriage)</li>
          </ul>
          <p>💡 Note: Sabhi documents self-attested copies ke sath hone chahiye. Original documents verification ke liye lagenge.</p>
          
          <h2 className="mt-12">How We Process Urgent Marriage</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Step 1:</strong> Call us on 📞 7597497063 aur apni marriage requirement batayein.</li>
            <li><strong>Step 2:</strong> Required documents WhatsApp ya personally submit karein.</li>
            <li><strong>Step 3:</strong> Hamari legal team aapke affidavits aur papers prepare karti hai.</li>
            <li><strong>Step 4:</strong> Arya Samaj Temple ya Court me marriage ceremony होती hai.</li>
            <li><strong>Step 5:</strong> Marriage certificate issue hota hai (same day / next day).</li>
          </ol>

          <h2 className="mt-12">Types of Urgent Marriages We Handle</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Court Marriage (Special Marriage Act)</li>
            <li>Arya Samaj Marriage (Hindu Ritual Marriage)</li>
            <li>Inter-Religion Marriage under Special Marriage Act</li>
            <li>NRI Marriage / Foreigner Marriage Registration</li>
            <li>Love Marriage without Family Consent</li>
            <li>Re-Marriage after Divorce</li>
          </ul>
          
          <h2 className="mt-12">Why Jaipur for Urgent Marriage?</h2>
          <p>Jaipur is one of the most legally recognized cities for Court & Arya Samaj Marriage. Yahan par hamne kai couples ke liye successfully same-day marriage aur registration complete kiya hai. Hamari legal team ensure karti hai ki aapka marriage certificate legally valid ho across India aur abroad.</p>

          <h2 className="mt-12">Frequently Asked Questions (FAQ)</h2>
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
            <p className="mt-2 text-muted-foreground">For Urgent Marriage Registration, Same-Day Court Marriage & Legal Certificate Assistance, Contact Our Expert Team Now!</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call/WhatsApp: 7597497063
              </a>
            </Button>
            <p className="mt-2 text-sm">🌐 www.LegalSolutionsJaipur.com</p>
            <p className="mt-1 text-sm">📍 Location: Jaipur, Rajasthan</p>
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
