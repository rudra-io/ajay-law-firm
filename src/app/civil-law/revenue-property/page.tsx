
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const faqs = [
    {
        question: "1. रेवेन्यू कोर्ट क्या होता है?",
        answer: "Revenue Court एक सरकारी न्यायालय होता है जहाँ भूमि (Land) और राजस्व (Revenue) से संबंधित मामलों की सुनवाई की जाती है — जैसे म्यूटेशन, स्वामित्व विवाद या जमीन का बँटवारा।"
    },
    {
        question: "2. म्यूटेशन (Mutation) क्या होता है और क्यों जरूरी है?",
        answer: "जब कोई व्यक्ति property खरीदता या बेचता है, तो ownership record को revenue department के दस्तावेजों में बदलना आवश्यक होता है। इसी प्रक्रिया को म्यूटेशन कहा जाता है। यह कानूनी रूप से साबित करता है कि संपत्ति अब आपके नाम पर है।"
    },
    {
        question: "3. Property verification का process क्या होता है?",
        answer: "Before buying property, our lawyers check revenue records (Jamabandi, Khasra), previous registry documents, and ownership chain to ensure that there are no legal disputes or pending cases."
    },
    {
        question: "4. क्या पैतृक संपत्ति (Ancestral Property) बेची जा सकती है?",
        answer: "हाँ, ancestral property बेची जा सकती है, लेकिन इसके लिए सभी legal heirs की written consent ज़रूरी होती है। Advocate proper release deed और consent agreement तैयार करता है।"
    },
    {
        question: "5. Property dispute case कैसे file किया जाता है?",
        answer: "First, a legal notice is issued to the opposite party. If the matter is not resolved, then a case is filed in Civil Court or Revenue Court, depending on the nature of the dispute. Our lawyers handle all the documentation and representation."
    },
    {
        question: "6. हम से consultation कैसे ली जा सकती है?",
        answer: "आप फोन या WhatsApp पर appointment ले सकते हैं। हम online और in-person दोनों तरह की consultation provide करते हैं ताकि client को तुरंत legal guidance मिल सके।"
    }
];

export default function RevenuePropertyPage() {
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
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <h1 className="border-b border-primary/20 pb-4">Service Overview</h1>
          
          <h2>Revenue & Property</h2>
          <p>
            Property या revenue से जुड़े मामलों में एक छोटी सी गलती भी बड़े नुकसान का कारण बन सकती है। इसलिए हमेशा किसी अनुभवी Revenue & Property Lawyer की सलाह लेना ज़रूरी है। We provide expert legal assistance to protect your property rights, resolve disputes efficiently, and ensure peace of mind.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <div className="mt-12 w-full">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://picsum.photos/seed/revenue/1200/675"
                alt="Revenue and Property"
                fill
                className="object-cover"
                data-ai-hint="land records"
              />
            </div>
          </div>

          <h2 className="mt-12">What is Revenue & Property Law?</h2>
          <p>
            Revenue & Property Law उन सभी मामलों से संबंधित होता है जो भूमि स्वामित्व (Land Ownership), म्यूटेशन (Mutation), जमाबंदी (Jamabandi), रजिस्ट्री (Registration), और टाइटल वेरिफिकेशन (Title Verification) से जुड़े होते हैं। In Rajasthan, property records are maintained by the revenue department, and any dispute related to land ownership or mutation is handled in the Revenue Court or Tehsil Office.
          </p>
          <p>
            कई बार लोग बिना दस्तावेजों की जांच के property खरीद लेते हैं, जिससे बाद में ownership dispute या illegal possession के मामले सामने आते हैं। ऐसे में एक Property Advocate की मदद जरूरी होती है जो हर दस्तावेज को सही तरीके से जांचे और आपको legal protection दे।
          </p>

          <h2 className="mt-12">Our Expertise in Revenue & Property Matters</h2>
          <p>Our team of expert advocates provides complete legal assistance for revenue and property cases. हमारे वकील भूमि से जुड़े सभी प्रकार के मामलों में गहरी समझ और अनुभव रखते हैं।</p>
          <h3 className="text-2xl mt-8">हमारी प्रमुख सेवाएं (Our Key Legal Services):</h3>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Property Dispute Resolution / संपत्ति विवाद निपटारा:</strong> Illegal possession, encroachment और ownership disputes के لیے legal notice और court representation।</li>
            <li><strong>Mutation & Record Correction / म्यूटेशन और रिकॉर्ड सुधार:</strong> Property ke naam transfer, tehsil aur revenue record me correction ya update karwana।</li>
            <li><strong>Property Registration & Documentation / संपत्ति पंजीकरण और दस्तावेजीकरण:</strong> Sale deed, lease deed, gift deed, will, aur power of attorney drafting aur registration.</li>
            <li><strong>Agricultural Land Matters / कृषि भूमि विवाद:</strong> Inheritance (विरासत), partition (बँटवारा), aur agricultural land ke revenue disputes ka समाधान।</li>
            <li><strong>Title Verification & Due Diligence / टाइटल वेरिफिकेशन:</strong> Before purchasing property, we verify ownership chain, legal documents, and revenue records.</li>
            <li><strong>Legal Consultancy / कानूनी परामर्श:</strong> Property purchase, sale, ya transfer se pehle legal advice लेना हमेशा सुरक्षित रहता है।</li>
          </ul>

          <h2 className="mt-12">Why Choose Us?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Experienced Revenue & Property Lawyers in Jaipur</li>
            <li>Transparent legal documentation and case handling</li>
            <li>Time-bound resolution with clear communication</li>
            <li>Personal consultation for every client</li>
            <li>Representation in Revenue Court, Civil Court, and Registrar Office</li>
            <li>100% client satisfaction and reliable guidance</li>
          </ul>
          <p className='mt-4'>हमारा उद्देश्य हर client को सुरक्षित और पारदर्शी legal service देना है ताकि उनकी संपत्ति और अधिकार पूरी तरह से सुरक्षित रहें।</p>
          
          <h2 className="mt-12">Areas We Serve</h2>
          <p>We offer our legal services across Jaipur including: Civil Lines, Vaishali Nagar, Mansarovar, Malviya Nagar, Bani Park, Ajmer Road, Sanganer, Jagatpura, Tonk Road, Sitapura, Sodala, Shyam Nagar, और Raja Park।</p>


          <h2 className="mt-12">Frequently Asked Questions (FAQ)</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Contact Us</h3>
            <p className='mt-2'>अगर आपको किसी भी प्रकार के property dispute, mutation, या registration के मामले में legal help की आवश्यकता है — तो आज ही हमसे संपर्क करें:</p>
              <Button asChild size="lg" className="mt-4">
                  <a href="tel:7597497063">
                      <Phone className="mr-2 h-5 w-5" />
                      Call/WhatsApp: 7597497063
                  </a>
              </Button>
            <p className="mt-2 text-sm">🌐 www.LegalSolutionsJaipur.com</p>
            <p className="mt-1 text-sm">📍 Address: Jaipur, Rajasthan</p>
          </div>

          <h2 className="mt-12">Conclusion</h2>
          <p>
            Property या revenue से जुड़े मामलों में एक छोटी सी गलती भी बड़े नुकसान का कारण बन सकती है। इसलिए हमेशा किसी अनुभवी Revenue & Property Lawyer की सलाह लेना ज़रूरी है। We provide expert legal assistance to protect your property rights, resolve disputes efficiently, and ensure peace of mind.
          </p>
          <p className='mt-4 font-semibold'>If you’re facing any property-related issue in Jaipur — call us today and get trusted legal help from Jaipur’s best property lawyers.</p>
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
                  <a href="mailto:Ajay32727@gmail.com">
                    <Mail className="mr-2" />
                    Email Us
                  </a>
                </Button>
                <p className="text-muted-foreground">Ajay32727@gmail.com</p>
              </div>
            </Card>
        </div>
      </section>
    </div>
  );
}
