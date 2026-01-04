
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck, FileText, Scale, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const faqs = [
    { question: "Q1. Criminal cases में bail कब apply की जा सकती है?", answer: "👉 Arrest से पहले anticipatory bail और arrest के बाद regular bail apply की जाती है।" },
    { question: "Q2. क्या हर criminal offence में bail मिल सकती है?", answer: "👉 यह offence की nature और gravity पर depend करता है; कुछ serious offences में Court discretion के अनुसार bail decide करती है।" },
    { question: "Q3. क्या High Court में direct bail apply की जा सकती है?", answer: "👉 हाँ, लेकिन आमतौर पर पहले Session Court में और बाद में आवश्यकता होने पर High Court में।" },
    { question: "Q4. क्या bail का मतलब case खत्म होना है?", answer: "👉 नहीं, bail केवल temporary relief है। Case की सुनवाई (trial) जारी रहती है।" },
    { question: "Q5. क्या हम urgent bail cases handle करते हैं?", answer: "👉 हाँ, हमारी team same-day bail filing और urgent legal relief में विशेषज्ञ है।" }
];

const bailTypes = [
    { title: "Anticipatory Bail (Section 438 CrPC)", description: "यह bail arrest से पहले apply की जाती है। जब किसी व्यक्ति को आशंका होती है कि उस पर false case या FIR दर्ज हो सकती है, तो वह anticipatory bail के लिए आवेदन कर सकता है।" },
    { title: "Regular Bail (Section 437 & 439 CrPC)", description: "यह तब apply की जाती है जब व्यक्ति arrest हो चुका हो। Regular bail से उसे custody से release कराया जाता है।" },
    { title: "Interim Bail", description: "यह temporary protection होती है, जो तब तक दी जाती है जब तक final bail order पास नहीं होता।" }
];

const expertCases = ["NDPS (Drugs) Cases", "Murder / Attempt to Murder Cases", "Cheating / Fraud Cases", "Dowry & Matrimonial Disputes", "Domestic Violence Cases", "Cyber Crime & IT Act Offences", "Property Disputes & Forgery", "POCSO (Child Protection) Cases", "Economic Offences"];
const processSteps = ["Case Study", "Drafting of Bail Application", "Filing Before Court", "Arguments & Representation", "Final Order & Compliance"];

export default function BailUnderCriminalLawPage() {
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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Bail Under Criminal Law</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bail Under Criminal Matters में हम आपकी legal protection सुनिश्चित करते हैं। हमारी expert team Anticipatory Bail, Regular Bail, और Interim Bail में त्वरित कानूनी सहायता प्रदान करती है।
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
                <TabsTrigger value="expertise">Our Expertise</TabsTrigger>
                <TabsTrigger value="process">Our Process</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <TabsContent value="types" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Types of Bail in Criminal Matters</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        {bailTypes.map((bail, index) => (
                            <div key={index}>
                                <h4 className="font-semibold text-foreground">{bail.title}</h4>
                                <p className="text-muted-foreground">{bail.description}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="expertise" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Criminal Bail Cases जिनमें हम Expert हैं</CardTitle></CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                        {expertCases.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </div>
                        ))}
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="process" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Our Criminal Bail Process</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        {processSteps.map((step, index) => (
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
            <h2 className="mt-12">Criminal Matters में Bail का महत्व</h2>
            <p>Criminal cases में arrest किसी व्यक्ति के जीवन को पूरी तरह प्रभावित कर सकता है। इसलिए Bail का उद्देश्य व्यक्ति को arrest से बचाना और उसे कानूनी प्रक्रिया में भाग लेने का मौका देना है, ताकि justice fair और transparent रहे।</p>

            <h2 className="mt-12">Why Choose Us?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Highly Experienced Criminal Law Team</li>
              <li>Rajasthan High Court & District Court Practice</li>
              <li>Fast Bail Filing & Legal Strategy</li>
              <li>Transparent Process & Genuine Guidance</li>
              <li>24×7 Legal Assistance (Emergency Bail)</li>
            </ul>
            <p>हमारी टीम हर केस को ध्यानपूर्वक handle करती है और arrest या custody से पहले legal protection दिलाने का हर प्रयास करती है।</p>

            <h2 className="mt-12">Contact for Criminal Bail Help</h2>
            <p>अगर आप किसी criminal case में फंसे हैं या arrest का डर है, तो तुरंत हमारी टीम से संपर्क करें। हम आपकी legal protection को सर्वोच्च प्राथमिकता देते हैं।</p>
            <p>📱 Call / WhatsApp: 7597497063</p>
            <p>🌐 Website: www.LegalSolutionsJaipur.com</p>
            <p>📍 Location: Jaipur, Rajasthan</p>

            <h2 className="mt-12">Conclusion</h2>
            <p>Criminal matters में bail लेना एक कानूनी अधिकार है जो आपकी स्वतंत्रता की रक्षा करता है। अगर आप किसी false accusation या criminal case में फंसे हैं, तो हमारी team आपकी मदद के लिए तैयार है।</p>
            <p className="mt-2 text-sm">Visit: www.LegalSolutionsJaipur.com</p>
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
