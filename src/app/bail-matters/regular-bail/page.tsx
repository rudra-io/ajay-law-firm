
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck, FileText, Scale, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const faqs = [
    { question: "Q1. Regular Bail कब लगती है?", answer: "जब व्यक्ति को arrest कर लिया जाए और वह कोर्ट से जमानत चाहता हो।" },
    { question: "Q2. कितने समय में बेल मिल जाती है?", answer: "कई मामलों में उसी दिन, कुछ में 1–3 दिन लगते हैं।" },
    { question: "Q3. क्या Murder, Rape, NDPS जैसे मामलों में बेल मिल सकती है?", answer: "हाँ, लेकिन case-to-case basis पर depends करता है और strong arguments की जरूरत होती है।" },
    { question: "Q4. बेल होने के बाद क्या अलग से कोर्ट जाना पड़ता है?", answer: "हाँ, Court की date पर पेश होना जरूरी है।" },
    { question: "Q5. क्या Regular Bail और Anticipatory Bail अलग हैं?", answer: "हाँ, Regular Bail arrest के बाद, Anticipatory Bail arrest के पहले।" }
];

const bailStages = [
    { stage: "Arrest के बाद", description: "आरोपी को पकड़ने के बाद बेल लगती है" },
    { stage: "Magistrate Court", description: "अधिकतर जिलों में बेल यहां लगती है" },
    { stage: "Sessions Court", description: "Serious offences में Sessions Court" },
    { stage: "High Court", description: "जब निचली अदालत बेल खारिज कर दे" }
];

const bailProcess = [
    { step: "Case Study", details: ["FIR की धारा देखना", "Sections Bailable/Non-Bailable", "Evidence कमजोरी"] },
    { step: "Bail Application Drafting", details: ["False implication", "कोई criminal background नहीं", "Arrest unnecessary", "Cooperation assured", "No risk of absconding"] },
    { step: "Court Filing", details: ["Magistrate Court", "Sessions Court", "जहां उपयुक्त हो, वहीं आवेदन लगाया जाता है।"] },
    { step: "Bail Arguments", details: ["Personal liberty (Article 21)", "Nature of offence", "Evidence contradiction", "Investigation complete", "आरोप सिद्ध नहीं"] },
    { step: "Bail Order", details: ["बेल मिलने पर शर्तें तय की जाती हैं:", "Personal Bond", "Surety", "अदालत में पेशी"] },
];

const offencesCoveredIPC = ["मारपीट (323, 324, 325)", "धमकी (506)", "घर में घुसकर मारपीट (452)", "दहेज (498A)", "चोरी, लूट, डकैती", "धोखाधड़ी (420)", "Cheque Bounce 138 NI Act", "Cyber Fraud Cases", "Sexual Offences (354, 376 – केस की प्रकृति अनुसार)", "Property Disputes से जुड़े Offences", "Attempt to Murder (307)", "NDPS Act (कम मात्रा और प्रोसीजरल ग्राउंड)"];
const offencesCoveredSpecial = ["NDPS Act", "POCSO Act", "Arms Act", "SC/ST Act", "IT Act", "Motor Vehicle Act"];
const offencesCoveredFamily = ["498A false case", "Domestic Violence बेल", "Family disputes से जुड़े FIR"];

export default function RegularBailPage() {
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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Regular Bail</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Regular Bail (रेगुलर बेल) क्या होता है? जब किसी व्यक्ति को पुलिस किसी अपराध में गिरफ्तार कर लेती है, तो अदालत से उसकी रिहाई के लिए जो आवेदन किया जाता है, उसे Regular Bail कहा जाता है।
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call for Immediate Bail Help: 7597497063
              </a>
            </Button>
          </div>

          <Tabs defaultValue="offences" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="inline-flex">
                <TabsTrigger value="offences">Offences Covered</TabsTrigger>
                <TabsTrigger value="process">Procedure</TabsTrigger>
                <TabsTrigger value="why-us">Why Us?</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <TabsContent value="offences" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Offences Covered for Regular Bail</CardTitle></CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-semibold text-lg text-foreground mb-2">🔹 IPC Offences</h3>
                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                {offencesCoveredIPC.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground mb-2">🔹 Special Acts</h3>
                             <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                {offencesCoveredSpecial.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-foreground mb-2">🔹 Family Disputes</h3>
                             <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                {offencesCoveredFamily.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="process" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Regular Bail Procedure (रेगुलर बेल प्रक्रिया)</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        {bailProcess.map((item, index) => (
                            <div key={index} className="p-4 border rounded-lg">
                                <h3 className="font-semibold text-lg text-foreground">{`Step ${index + 1}: ${item.step}`}</h3>
                                <ul className='list-disc pl-5 space-y-1 mt-2 text-muted-foreground'>
                                    {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="why-us" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Why Choose Us?</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">We are known as one of the Top Criminal Lawyers in Jaipur for bail matters.</p>
                        <ul className="space-y-3">
                            {["तेज़ और प्रभावी बेल प्रक्रिया", "Drafting से Argument तक पूरा प्रोसेस", "High Court, Sessions Court & District Court Expertise", "Non-Bailable और Serious Offence बेल विशेषज्ञ", "24×7 Legal Support – Emergency Bail Cases"].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="font-medium text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
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
            <h2 className="mt-12">Why Regular Bail is Important?</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>घर वापस जाने की अनुमति</li>
                <li>नौकरी/व्यापार जारी रखने का मौका</li>
                <li>कोर्ट में पेशी के समय उपस्थित रहने की शर्त</li>
                <li>मानसिक, सामाजिक और आर्थिक नुकसान से बचाव</li>
            </ul>
            <p>बिना रेगुलर बेल, व्यक्ति को जेल हिरासत में ही रहना पड़ता है।</p>

            <h2 className="mt-12">Regular Bail कब और कहाँ लगती है?</h2>
            <Table>
                <TableHeader><TableRow><TableHead>Stage</TableHead><TableHead>Description</TableHead></TableRow></TableHeader>
                <TableBody>
                    {bailStages.map((item, index) => (
                        <TableRow key={index}><TableCell className="font-medium">{item.stage}</TableCell><TableCell>{item.description}</TableCell></TableRow>
                    ))}
                </TableBody>
            </Table>
            <p className="mt-4">हम आपकी बेल पहले ही प्रयास में मंज़ूर कराने का प्रयास करते हैं।</p>
            
            <h2 className="mt-12">Conclusion</h2>
            <p>Regular Bail किसी भी आरोपी की आज़ादी, सम्मान, और कानूनी अधिकारों का पहला और महत्वपूर्ण कदम है। सही Criminal Lawyer आपका केस मजबूत बनाता है और बेल जल्दी मंज़ूर कराता है।</p>
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

    
