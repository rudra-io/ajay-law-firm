
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
    title: "Property Dispute Lawyer | Registration, Title & Ownership Issues",
    description: "Resolve illegal possession, ancestral property disputes, land conflicts & registration issues.",
    alternates: { canonical: "https://www.LegalSolutionsJaipur.com/civil-law/property-disputes" }
};

const faqs = [
    { question: "Q1. संपत्ति विवाद (Property Dispute) क्या होता है?", answer: "जब दो या दो से अधिक पक्षों के बीच किसी संपत्ति के मालिकाना हक, बंटवारे, या सीमा को लेकर विवाद होता है, तो उसे संपत्ति विवाद कहते हैं।" },
    { question: "Q2. अगर कोई मेरी संपत्ति पर अवैध कब्जा कर ले तो क्या करें?", answer: "आप तुरंत पुलिस में शिकायत दर्ज करा सकते हैं और सिविल कोर्ट में कब्जे (Possession) का मुकदमा दायर कर सकते हैं।" },
    { question: "Q3. पैतृक संपत्ति (Ancestral Property) में मेरा हिस्सा कैसे मिलेगा?", answer: "आप बंटवारे (Partition) के लिए सिविल कोर्ट में मुकदमा दायर कर सकते हैं, जिसमें सभी कानूनी उत्तराधिकारियों को उनका हिस्सा मिलता है।" },
    { question: "Q4. क्या मैं किसी संपत्ति पर स्टे ऑर्डर (Stay Order) ले सकता हूं?", answer: "हाँ, यदि आपको लगता है कि कोई आपकी संपत्ति को बेच रहा है या उस पर निर्माण कर रहा है, तो आप अदालत से तत्काल रोक के लिए स्टे ऑर्डर प्राप्त कर सकते हैं।" },
    { question: "Q5. हम संपत्ति विवादों में कैसे मदद करते हैं?", answer: "हम टाइटल वेरिफिकेशन से लेकर, कानूनी नोटिस भेजने, और अदालत में बंटवारे या कब्जे का मुकदमा लड़ने तक पूरी कानूनी प्रक्रिया में आपका साथ देते हैं।" }
];

const disputeTypes = ["Ownership & Title Disputes", "Ancestral Property Partition", "Illegal Possession & Encroachment", "Builder-Buyer Disputes", "Landlord-Tenant Issues", "Fraudulent Property Transfer"];
const legalProcess = ["Property Document Verification", "Legal Notice to Opposite Party", "Filing of Civil Suit (e.g., Partition, Declaration, Injunction)", "Court Proceedings and Evidence", "Final Judgment and Decree", "Execution of Court Order"];

export default function PropertyDisputesPage() {
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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Property Disputes</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide expert legal representation in all types of property disputes, including ownership conflicts, encroachments, partition suits, and co-ownership issues.
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
              src="https://picsum.photos/seed/property-dispute/1200/675"
              alt="Property Disputes"
              fill
              className="object-cover"
              data-ai-hint="property blueprints"
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
                    <CardHeader><CardTitle className="font-serif">Resolving Property Conflicts</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">Property disputes are among the most common and complex legal issues faced by individuals and families in India. These disputes can arise from unclear titles, ancestral property divisions, or illegal encroachments. We provide strategic legal solutions to protect your property rights and resolve conflicts efficiently.</p>
                        <h4 className="font-semibold text-foreground">Types of Property Disputes We Handle:</h4>
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
                            {["Deep Expertise in Property Law", "Thorough Title Search and Verification", "Strong Representation in Civil Courts", "Effective in Handling Partition Suits", "Client-First Approach"].map((item, index) => (
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
