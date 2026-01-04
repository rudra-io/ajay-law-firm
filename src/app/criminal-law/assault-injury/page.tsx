
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. Section 323 IPC के तहत क्या सज़ा होती है?",
        answer: "Section 323 IPC के तहत 1 साल तक की सज़ा या जुर्माना या दोनों हो सकते हैं।"
    },
    {
        question: "Q2. क्या Assault केस में जमानत मिल सकती है?",
        answer: "हाँ, अधिकांश मामलों में यह bailable offence होता है, लेकिन अगर चोट गंभीर हो तो court discretion लागू होता है।"
    },
    {
        question: "Q3. क्या 325 IPC Non-Bailable है?",
        answer: "Section 325 IPC (grievous hurt) non-bailable offence है, जिसमें court से bail लेनी होती है।"
    },
    {
        question: "Q4. क्या Victim को Compensation मिल सकता है?",
        answer: "हाँ, अगर चोट गंभीर है और केस साबित हो जाता है तो victim को compensation दिया जा सकता है।"
    },
    {
        question: "Q5. हम कैसे मदद कर सकते हैं?",
        answer: "हम FIR, bail, defence, aur court trial process me expert support provide karte hain — ensuring justice aur legal protection dono।"
    }
];

export default function AssaultInjuryPage() {
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
          <h1 className="border-b border-primary/20 pb-4">Assault & Injury</h1>
          <p>
            Section 323, 324, 325 IPC के तहत आने वाले Assault और Injury मामलों में हमारी expert legal team legal advice, bail assistance और court representation प्रदान करती है — चाहे आप पीड़ित हों या आरोपी।
          </p>
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className='mt-8'>
            Assault aur Injury cases ऐसे मामलों में आते हैं जहाँ किसी व्यक्ति को जानबूझकर शारीरिक नुकसान (physical harm) पहुँचाया जाता है। Indian Penal Code (IPC) की Sections 323, 324, 325, और 326 इन अपराधों को define करती हैं।
          </p>
          <p>
            हमारी team ऐसे मामलों में both victim aur accused को professional legal assistance प्रदान करती है, ताकि न्याय सुनिश्चित हो सके।
          </p>

          <h2 className='mt-12'>IPC Provisions for Assault & Injury</h2>
          <ul className='list-disc pl-5 space-y-2'>
            <li><strong>Section 323 IPC – Voluntarily causing hurt (जानबूझकर चोट पहुंचाना)</strong><br/>👉 Punishment: 1 साल तक की कैद या जुर्माना या दोनों।</li>
            <li><strong>Section 324 IPC – Dangerous weapon से चोट पहुँचाना</strong><br/>👉 Punishment: 3 साल तक की कैद या fine या दोनों।</li>
            <li><strong>Section 325 IPC – Grievous hurt (गंभीर चोट) पहुंचाना</strong><br/>👉 Punishment: 7 साल तक की कैद और जुर्माना।</li>
            <li><strong>Section 326 IPC – Dangerous weapon या acid से गंभीर चोट</strong><br/>👉 Punishment: आजीवन कारावास तक संभव।</li>
          </ul>

          <h2 className='mt-12'>Common Assault & Injury Case Examples</h2>
          <ul className='list-disc pl-5 space-y-2'>
            <li>Personal fight ya family dispute me marpeet</li>
            <li>Road rage ya public assault</li>
            <li>Property dispute ke dauran violence</li>
            <li>Domestic violence ke case</li>
            <li>Political ya business rivalry me attack</li>
          </ul>

          <h2 className='mt-12'>Legal Help from Us</h2>
          <p>We handle the complete legal process for you — chahe aap FIR file karwana chahte ho ya bail lena chahte ho.</p>
          <ul className='list-disc pl-5 space-y-2'>
              <li><strong>FIR Filing & Police Complaint Assistance</strong> – Agar aap victim hain, hum aapke behalf par सही legal complaint draft karte hain।</li>
              <li><strong>Bail & Defence Strategy</strong> – Agar aap par आरोप लगे हैं, hum anticipatory aur regular bail file karte hain aur proper defence prepare karte hain।</li>
              <li><strong>Court Representation</strong> – Sessions Court, District Court aur High Court me skilled advocacy ke saath representation।</li>
              <li><strong>Medical & Evidence Collection</strong> – MLC (Medical Legal Certificate), eyewitness aur video proof ke through case ko मजबूत बनाना।</li>
              <li><strong>Compensation & Settlement Guidance</strong> – Victim cases me injury compensation aur legal remedies ke liye full guidance।</li>
          </ul>

          <h2 className='mt-12'>Why Choose Us</h2>
          <ul className='list-disc pl-5 space-y-2'>
            <li>Expert criminal lawyers for assault & injury matters</li>
            <li>Deep knowledge of IPC sections 323, 324, 325, 326</li>
            <li>Confidential & client-focused approach</li>
            <li>Emergency legal support available 24×7</li>
          </ul>
            <Button asChild size="lg" className="mt-4">
                <a href="tel:7597497063">
                    <Phone className="mr-2 h-5 w-5" />
                     Call us now at 7597497063
                </a>
            </Button>
          
          <h2 className='mt-12'>Who Can Contact Us</h2>
          <ul className='list-disc pl-5 space-y-2'>
            <li>Victims of physical assault or injury</li>
            <li>Accused persons needing bail or defence</li>
            <li>Families involved in domestic or neighbourhood fights</li>
            <li>Clients facing false assault allegations</li>
          </ul>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Contact Us</h3>
            <p className='mt-2'>अगर आप मारपीट, चोट या झगड़े से जुड़े केस (Assault & Injury Case) में फंसे हैं — तो सही कानूनी सलाह और अनुभवी वकील का साथ आपको सुरक्षित रख सकता है।</p>
              <Button asChild size="lg" className="mt-4">
                  <a href="tel:7597497063">
                      <Phone className="mr-2 h-5 w-5" />
                      Expert Legal Advice | Quick Bail | Court Representation
                  </a>
              </Button>
          </div>

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
          <p>
            Assault & Injury (मारपीट और चोट के मामले) केवल शारीरिक हिंसा नहीं, बल्कि कानूनी दृष्टि से एक गंभीर अपराध है। चाहे आप पर झूठा आरोप लगा हो या आप सच में victim हों, हम आपके साथ हर step पर legal support देते हैं।
          </p>
          <Button asChild size="lg" className="mt-4">
                <a href="tel:7597497063">
                    <Phone className="mr-2 h-5 w-5" />
                    Call now – 7597497063 for expert legal help
                </a>
            </Button>
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

    