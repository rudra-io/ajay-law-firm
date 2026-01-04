
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. क्या Special Marriage Act के तहत शादी तुरंत हो सकती है?",
        answer: "👉 नहीं, इसमें 30 दिन का notice period होता है, जिसके बाद registration होती है।"
    },
    {
        question: "Q2. क्या Arya Samaj Marriage करवाकर बाद में Special Marriage Act के तहत register कर सकते हैं?",
        answer: "👉 हाँ, Arya Samaj Marriage के बाद court registration करवाना संभव है।"
    },
    {
        question: "Q3. क्या यह marriage certificate विदेश में मान्य होता है?",
        answer: "👉 जी हाँ, यह certificate government issued होता है और international use के लिए valid है।"
    },
    {
        question: "Q4. कितने witnesses की जरूरत होती है?",
        answer: "👉 कम से कम 2 witnesses आवश्यक होते हैं जिनके पास valid ID proofs हों।"
    },
    {
        question: "Q5. क्या parents की permission जरूरी है?",
        answer: "👉 नहीं, अगर दोनों की age legal है, तो parents की permission जरूरी नहीं है।"
    }
];

export default function SpecialMarriageActPage() {
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
          
          <h2>Special Marriage Act</h2>
          <p>
            अगर आप Inter-Caste, Inter-Religion या NRI Marriage करवाना चाहते हैं, तो आपकी शादी Special Marriage Act, 1954 के तहत पूरी तरह कानूनी और वैध (Legally Valid) बनाई जा सकती है। हम आपकी मदद करते हैं ताकि आपकी शादी Court Registered और Government Approved हो।
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            अगर आप Inter-Caste, Inter-Religion या NRI Marriage करवाना चाहते हैं, तो आपकी शादी Special Marriage Act, 1954 के तहत पूरी तरह कानूनी और वैध (Legally Valid) बनाई जा सकती है। हम आपकी मदद करते हैं ताकि आपकी शादी Court Registered और Government Approved हो।
          </p>
          <p><strong>Call:</strong> 7597497063 | <strong>Visit:</strong> www.LegalSolutionsJaipur.com</p>

          <h2 className="mt-12">What is Special Marriage Act, 1954?</h2>
          <p>
            Special Marriage Act (SMA), 1954 एक भारतीय कानून है जो अलग धर्म, जाति या राष्ट्रीयता के दो व्यक्तियों को शादी करने की अनुमति देता है। यह कानून भारत में Civil Marriage (Court Marriage) को वैध बनाता है, जो किसी धार्मिक रीति-रिवाज पर निर्भर नहीं होता।
          </p>
          <p>यह act खास तौर पर उन जोड़ों के लिए है जो —</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>अलग धर्म या caste से हैं</li>
            <li>अपने माता-पिता की सहमति के बिना legal शादी करना चाहते हैं</li>
            <li>NRI हैं और भारत में legally शादी करना चाहते हैं</li>
          </ul>

          <h2 className="mt-12">Eligibility under Special Marriage Act</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Age Requirement:</strong> Groom: 21 years or above, Bride: 18 years or above</li>
            <li><strong>Marital Status:</strong> दोनों व्यक्ति unmarried हों (या अगर पहले शादी हुई है तो Divorce Decree/Death Certificate आवश्यक)।</li>
            <li><strong>Consent:</strong> दोनों की free consent होना जरूरी है।</li>
            <li><strong>Residency:</strong> कम से कम एक व्यक्ति ने 30 दिन तक उस district में residence किया हो जहाँ notice दिया जा रहा है।</li>
          </ul>

          <h2 className="mt-12">Documents Required for Marriage under SMA</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aadhar Card / Passport (Identity Proof)</li>
            <li>Address Proof (Rent Agreement / Utility Bill)</li>
            <li>Birth Certificate or Matric Certificate</li>
            <li>Passport Size Photos (5 each)</li>
            <li>Notice Form under Section 5</li>
            <li>Witness ID Proof (2 Witnesses)</li>
            <li>Divorce Decree / Death Certificate (if applicable)</li>
          </ul>

          <h2 className="mt-12">Process of Special Marriage in Jaipur</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Notice of Intended Marriage:</strong> Marriage Officer को Section 5 के तहत 30-day notice दिया जाता है।</li>
            <li><strong>Publication of Notice:</strong> Notice Marriage Registrar office में public display होती है।</li>
            <li><strong>Objection Period (30 Days):</strong> अगर कोई objection नहीं आता, तो registration आगे बढ़ती है।</li>
            <li><strong>Declaration & Signatures:</strong> Bride, Groom और Witnesses declaration पर sign करते हैं।</li>
            <li><strong>Marriage Registration & Certificate:</strong> Marriage Officer द्वारा certificate issue किया जाता है – जो legally valid होता है।</li>
          </ol>

          <h2 className="mt-12">Benefits of Marriage under Special Marriage Act</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Inter-Religion और Inter-Caste Marriage का Legal Protection</li>
            <li>✅ Government Approved Marriage Certificate</li>
            <li>✅ Valid for Passport, Visa & Embassy Process</li>
            <li>✅ Legal Proof for Husband–Wife Rights</li>
            <li>✅ Simple & Transparent Court Process</li>
          </ul>

          <h2 className="mt-12">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Expert Advocates for Special Marriage Act Registration</li>
            <li>Assistance with Legal Paperwork & Affidavits</li>
            <li>Same-Day Consultation and Appointment Support</li>
            <li>Trusted by 1000+ Couples in Jaipur</li>
            <li>100% Legal, Safe & Confidential</li>
          </ul>

          <h2 className="mt-12">Need Help with Special Marriage Act Registration?</h2>
          <p>अगर आप Inter-Caste, Inter-Religion या NRI Marriage के लिए Special Marriage Act Registration करवाना चाहते हैं, तो हम आपकी पूरी legal process आसान बना देंगे।</p>
          <p>📱 Call / WhatsApp: 7597497063</p>
          <p>🌐 Website: www.LegalSolutionsJaipur.com</p>
          <p>📍 Office: Near High Court, Jaipur, Rajasthan</p>

          <h2 className="mt-12">Frequently Asked Questions (FAQ)</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>

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
