
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { faqs } from '@/lib/data/faqs';
import { CheckCircle2, ChevronRight, Gavel, ShieldCheck, Phone, Mail, FileText, Scale, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Metadata } from 'next';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const metadata: Metadata = {
    title: 'Anticipatory Bail Lawyer in Jaipur | Section 438 CrPC',
    description: 'Expert legal services for Anticipatory Bail in Jaipur. Protect yourself from arrest with our experienced lawyers. We handle pre-arrest bail under Section 438 CrPC. Call 7597497063.',
}

const conditions = [
    "Applicant investigation me cooperate karega.",
    "Evidence ya witness par koi prabhav nahi dalega.",
    "Court jab bhi bulaye, tab present hoga.",
    "Complainant ko threaten nahi karega."
];

const reasonsForRejection = [
    "NDPS Act (commercial quantity drugs)",
    "POCSO Act (sexual offence against minors)",
    "Terrorism related cases",
    "Serious offence with strong evidence"
];

const processSteps = [
    { title: "Case Discussion & Legal Advice", description: "Pehle hum aapka matter detail me samajhte hain — FIR, complaint, ya notice ke base par." },
    { title: "Drafting of Bail Petition", description: "Humari team aapke case ke hisaab se bail application draft karti hai jisme innocence aur cooperation show kiya jata hai." },
    { title: "Filing in Court", description: "Petition ko Session Court ya Rajasthan High Court Jaipur Bench me file kiya jata hai, situation ke hisaab se." },
    { title: "Interim Protection", description: "Court agar samjhe ki arrest ka immediate threat hai, to interim protection (temporary relief) mil sakta hai." },
    { title: "Final Hearing & Order", description: "Dono sides ke arguments ke baad, court anticipatory bail grant ya reject karti hai." }
];

export default function AnticipatoryBailPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/bail-matters" className="hover:text-primary">Bail Matters</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Service Details</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Anticipatory Bail</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Anticipatory Bail ek legal protection hai jisse kisi vyakti ko arrest hone se pehle hi bachav milta hai. Jab kisi vyakti ke khilaf FIR दर्ज होती hai ya hone wali hoti hai, aur usse darr hota hai ki police usse giraftar kar legi, to wo Section 438 of CrPC ke tahat anticipatory bail ke liye apply kar sakta hai.
            </p>
            <Button asChild size="lg" className="mt-6">
                <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
                </a>
            </Button>
          </div>

          <Tabs defaultValue="process" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="inline-flex">
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="conditions">Conditions</TabsTrigger>
                <TabsTrigger value="rejection">Rejection Reasons</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            
            <TabsContent value="process" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Anticipatory Bail Filing Process</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="conditions" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Important Conditions in Anticipatory Bail</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Court kuch terms and conditions ke saath bail grant karti hai, jaise:</p>
                        {conditions.map((condition, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{condition}</span>
                            </div>
                        ))}
                        <p className="text-muted-foreground">Agar applicant in conditions ka palan nahi karta, to court bail cancel bhi kar sakti hai.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            
            <TabsContent value="rejection" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Kab Anticipatory Bail Nahi Milti</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Kuch cases me anticipatory bail dena court ke liye appropriate nahi hota, jaise:</p>
                        {reasonsForRejection.map((reason, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <ShieldCheck className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{reason}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="faq" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Frequently Asked Questions</CardTitle></CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>

          <div className="prose prose-invert max-w-4xl mx-auto mt-12 prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
              <h2>Expert Team for Anticipatory Bail in Jaipur</h2>
              <p>
                Agar aap par false allegation lage hain, ya koi criminal complaint file hui hai, to hamari legal team aapke liye anticipatory aur regular bail file karti hai aur aapke defence ke liye proper legal strategy prepare karti hai.
              </p>
              <p>
                Hamari experienced team Rajasthan ke har district me, khaaskar Jaipur, Ajmer, Alwar, Jodhpur, Kota, Sikar me bail matters handle karti hai.
              </p>
              <p><strong>Location:</strong> Jaipur</p>
              <p><strong>Contact:</strong> 7597497063</p>
              <h2 className="mt-12">Conclusion</h2>
              <p>
                Agar aap par false FIR, domestic dispute, business fraud, ya criminal charge laga hai, to delay na karein. Hamari legal team anticipatory bail ke zariye aapko arrest hone se bachane ke liye taiyaar hai.
              </p>
              <p className="font-semibold">Fast filing | Expert Legal Support | Full Confidentiality</p>
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
