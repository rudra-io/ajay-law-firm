
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck, FileText, Scale, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const faqs = [
    { question: "Q1. Bail लेने के लिए किन documents की आवश्यकता होती है?", answer: "👉 FIR copy, ID proof, address proof, case details, और arrest notice (अगर मिला हो)।" },
    { question: "Q2. क्या हर केस में bail मिल सकती है?", answer: "👉 नहीं, यह case की gravity और offence की nature पर depend करता है। Court हर case को अलग-अलग grounds पर देखती है।" },
    { question: "Q3. क्या anticipatory bail और regular bail एक ही होती हैं?", answer: "👉 नहीं, Anticipatory Bail arrest से पहले ली जाती है जबकि Regular Bail arrest के बाद apply होती है।" },
    { question: "Q4. क्या High Court में सीधे bail apply की जा सकती है?", answer: "👉 हाँ, लेकिन आमतौर पर पहले Session Court में आवेदन किया जाता है, फिर जरूरत पड़ने पर High Court में appeal की जाती है।" },
    { question: "Q5. क्या bail मिलने के बाद भी case खत्म हो जाता है?", answer: "👉 नहीं, bail का मतलब केवल temporary release है। Case की सुनवाई (trial) आगे जारी रहती है।" },
    { question: "Q6. क्या urgent bail cases handle करता है?", answer: "👉 हाँ, हमारी टीम urgent and same-day bail filings के लिए उपलब्ध रहती है।" }
];

const bailTypes = [
    { title: "Anticipatory Bail (Section 438 CrPC)", description: "यह तब apply की जाती है जब किसी व्यक्ति को arrest से पहले ही डर हो कि पुलिस उसे गिरफ़्तार कर सकती है।", note: "👉 हमारी टीम इस तरह के मामलों में आपकी ओर से Session Court या High Court में bail file करती है।" },
    { title: "Regular Bail (Section 437 & 439 CrPC)", description: "Regular Bail arrest के बाद apply की जाती है। जब police किसी व्यक्ति को custody में ले लेती है, तो वो कोर्ट से release के लिए Regular Bail की मांग कर सकता है।" },
    { title: "Interim Bail", description: "Interim bail अस्थायी (temporary) राहत होती है जो final bail order आने तक दी जाती है। यह अक्सर urgent protection के लिए apply की जाती है।" }
];

const caseSpecialties = ["NDPS Act Cases", "Domestic Violence & Family Disputes", "Cyber Crime Cases", "Financial Fraud & Cheating Cases", "Dowry & Matrimonial Disputes", "Property & Forgery Cases", "POCSO & Juvenile Cases", "Bailable & Non-Bailable Offences"];
const legalProcess = ["Case Consultation & Assessment", "Drafting of Bail Application", "Filing before Court", "Argument & Representation", "Final Bail Order & Compliance"];

export default function BailCasesPage() {
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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Bail Cases</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bail एक ऐसा कानूनी अधिकार है जो किसी व्यक्ति को गिरफ्तारी के बाद या पहले, कोर्ट से अपनी रिहाई के लिए मिलने वाली सुरक्षा प्रदान करता है। हमारी criminal law expert team हर प्रकार के bail matters में clients को legal support देती है।
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
              </a>
            </Button>
          </div>

          <Tabs defaultValue="types" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="inline-flex">
                <TabsTrigger value="types">Types of Bail</TabsTrigger>
                <TabsTrigger value="specialties">Our Specialties</TabsTrigger>
                <TabsTrigger value="process">Our Process</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            
            <TabsContent value="types" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Types of Bail (बेल के प्रकार)</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        {bailTypes.map((bail, index) => (
                            <div key={index}>
                                <h4 className="font-semibold text-foreground">{bail.title}</h4>
                                <p className="text-muted-foreground">{bail.description}</p>
                                {bail.note && <p className="text-sm text-primary mt-1">{bail.note}</p>}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="specialties" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Our Role</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">हम निम्न प्रकार के criminal bail cases में विशेषज्ञता रखते हैं:</p>
                        <div className="grid grid-cols-2 gap-4">
                        {caseSpecialties.map((specialty, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{specialty}</span>
                            </div>
                        ))}
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="process" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Our Legal Process</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        {legalProcess.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-foreground">{`Step ${index + 1}: ${step}`}</h4>
                                </div>
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
            <h2 className="mt-12">Bail क्या है और क्यों ज़रूरी है?</h2>
            <p>जब किसी व्यक्ति को police arrest करती है या arrest करने की संभावना होती है, तब bail का मतलब होता है कि कोर्ट से अनुमति लेकर वह व्यक्ति कुछ शर्तों (conditions) के साथ arrest से छूट या release पा सकता है। Bail का उद्देश्य यह है कि व्यक्ति की स्वतंत्रता (freedom) बनी रहे, जबकि investigation या trial process जारी रहे।</p>
            
            <h2 className="mt-12">Why Choose Us?</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Experienced Criminal Law Team</li>
                <li>Rajasthan High Court & District Courts में Regular Practice</li>
                <li>Transparent Process & Genuine Legal Advice</li>
                <li>Fast Drafting & Bail Filing Support</li>
                <li>24×7 Legal Assistance (Emergency Bail Cases)</li>
            </ul>
            <p>हमारी टीम हर client के case को utmost confidentiality और professionalism के साथ handle करती है।</p>

            <h2 className="mt-12">Contact for Bail Assistance</h2>
            <p>अगर आप या आपका कोई परिचित police custody या arrest threat का सामना कर रहा है, तो तुरंत legal help प्राप्त करें। हमारी टीम हर समय आपकी सहायता के लिए तैयार है।</p>
            <p>📱 Call / WhatsApp: 7597497063</p>
            <p>🌐 Website: www.LegalSolutionsJaipur.com</p>
            <p>📍 Location: Jaipur, Rajasthan</p>

            <h2 className="mt-12">Conclusion</h2>
            <p>Bail एक constitutional right है जो व्यक्ति की स्वतंत्रता की रक्षा करता है। अगर आप किसी criminal case में फंसे हैं या arrest का डर है, तो हमारी विशेषज्ञ टीम से तुरंत संपर्क करें।</p>
            <p className="mt-2 text-sm">Visit: www.LegalSolutionsJaipur.com</p>
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
