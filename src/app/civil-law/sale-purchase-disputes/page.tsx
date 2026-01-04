
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
    title: 'Property Sale & Purchase Dispute Lawyer in Jaipur',
    description: 'Legal help for property sale and purchase disputes in Jaipur. We resolve ownership conflicts, agreement breaches, and financial claims.',
};

const faqs = [
    { question: "Q1. अगर विक्रेता (Seller) संपत्ति का कब्जा (Possession) देने से मना कर दे तो क्या करें?", answer: "आप अनुबंध के विशिष्ट प्रदर्शन (Specific Performance of Contract) के लिए अदालत में मुकदमा दायर कर सकते हैं और कब्जे की मांग कर सकते हैं।" },
    { question: "Q2. संपत्ति खरीदते समय Title Verification क्यों जरूरी है?", answer: "टाइटल वेरिफिकेशन यह सुनिश्चित करता है कि विक्रेता ही संपत्ति का असली मालिक है और संपत्ति पर कोई कानूनी विवाद या ऋण नहीं है।" },
    { question: "Q3. क्या एग्रीमेंट टू सेल (Agreement to Sale) के बाद विक्रेता संपत्ति किसी और को बेच सकता है?", answer: "नहीं, यदि एक वैध एग्रीमेंट टू सेल है, तो विक्रेता उसी संपत्ति को किसी और को नहीं बेच सकता है। ऐसा करने पर यह धोखाधड़ी मानी जाएगी।" },
    { question: "Q4. अगर खरीदी गई संपत्ति में कोई दोष (Defect) निकलता है तो क्या करें?", answer: "आप उपभोक्ता अदालत (Consumer Court) में शिकायत दर्ज कर सकते हैं या विक्रेता के खिलाफ ক্ষতিপূরণ (Damages) के लिए सिविल मुकदमा दायर कर सकते हैं।" },
    { question: "Q5. हम इन विवादों में कैसे मदद कर सकते हैं?", answer: "हम संपत्ति के दस्तावेजों की जांच करने, बिक्री अनुबंध तैयार करने, और खरीद-बिक्री से संबंधित किसी भी विवाद में अदालत में आपका प्रतिनिधित्व करने में मदद करते हैं।" }
];

const disputeTypes = ["Breach of Agreement to Sale", "Disputes over Possession", "Issues with Property Title", "Non-payment by Buyer", "Hidden Defects in Property", "Fraudulent Sale"];
const legalProcess = ["Due Diligence & Title Search", "Drafting Sale/Purchase Agreement", "Sending Legal Notice for Non-compliance", "Filing Suit for Specific Performance or Cancellation", "Court Proceedings", "Ensuring Fair Transaction"];

export default function SalePurchaseDisputesPage() {
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
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Sale & Purchase Disputes</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Legal assistance in property sale and purchase disputes, ensuring smooth resolution of ownership conflicts, agreement breaches, and financial claims.
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
              src="https://picsum.photos/seed/sale-dispute/1200/675"
              alt="Sale and Purchase Disputes"
              fill
              className="object-cover"
              data-ai-hint="signing papers"
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
                    <CardHeader><CardTitle className="font-serif">Ensuring Fair Property Transactions</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">The purchase or sale of property is a significant financial transaction that requires careful legal oversight. Disputes can arise from breach of agreement, title issues, or non-payment. We provide end-to-end legal support to ensure that your property transactions are secure and your rights are protected.</p>
                        <h4 className="font-semibold text-foreground">Common Sale & Purchase Disputes:</h4>
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
                            {["Thorough Due Diligence & Title Verification", "Expert Drafting of Sale Agreements", "Skilled Negotiation for Fair Terms", "Strong Representation in Court", "Protection Against Property Fraud"].map((item, index) => (
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
