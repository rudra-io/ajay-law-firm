
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. क्या Inter Caste Marriage भारत में वैध है?",
        answer: "👉 हां, Special Marriage Act, 1954 के तहत Inter Caste Marriage पूरी तरह से वैध है।"
    },
    {
        question: "Q2. क्या हमें parental consent की जरूरत होती है?",
        answer: "👉 नहीं, अगर आप 18 (female) और 21 (male) साल से ऊपर हैं, तो आपको parental consent की जरूरत नहीं है।"
    },
    {
        question: "Q3. क्या Inter Caste Marriage Arya Samaj Mandir में हो सकती है?",
        answer: "👉 हां, Arya Samaj में caste या religion की कोई पाबंदी नहीं होती।"
    },
    {
        question: "Q4. Marriage Certificate मिलने में कितना समय लगता है?",
        answer: "👉 Arya Samaj Marriage के बाद certificate same-day मिल सकता है। Special Marriage Act के तहत 30 days notice के बाद certificate issue होता है।"
    },
    {
        question: "Q5. अगर परिवार विरोध करे तो क्या हमें protection मिल सकता है?",
        answer: "👉 हां, हमारी legal team आपको court से protection order दिलाने में मदद करती है।"
    }
];

export default function InterCasteMarriagePage() {
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
          
          <h2>Inter Caste Marriage</h2>
          <p>
            अगर आप Inter Caste Marriage करना चाहते हैं, तो हम same-day Court Marriage और Legal Certificate में मदद करेंगे। Call 7597497063
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            आज के आधुनिक समय में Inter Caste Marriage (अंतरजातीय विवाह) एक सामान्य और बढ़ता हुआ सामाजिक परिवर्तन है। लेकिन जब बात आती है legal process की, तो कई couples को family pressure, social challenges, और legal formalities का सामना करना पड़ता है। ऐसे में हम आपकी पूरी मदद करते हैं – चाहे वो Court Marriage, Arya Samaj Marriage, या Marriage Registration under Special Marriage Act, 1954 क्यों न हो।
          </p>
          <p>
            हमारा मकसद है कि हर couple को अपनी पसंद का जीवन साथी चुनने की आज़ादी और सुरक्षा मिले, और उनकी शादी पूरी तरह से कानूनी (legally valid) हो।
          </p>

          <h2 className="mt-12">Inter Caste Marriage क्या है?</h2>
          <p>
            Inter Caste Marriage का मतलब होता है जब दो व्यक्ति अलग-अलग जाति (caste) या धर्म (religion) से होते हैं और शादी करने का निर्णय लेते हैं। भारत में पहले यह सामाजिक रूप से चुनौतीपूर्ण माना जाता था, लेकिन अब Indian Constitution और Special Marriage Act, 1954 के तहत यह पूरी तरह से कानूनी और वैध (legal and valid) है।
          </p>
          <p>
            Article 21 के अनुसार, हर व्यक्ति को अपनी पसंद से शादी करने और जीवनसाथी चुनने का अधिकार है। इसलिए, अगर कोई couple Inter Caste Marriage करना चाहता है, तो उसे किसी caste या religion की बाध्यता नहीं होती।
          </p>

          <h2 className="mt-12">Inter Caste Marriage के लिए Legal Process (Step-by-Step)</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
                <strong>Document Preparation:</strong>
                <p>सबसे पहले हम आपके सारे आवश्यक documents को verify और prepare करते हैं, जैसे कि –</p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Aadhar Card (Address Proof)</li>
                    <li>Birth Certificate / Age Proof</li>
                    <li>Passport Size Photographs</li>
                    <li>Witness ID Proofs (Minimum 3 Witness)</li>
                    <li>Unmarried Affidavit</li>
                    <li>Notice of Intended Marriage (for Special Marriage Act)</li>
                </ul>
            </li>
            <li>
                <strong>Notice under Special Marriage Act:</strong>
                <p>अगर आप Special Marriage Act, 1954 के तहत शादी करना चाहते हैं, तो Marriage Officer को 30 दिन का Notice देना होता है। इस दौरान किसी को भी objection करने का अधिकार होता है, लेकिन objection valid होने पर ही प्रक्रिया रुकेगी।</p>
            </li>
            <li>
                <strong>Verification & Declaration:</strong>
                <p>30 दिन बाद जब कोई objection नहीं होता, तो दोनों parties और तीन witnesses को registrar office में उपस्थित होना पड़ता है। यहां Declaration of Marriage पर signatures होते हैं।</p>
            </li>
            <li>
                <strong>Marriage Certificate:</strong>
                <p>Marriage declaration के बाद, आपको एक Marriage Certificate मिल जाता है जो आपकी शादी का कानूनी सबूत होता है।</p>
            </li>
          </ol>

          <h2 className="mt-12">Arya Samaj Marriage – Quick Option for Inter Caste Marriage</h2>
          <p>अगर आप same-day marriage करवाना चाहते हैं, तो Arya Samaj Mandir Marriage सबसे आसान और तेज़ तरीका है। Arya Samaj Temple किसी भी caste, religion, या background के couple को शादी करने की अनुमति देता है, बस दोनों partners की age legal होनी चाहिए (boy – 21 years, girl – 18 years)।</p>
          <p>शादी के बाद हम आपकी Marriage Registration under Court भी करवाते हैं ताकि आपकी शादी का official legal certificate तैयार हो जाए।</p>
          
          <h2 className="mt-12">Documents Required for Inter Caste Marriage</h2>
          <p>Husband & Wife दोनों के लिए:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aadhar Card / Passport / Voter ID (Address Proof)</li>
            <li>Birth Certificate / Age Proof</li>
            <li>5 Passport Size Photos</li>
            <li>Unmarried Affidavit (attested by Notary)</li>
            <li>Witness ID Proofs (3 persons)</li>
            <li>Divorce Decree (if previously married)</li>
            <li>Death Certificate (if widow/widower)</li>
          </ul>

          <h2 className="mt-12">Police Protection in Inter Caste Marriage</h2>
          <p>कई बार Inter Caste Marriage करने वाले couples को family या society से threats मिलते हैं। ऐसे में हमारी ओर से High Court या Police Commissioner Office में Protection Application file करवाई जाती है ताकि आपकी सुरक्षा सुनिश्चित हो सके।</p>
          <p>Legal protection मिलने के बाद किसी को भी आपकी शादी या साथ रहने के अधिकार में हस्तक्षेप करने का हक नहीं होता।</p>

          <h2 className="mt-12">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Same-Day Court Marriage & Certificate</li>
            <li>✅ Legal Protection Assistance</li>
            <li>✅ Expert Lawyers for Marriage Law</li>
            <li>✅ 100% Confidential Process</li>
            <li>✅ Arya Samaj & Special Marriage Act Support</li>
            <li>✅ Online & Offline Documentation Facility</li>
          </ul>
          <p className="mt-4">हम आपकी शादी को पूरी तरह से hassle-free और legal बनाते हैं ताकि आपको किसी भी तरह की social या legal परेशानी का सामना न करना पड़े।</p>

          <h2 className="mt-12">Your Trusted Legal Partner</h2>
          <p>अगर आप Jaipur या Rajasthan में हैं और Inter Caste Marriage करना चाहते हैं, तो हमारी legal team आपको complete end-to-end support देती है। हमारा Office Jaipur District Court और Rajasthan High Court दोनों के पास स्थित है।</p>
          <p><strong>Call: 7597497063</strong></p>
          <p><strong>Website: www.LegalSolutionsJaipur.com</strong></p>

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
            Inter Caste Marriage आज एक progressive और socially accepted concept बन चुका है। अगर आप अपने partner से सच्चा प्यार करते हैं और समाज की परवाह किए बिना legal शादी करना चाहते हैं, तो हम आपकी पूरी प्रक्रिया को आसान, सुरक्षित और कानूनी बनाएंगे।
          </p>
          <p>
            हम आपकी शादी के हर step पर legal support, certificate, और protection की पूरी जिम्मेदारी लेते हैं। बस एक call करें – और अपनी नई जिंदगी की शुरुआत करें legally और safely।
          </p>

          <Button asChild size="lg" className="mt-6">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 7597497063
            </a>
          </Button>
          <p className="mt-2 text-sm">Visit: www.LegalSolutionsJaipur.com</p>

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
