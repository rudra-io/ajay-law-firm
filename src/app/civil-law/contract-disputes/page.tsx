
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
    title: "Contract Dispute Lawyer | Breach of Contract Resolution",
    description: "Legal help for breach of contract, business disputes, agreement violations, and non-payment claims.",
    alternates: { canonical: "https://www.LegalSolutionsJaipur.com/civil-law/contract-disputes" }
};

const faqs = [
    { question: "Q1. अनुबंध का उल्लंघन (Breach of Contract) क्या होता है?", answer: "जब कोई पक्ष अनुबंध में लिखी गई शर्तों को पूरा नहीं करता है, तो इसे अनुबंध का उल्लंघन माना जाता है।" },
    { question: "Q2. अनुबंध विवाद में पहला कदम क्या होता है?", answer: "पहला कदम आमतौर पर उल्लंघन करने वाले पक्ष को एक कानूनी नोटिस भेजना होता है, जिसमें उन्हें शर्तों को पूरा करने के लिए कहा जाता है।" },
    { question: "Q3. क्या मौखिक अनुबंध (Oral Contract) भी कानूनी रूप से मान्य होते हैं?", answer: "हाँ, कुछ मामलों में मौखिक अनुबंध भी मान्य होते हैं, लेकिन उन्हें साबित करना लिखित अनुबंध की तुलना में अधिक कठिन होता है।" },
    { question: "Q4. अनुबंध विवादों को सुलझाने के क्या तरीके हैं?", answer: "विवादों को मध्यस्थता (Mediation), मध्यस्थता (Arbitration), या अदालत में मुकदमा (Litigation) दायर करके सुलझाया जा सकता है।" },
    { question: "Q5. हम अनुबंध विवादों में कैसे मदद कर सकते हैं?", answer: "हमारी टीम अनुबंधों का मसौदा तैयार करने, कानूनी नोटिस भेजने, और अदालत में आपके अधिकारों के लिए लड़ने में विशेषज्ञ है।" }
];

const disputeTypes = ["Breach of Service Agreement", "Non-Payment Issues", "Real Estate Contract Disputes", "Partnership Agreement Violations", "Employment Contract Issues", "Vendor/Supplier Disputes"];
const resolutionProcess = ["Contract Review & Analysis", "Sending a Legal Notice", "Negotiation & Mediation", "Filing a Suit for Specific Performance or Damages", "Court Representation", "Enforcement of Decree"];

export default function ContractDisputesPage() {
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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Contract Disputes</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert assistance in contract disputes, ensuring enforcement of agreements and resolution under civil law provisions. We protect your business and personal interests.
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
              src="https://picsum.photos/seed/contract-signing/1200/675"
              alt="Contract Disputes"
              fill
              className="object-cover"
              data-ai-hint="business handshake"
            />
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="inline-flex">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="process">Resolution Process</TabsTrigger>
                  <TabsTrigger value="why-us">Why Us?</TabsTrigger>
                  <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <TabsContent value="overview" className="mt-6">
                <Card>
                    <CardHeader><CardTitle className="font-serif">Resolving Contractual Conflicts</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Contracts are the backbone of business and personal transactions. When one party fails to uphold their end of the bargain, it can lead to significant financial and operational disruption. We provide expert legal services to resolve contract disputes effectively, whether through negotiation, mediation, or litigation.</p>
                        <h4 className="font-semibold text-foreground">Common Contract Disputes We Handle:</h4>
                         <div className="grid grid-cols-2 gap-4">
                            {disputeTypes.map((type, index) => (
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
                    <CardHeader><CardTitle className="font-serif">Our Dispute Resolution Process</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        {resolutionProcess.map((step, index) => (
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
                            {["Expertise in Indian Contract Act", "Strong Negotiation & Drafting Skills", "Strategic Litigation Approach", "Focus on Commercial Viability", "Client-Centric Solutions"].map((item, index) => (
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
