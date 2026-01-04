
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
    title: "Civil Litigation Lawyer | File & Defend Civil Suits",
    description: "Experienced civil litigation lawyers for property disputes, financial claims, agreement breaches & more.",
    alternates: { canonical: "https://www.LegalSolutionsJaipur.com/civil-law/civil-litigation" }
};

const faqs = [
    { question: "Q1. सिविल मुकदमा क्या होता है?", answer: "जब दो या दो से अधिक पक्षों के बीच संपत्ति, अनुबंध, या अधिकारों को लेकर कोई विवाद होता है, तो उसे सुलझाने के लिए दीवानी अदालत में जो केस दायर किया जाता है, उसे सिविल मुकदमा कहते हैं।" },
    { question: "Q2. सिविल केस फाइल करने के लिए पहला कदम क्या है?", answer: "सबसे पहला कदम विरोधी पक्ष को एक कानूनी नोटिस भेजना होता है। यदि नोटिस से समाधान नहीं होता है, तो अदालत में वाद (Plaint) दायर किया जाता है।" },
    { question: "Q3. क्या हर सिविल केस में कोर्ट जाना जरूरी है?", answer: "नहीं, कई मामले मध्यस्थता (Mediation) या आपसी समझौते (Settlement) से भी सुलझाए जा सकते हैं। हम हमेशा पहले इस विकल्प को प्राथमिकता देते हैं।" },
    { question: "Q4. सिविल मुकदमे में कितना समय लगता है?", answer: "यह केस की जटिलता, सबूतों और अदालत की प्रक्रिया पर निर्भर करता है। कुछ मामले कुछ महीनों में हल हो जाते हैं, जबकि कुछ में कई साल लग सकते हैं।" },
    { question: "Q5. हम सिविल मुकदमेबाजी में कैसे मदद करते हैं?", answer: "हमारी टीम कानूनी नोटिस भेजने से लेकर, केस फाइल करने, सबूत पेश करने और अदालत में आपका प्रतिनिधित्व करने तक हर कदम पर आपका साथ देती है।" }
];

const litigationAreas = ["Property Disputes", "Contract Enforcement", "Money Recovery Suits", "Injunction and Stay Orders", "Family and Inheritance Claims", "Landlord-Tenant Disputes"];
const processSteps = ["Legal Consultation", "Sending Legal Notice", "Drafting of Plaint/Suit", "Filing in Appropriate Court", "Evidence & Cross-Examination", "Final Arguments & Judgment"];

export default function CivilLitigationPage() {
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
                <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Civil Litigation</h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Expert support in civil litigation matters, representing clients in courts for claims, injunctions, and legal remedies. Our experienced team handles property, contract, and recovery suits with precision.
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
                src="https://images.unsplash.com/photo-1644497074272-92ef8976f96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8bGVnYWx8ZW58MHx8fHwxNzY0MzY4MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Civil Litigation"
                fill
                className="object-cover"
                data-ai-hint="courtroom debate"
              />
            </div>

            <Tabs defaultValue="overview" className="w-full">
                <ScrollArea className="w-full whitespace-nowrap">
                  <TabsList className="inline-flex">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="process">Our Process</TabsTrigger>
                      <TabsTrigger value="why-us">Why Us?</TabsTrigger>
                      <TabsTrigger value="faq">FAQs</TabsTrigger>
                  </TabsList>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>

                <TabsContent value="overview" className="mt-6">
                    <Card>
                        <CardHeader><CardTitle className="font-serif">Understanding Civil Litigation</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">Civil litigation refers to the process of resolving non-criminal disputes between individuals, organizations, or other entities. The goal is typically to seek compensation for damages, enforce a right, or obtain an injunction. We handle a wide array of civil cases with a strategic and client-focused approach.</p>
                            <h4 className="font-semibold text-foreground">Our Key Civil Litigation Areas:</h4>
                             <div className="grid grid-cols-2 gap-4">
                                {litigationAreas.map((area, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-muted-foreground">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                 <TabsContent value="process" className="mt-6">
                    <Card>
                        <CardHeader><CardTitle className="font-serif">Our Litigation Process</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            {processSteps.map((step, index) => (
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
                                {["Experienced Civil Lawyers", "Strategic Case Planning", "Strong Representation in Court", "Focus on Timely Resolution", "Transparent Communication"].map((item, index) => (
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
