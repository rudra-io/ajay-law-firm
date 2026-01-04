
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
    title: "Land Dispute Lawyer | Property & Rental Disputes",
    description: "Resolve land disputes, tenant issues, eviction suits, rental conflicts & illegal possession matters.",
    alternates: { canonical: "https://www.LegalSolutionsJaipur.com/civil-law/land-rental-disputes" }
};

const faqs = [
    { question: "Q1. किरायेदार को कैसे निकाला जा सकता है?", answer: "आप कानूनी आधार पर (जैसे किराया न देना, संपत्ति को नुकसान पहुँचाना) Rent Control Act के तहत बेदखली (Eviction) का मुकदमा दायर कर सकते हैं।" },
    { question: "Q2. अगर मकान मालिक किराया नहीं ले रहा है तो क्या करें?", answer: "आप अदालत में किराया जमा कर सकते हैं ताकि आप पर किराया न देने का आरोप न लगे।" },
    { question: "Q3. क्या मकान मालिक बिना नोटिस के घर खाली करवा सकता है?", answer: "नहीं, मकान मालिक को कानूनी प्रक्रिया का पालन करना होता है और किरायेदार को उचित नोटिस देना अनिवार्य है।" },
    { question: "Q4. जमीन पर अवैध कब्जे (Encroachment) के मामले में क्या करें?", answer: "तुरंत कानूनी नोटिस भेजें और possession (कब्जा) वापस पाने के लिए सिविल कोर्ट में मुकदमा दायर करें।" },
    { question: "Q5. हम इन मामलों में कैसे मदद करते हैं?", answer: "हम बेदखली नोटिस तैयार करने, किराया नियंत्रण मामलों, और संपत्ति सीमा विवादों में अदालत में आपका प्रतिनिधित्व करते हैं।" }
];

const disputeTypes = ["Eviction of Tenant", "Non-payment of Rent", "Disputes over Rent Increase", "Property Encroachment", "Boundary Disputes", "Lease Agreement Violations"];
const legalProcess = ["Consultation and Review of Agreement", "Sending Legal Notice for Eviction/Compliance", "Filing Suit in Rent Tribunal or Civil Court", "Representation and Evidence", "Final Order and Execution"];

export default function LandRentalDisputesPage() {
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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Land & Rental Disputes</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Representation in land and rental disputes, including tenancy issues, eviction cases, and property boundary conflicts. We protect the rights of both landlords and tenants.
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
              src="https://picsum.photos/seed/rental-dispute/1200/675"
              alt="Land and Rental Disputes"
              fill
              className="object-cover"
              data-ai-hint="house keys"
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
                    <CardHeader><CardTitle className="font-serif">Protecting Landlord and Tenant Rights</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Disputes between landlords and tenants are common, often arising from issues like non-payment of rent, eviction, or violation of the lease agreement. Similarly, land disputes related to boundaries or encroachment require careful legal handling. We provide balanced and effective legal representation for both landlords and tenants to resolve these conflicts.</p>
                        <h4 className="font-semibold text-foreground">Common Disputes We Handle:</h4>
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
                    <CardHeader><CardTitle className="font-serif">Our Resolution Process</CardTitle></CardHeader>
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
                            {["Expertise in Rent Control Act", "Balanced Representation for Both Parties", "Quick Eviction & Recovery Process", "Strong Documentation and Notices", "Effective Court Representation"].map((item, index) => (
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
