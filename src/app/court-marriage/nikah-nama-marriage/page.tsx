
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. क्या Nikah Nama Court में register कराना जरूरी है?",
        answer: "👉 हां, अगर आप चाहते हैं कि आपकी शादी legal record में दर्ज हो, तो registration जरूरी है।"
    },
    {
        question: "Q2. क्या Interfaith Nikah हो सकता है?",
        answer: "👉 हां, अगर दोनों में से कोई एक Islam accept कर ले, तो Kazi के सामने Nikah हो सकता है।"
    },
    {
        question: "Q3. Nikah Certificate मिलने में कितना समय लगता है?",
        answer: "👉 Arya Samaj या Kazi से same-day Nikah Nama मिल जाता है, और Court Certificate आमतौर पर 2-3 दिनों में तैयार हो जाता है।"
    },
    {
        question: "Q4. क्या NRI Couples भी Jaipur में Nikah कर सकते हैं?",
        answer: "👉 हां, NRI couples भी India में legally Nikah कर सकते हैं। हम attested documents में मदद करते हैं।"
    },
    {
        question: "Q5. अगर परिवार विरोध करे तो क्या protection मिल सकता है?",
        answer: "👉 हां, हमारी team Court के माध्यम से Legal Protection दिलवाती है ताकि आपकी शादी सुरक्षित रहे।"
    }
];

export default function NikahNamaMarriagePage() {
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
          
          <h2>Nikah Nama Marriage</h2>
          <p>
            We provide Nikah Nama Legal Services for Muslim Marriage Registration, Mehr Agreement & Court Certificate. 
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Nikah (निकाह) इस्लाम में विवाह का पवित्र अनुबंध (sacred contract) होता है। यह केवल एक धार्मिक प्रक्रिया नहीं, बल्कि एक कानूनी समझौता (legal contract) भी है, जिसे दोनों पक्ष – दूल्हा (Groom) और दुल्हन (Bride) – आपसी सहमति से स्वीकार करते हैं।
          </p>
          <p>
            We make the entire legal process for your Nikah Nama (Marriage Agreement) and Marriage Registration under Muslim Marriage Act easy. हम आपकी शादी को legally valid बनाने के लिए सभी documents, affidavit, और certificate की व्यवस्था same-day में करते हैं।
          </p>

          <h2 className="mt-12">What is Nikah Nama (निकाहनामा)?</h2>
          <p>
            Nikah Nama एक written marriage agreement होता है जो मुस्लिम शादी का सबसे महत्वपूर्ण हिस्सा है। इसमें Groom और Bride दोनों के बीच कुछ शर्तें (conditions) और जिम्मेदारियाँ (rights & duties) तय की जाती हैं, जैसे –
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Mehr (मेहर) की राशि</li>
            <li>पति-पत्नी के अधिकार (Rights of Husband & Wife)</li>
            <li>Mutual consent (आपसी सहमति)</li>
            <li>Witnesses के signatures</li>
          </ul>
          <p>Nikah Nama, Kazi (क़ाज़ी) द्वारा तैयार किया जाता है और यह मुस्लिम Personal Law के अंतर्गत वैध माना जाता है।</p>

          <h2 className="mt-12">Legal Importance of Nikah Nama in India</h2>
          <p>
            भारत में Muslim Marriage एक Civil Contract माना जाता है। इसलिए Nikah Nama केवल धार्मिक दस्तावेज नहीं बल्कि Legal Document भी है। अगर किसी विवाद या separation का मामला हो, तो यही दस्तावेज अदालत (Court) में सबूत के रूप में काम आता है।
          </p>
          <p>
            We help you prepare an authentic Nikah Nama that is legally acceptable in Court. हम आपके Nikah के बाद Marriage Registration Certificate भी तैयार करवाते हैं, ताकि आपकी शादी का सरकारी रिकॉर्ड में उल्लेख हो सके।
          </p>

          <h2 className="mt-12">Procedure of Nikah (Marriage Process)</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>Bride & Groom Consent:</strong> Nikah से पहले Groom और Bride दोनों की रज़ामंदी (mutual consent) सबसे जरूरी होती है।</li>
            <li><strong>Selection of Kazi and Witnesses:</strong> दोनों पक्षों की उपस्थिति में एक authorized Kazi Nikah की रस्में पूरी कराता है। कम से कम दो गवाह (Witnesses) का होना अनिवार्य है।</li>
            <li><strong>Mehr Agreement:</strong> Mehr (मेहर) वह रकम होती है जो Groom द्वारा Bride को दी जाती है – यह Nikah Nama में लिखी जाती है।</li>
            <li><strong>Signing of Nikah Nama:</strong> Nikah की रस्म पूरी होने के बाद, Groom, Bride, Witnesses, और Kazi सभी Nikah Nama पर हस्ताक्षर करते हैं।</li>
            <li><strong>Registration of Nikah:</strong> Nikah Nama साइन होने के बाद इसे Marriage Registrar Office में जमा किया जाता है, जहां से आपको एक Legal Marriage Certificate प्राप्त होता है।</li>
          </ol>

          <h2 className="mt-12">Documents Required for Nikah Nama & Registration</h2>
          <p>Bride & Groom दोनों के लिए:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Aadhar Card / Passport / Voter ID (Address Proof)</li>
            <li>Birth Certificate / School Certificate (Age Proof)</li>
            <li>Passport Size Photos (5 each)</li>
            <li>Nikah Nama (Signed by Kazi & Witnesses)</li>
            <li>Witness ID Proof (2 Persons)</li>
            <li>Muslim Affidavit (Religious declaration)</li>
            <li>Divorce Decree (if applicable)</li>
            <li>Death Certificate (if widow/widower)</li>
          </ul>

          <h2 className="mt-12">Our Legal Assistance Includes:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Nikah Nama Drafting & Verification</li>
            <li>Muslim Marriage Registration under Local Authority</li>
            <li>Mehr (Mahr) Agreement Documentation</li>
            <li>Conversion Affidavit (if interfaith marriage)</li>
            <li>Marriage Certificate Issuance</li>
            <li>Legal Protection & Police Support (if needed)</li>
            <li>Court Registration under Special Marriage Act (Optional)</li>
          </ul>
          
          <h2 className="mt-12">Nikah Nama Registration in Jaipur</h2>
          <p>अगर आपने Jaipur या Rajasthan में Nikah किया है, तो आप उसे Marriage Registrar Office में register करा सकते हैं।</p>
          <p>We help you to get your Nikah Nama registered in Court and get an official Marriage Certificate which is valid everywhere – like passport office, visa process, bank, or legal documents में।</p>

          <h2 className="mt-12">Benefits of Registering Nikah Nama</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Legal Validity:</strong> Court में legally recognized होता है।</li>
            <li><strong>Proof of Marriage:</strong> किसी भी legal या immigration process में काम आता है।</li>
            <li><strong>Women Rights Protection:</strong> तलाक, maintenance या inheritance में legal evidence के रूप में helpful।</li>
            <li><strong>No Future Dispute:</strong> Legal clarity से विवादों की संभावना कम होती है।</li>
            <li><strong>Social Security:</strong> Government records में marriage legally protected रहती है।</li>
          </ul>
          
          <h2 className="mt-12">Nikah Nama for NRI Muslim Marriage</h2>
          <p>अगर आप NRI (Non-Resident Indian) हैं और भारत में या विदेश में Nikah कर रहे हैं, तो हम आपकी मदद करेंगे international format में Nikah Nama तैयार करवाने में।</p>
          <p>हम ensure करते हैं कि आपका document MEA (Ministry of External Affairs) और Embassy Attestation के लिए भी valid रहे। NRI couples के लिए हम online legal consultation, notarized affidavits, और certificate attestation की सुविधा भी देते हैं।</p>

          <h2 className="mt-12">Police Protection for Interfaith Nikah</h2>
          <p>अगर आपकी शादी में religion या caste difference है और family objection कर रही है, तो हम court के माध्यम से Legal Protection दिलवाने में सहायता करते हैं। आपका साथ रहने और शादी करने का अधिकार Article 21 – Right to Life & Liberty के तहत पूरी तरह सुरक्षित है।</p>
          
          <h2 className="mt-12">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Experienced Muslim Law Experts</li>
            <li>✅ Same-Day Nikah Nama & Certificate</li>
            <li>✅ Legal Protection from Court</li>
            <li>✅ Support for NRI & Interfaith Nikah</li>
            <li>✅ Online & Offline Legal Services</li>
            ✅ 100% Confidential & Hassle-Free Process
          </ul>
          <p className="mt-4">हमारे लिए हर शादी एक भरोसे का बंधन है। हम आपकी धार्मिक और कानूनी दोनों जरूरतों को पूरा करने के लिए समर्पित हैं।</p>


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
          <p>Nikah सिर्फ दो लोगों का मिलन नहीं, बल्कि एक sacred legal commitment है। अगर आप अपनी शादी को legally valid बनाना चाहते हैं, तो हम आपके लिए पूरी प्रक्रिया को आसान, सुरक्षित और authentic बनाते हैं।</p>
          <p>हम आपको Nikah Nama Drafting, Registration, Certificate, Legal Protection – सब कुछ same-day में उपलब्ध कराते हैं ताकि आप बिना किसी चिंता के अपनी नई जिंदगी की शुरुआत कर सकें।</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Contact Us</h3>
            <p className="mt-2 text-muted-foreground">अगर आप Nikah Nama या Muslim Marriage Registration करवाना चाहते हैं, तो आज ही संपर्क करें</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call/WhatsApp: 7597497063
              </a>
            </Button>
            <p className="mt-2 text-sm">🌐 www.LegalSolutionsJaipur.com</p>
            <p className="mt-2 text-sm">📍 96 Agra Road, Prem Nagar Jaipur, Rajasthan 302031</p>
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
