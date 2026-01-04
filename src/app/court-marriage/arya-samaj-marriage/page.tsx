
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const faqs = [
    {
        question: "Q1. Arya Samaj Marriage legally valid है क्या?",
        answer: "👉 हाँ, Arya Samaj Marriage Special Marriage Act और Hindu Marriage Act के तहत legal recognition रखती है।"
    },
    {
        question: "Q2. क्या parents की permission जरूरी है?",
        answer: "👉 केवल age criteria (18+ for female, 21+ for male) होने पर permission optional है।"
    },
    {
        question: "Q3. Marriage certificate कितने दिन में मिलेगा?",
        answer: "👉 Documents complete होने पर certificate same day या 1-2 दिन में issue होता है।"
    },
    {
        question: "Q4. क्या inter-religion marriage possible है?",
        answer: "👉 हाँ, Arya Samaj Marriage inter-religion couples के लिए भी legal है।"
    },
    {
        question: "Q5. क्या NRI / Foreigner marriages handle होती हैं?",
        answer: "👉 हाँ, affidavits, passport और visa verification के साथ full legal process manage किया जाता है।"
    },
    {
        question: "Q6. क्या urgent marriage / same-day marriage possible है?",
        answer: "👉 हाँ, हम same-day Arya Samaj Marriage facilitate करते हैं।"
    },
    {
        question: "Q7. क्या divorcee या widow / widower भी Arya Samaj Marriage कर सकते हैं?",
        answer: "👉 हाँ, affidavits और proof submit करने के बाद legal marriage possible है।"
    }
];

const comparisonData = [
    { feature: 'Religious Rituals', aryaSamaj: 'Yes (Vedic rituals)', courtMarriage: 'No' },
    { feature: 'Legal Recognition', aryaSamaj: 'Yes, government approved', courtMarriage: 'Yes' },
    { feature: 'Same-Day Option', aryaSamaj: 'Possible', courtMarriage: 'Usually 1-2 days' },
    { feature: 'Inter-Religion Marriage', aryaSamaj: 'Yes', courtMarriage: 'Yes' },
    { feature: 'Confidentiality', aryaSamaj: 'High', courtMarriage: 'Medium' },
];

export default function AryaSamajMarriagePage() {
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
          
          <h2>Arya Samaj Marriage</h2>
          <p>
            We provide fast and legal Arya Samaj Marriage services in Jaipur. Same-day Vedic rituals and government-recognized certificate for love, inter-religion, and NRI marriages.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Arya Samaj Marriage एक Hindu religious marriage है जो Vedic rituals और principles के अनुसार होती है। यह marriage legal recognition पाने के लिए Special Marriage Act, 1954 के तहत या Arya Samaj Mandir में registration की जाती है।
          </p>
          <p>
            We help you in every legal step of Arya Samaj Marriage — documents preparation, legal affidavits, ceremony, and certificate issuance तक। हमारी team ensure करती है कि आपकी marriage legally valid और internationally recognized हो।
          </p>

          <h2 className='mt-12'>Arya Samaj Marriage क्या है?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>यह शादी Hindu dharm के अनुसार की जाती है।</li>
            <li>Arya Samaj Marriage में Vedic rituals, pooja, और two witnesses शामिल होते हैं।</li>
            <li>यह marriage Special Marriage Act के तहत legal recognition भी प्राप्त कर सकती है।</li>
            <li>Inter-caste और Inter-religion couples के लिए भी valid है।</li>
            <li>Legal certificate प्राप्त होने पर यह passport, visa, और other government purposes के लिए accepted होती है।</li>
          </ul>
          <p className='mt-4'>💡 <strong>Tip:</strong> Arya Samaj Marriage में marriage registration process जल्दी और simple होती है, इसलिए urgent marriage या court marriage से भी fast है।</p>
          
          <h2 className="mt-12">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ <strong>Experienced Legal Team:</strong> Legal experts ensure करते हैं कि आपके documents और affidavits पूरी तरह correct हों।</li>
            <li>✅ <strong>Same-Day Marriage Facility:</strong> Documents complete होने पर marriage same-day हो सकती है।</li>
            <li>✅ <strong>Confidential & Private:</strong> आपकी personal details पूरी confidentiality के साथ handle होती हैं।</li>
            <li>✅ <strong>Government Recognized Certificate:</strong> Marriage certificate legally valid और government approved होता है।</li>
            <li>✅ <strong>Inter-Religion / Love Marriage Support:</strong> Family consent न होने पर भी legally marriage करवाते हैं।</li>
          </ul>

          <h2 className="mt-12">Required Documents for Arya Samaj Marriage</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aadhar / ID Proof – Bride & Groom</li>
            <li>Passport Size Photos – 6-6</li>
            <li>Birth Certificate / Age Proof</li>
            <li>Address Proof – Permanent & Current</li>
            <li>Affidavit of Marital Status – Unmarried, Divorced या Widow</li>
            <li>Two Witnesses with ID Proof</li>
            <li>Passport / Visa – NRI / Foreigner marriage cases</li>
          </ul>
          <p className="mt-4">💡 <strong>Note:</strong> All documents should be self-attested copies. Original documents will be verified by legal team.</p>

          <h2 className="mt-12">How We Handle Arya Samaj Marriage</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>Initial Consultation & Case Study:</strong> हमारी team आपकी marriage requirement समझती है। Documents की list और verification checklist prepare की जाती है।</li>
            <li><strong>Affidavit & Legal Paper Preparation:</strong> Marital status affidavit बनाना। NRI / Foreigner cases में additional affidavits और embassy verification handle करना।</li>
            <li><strong>Ceremony / Rituals:</strong> Arya Samaj Mandir में legal Vedic rituals conduct किए जाते हैं। 2 witnesses required, और witnesses का ID proof verify किया जाता है।</li>
            <li><strong>Certificate Issuance:</strong> Marriage certificate government recognized और valid issue होता है। Certificate Passport, Visa और other official purposes के लिए accepted होती है।</li>
          </ol>

          <h2 className="mt-12">Types of Arya Samaj Marriage We Handle</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Love Marriage without Family Consent</li>
            <li>Inter-Caste / Inter-Religion Marriage</li>
            <li>Re-Marriage after Divorce</li>
            <li>NRI / Foreigner Marriage Registration</li>
            <li>Same-Day / Urgent Marriage Services</li>
          </ul>

          <h2 className="mt-12">Arya Samaj Marriage vs Court Marriage</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Arya Samaj Marriage</TableHead>
                <TableHead>Court Marriage (Special Marriage Act)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell>{row.aryaSamaj}</TableCell>
                  <TableCell>{row.courtMarriage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="mt-4">We provide both options but Arya Samaj Marriage is faster for urgent needs.</p>

          <h2 className="mt-12">Common Reasons People Choose Arya Samaj Marriage</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Urgent Marriage Required</strong> – Travel, visa, or family pressure cases.</li>
            <li><strong>Love Marriage / Inter-Religion Marriage</strong> – Without family consent.</li>
            <li><strong>NRI / Foreigner Marriage</strong> – Passport and visa ready.</li>
            <li><strong>Re-Marriage after Divorce</strong> – Legal and smooth process.</li>
            <li><strong>Quick Legal Certificate</strong> – Same-day valid certificate.</li>
          </ul>

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
            <p className="mt-2 text-muted-foreground">अगर आप Arya Samaj Marriage in Jaipur करवाना चाहते हैं, तो तुरंत संपर्क करें। हमारी expert legal team आपके लिए पूरी documentation, ritual, और certificate issuance process handle करती है।</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call/WhatsApp: 7597497063
              </a>
            </Button>
            <p className="mt-2 text-sm">🌐 www.LegalSolutionsJaipur.com</p>
            <p className="mt-2 text-sm">📍 Jaipur, Rajasthan</p>
            <p className="mt-4 font-semibold">💬 Legal, fast और confidential Arya Samaj Marriage के लिए expert team से contact करें।</p>
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
