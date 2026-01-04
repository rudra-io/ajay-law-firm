
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Metadata } from 'next';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const metadata: Metadata = {
    title: "Inheritance & Will Lawyer | Succession Certificate Help",
    description: "Legal support for will disputes, partition suits, succession certificates & inheritance matters.",
    alternates: { canonical: "https://www.LegalSolutionsJaipur.com/civil-law/inheritance-will-cases" }
};

const faqs = [
    { question: "Q1. वसीयत (Will) क्या होती है?", answer: "वसीयत एक कानूनी दस्तावेज़ है जिसमें एक व्यक्ति अपनी मृत्यु के बाद अपनी संपत्ति को अपने उत्तराधिकारियों के बीच कैसे बांटा जाएगा, यह बताता है।" },
    { question: "Q2. अगर किसी व्यक्ति की बिना वसीयत के मृत्यु हो जाए तो क्या होता है?", answer: "अगर कोई वसीयत नहीं है, तो संपत्ति का बंटवारा भारतीय उत्तराधिकार अधिनियम, 1925 या संबंधित व्यक्तिगत कानूनों (जैसे हिंदू उत्तराधिकार अधिनियम) के अनुसार होता है।" },
    { question: "Q3. क्या वसीयत को चुनौती दी जा सकती है?", answer: "हाँ, अगर यह साबित हो जाए कि वसीयत दबाव में, धोखे से, या जब व्यक्ति मानसिक रूप से स्वस्थ नहीं था, तब बनवाई गई थी, तो उसे अदालत में चुनौती दी जा सकती है।" },
    { question: "Q4. प्रोबेट (Probate) क्या है?", answer: "प्रोबेट अदालत द्वारा जारी किया गया एक प्रमाण पत्र है जो वसीयत की वैधता को प्रमाणित करता है और निष्पादक (Executor) को संपत्ति वितरित करने का अधिकार देता है।" },
    { question: "Q5. हम विरासत मामलों में कैसे मदद कर सकते हैं?", answer: "हम वसीयत का मसौदा तैयार करने, प्रोबेट याचिका दायर करने, और उत्तराधिकार से संबंधित विवादों को सुलझाने में विशेषज्ञ कानूनी सलाह और प्रतिनिधित्व प्रदान करते हैं।" }
];

const caseTypes = ["Will Drafting & Registration", "Probate & Letters of Administration", "Succession Certificate", "Partition Suits for Ancestral Property", "Challenging a Forged Will", "Disputes among Legal Heirs"];
const legalProcess = ["Consultation & Document Review", "Drafting of Will/Petition", "Filing in the Competent Court", "Evidence and Hearing", "Final Order/Decree", "Execution of Will/Partition"];

export default function InheritanceWillCasesPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/civil-law" className="hover:text-primary">Civil Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Service Details</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Inheritance & Will Cases</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Legal guidance in inheritance and will disputes, safeguarding the rights of beneficiaries and ensuring proper execution of testaments. We make complex succession matters simple and fair.
            </p>
            <Button asChild size="lg" className="mt-6">
                <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call US: 7597497063
                </a>
            </Button>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg mb-12">
            <Image
              src="https://picsum.photos/seed/inheritance/1200/675"
              alt="Inheritance and Will Cases"
              fill
              className="object-cover"
              data-ai-hint="family estate"
            />
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="inline-flex">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="process">Legal Process</TabsTrigger>
                  <TabsTrigger value="why-us">Why Us?</TabsTrigger>
                  <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <TabsContent value="overview" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Navigating Succession and Inheritance</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Inheritance and succession laws govern how a person's property is distributed after their death. A well-drafted Will can prevent future disputes, but often, families find themselves in complex legal battles over ancestral or self-acquired property. We specialize in resolving these sensitive matters with expertise and compassion.</p>
                        <h4 className="font-semibold text-foreground">Types of Cases We Handle:</h4>
                         <div className="grid grid-cols-2 gap-4">
                            {caseTypes.map((type, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground">{type}</span>
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
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">{`Step ${index + 1}: ${step}`}</h4>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="why-us" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Why Choose Us?</CardTitle></CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {["Expertise in Succession Laws", "Sensitive & Confidential Handling", "Clear Guidance on Property Rights", "Strong Court Representation", "Focus on Amicable Settlements"].map((item, index) => (
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
