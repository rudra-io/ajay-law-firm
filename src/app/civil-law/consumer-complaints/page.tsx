
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Consumer Complaint Lawyer | File Consumer Cases Fast",
    description: "File consumer complaints against defective products, fraud, service deficiency & unfair trade practices.",
    alternates: { canonical: "https://www.LegalSolutionsJaipur.com/consumer-law/consumer-complaints" }
};

export default function ConsumerComplaintsPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/consumer-law" className="hover:text-primary">Consumer Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Service Details</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <h1 className="border-b border-primary/20 pb-4">Service Overview</h1>
          
          <h2>Consumer Complaints</h2>
          <p>
            Facing issues with defective products, refund delays, or poor service? File your complaint under the Consumer Protection Act (📞 7597497063). Our expert Consumer Complaint Lawyers in Jaipur provide end-to-end legal assistance for compensation, refund, and dispute resolution.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            हर consumer को यह अधिकार है कि उसे quality product और proper service मिले। अगर कोई company, seller, या service provider defective product देता है, false promise करता है, या unfair trade practice अपनाता है, तो आप एक Consumer Complaint दर्ज कर सकते हैं।
          </p>
          <p>
            We help in such cases — चाहे बात हो defective product, false advertisement, refund issue, या fraudulent service की। हमारी experienced Consumer Complaint Lawyers in Jaipur आपकी ओर से legal action लेकर आपको compensation और justice दिलाने में सहायता करते हैं।
          </p>

          <h2 className="mt-12">What is a Consumer Complaint?</h2>
          <p>
            When a consumer suffers a loss due to a product or service provider—such as a defective product, poor service, non-refund, or cheating—they can file a complaint under the Consumer Protection Act, 2019. This law gives every person the right to file their complaint in the appropriate consumer court (District, State, or National Commission).
          </p>
          
          <h2 className="mt-12">Common Types of Consumer Complaints</h2>
          <p>Common consumer complaint cases we handle (📞 7597497063) include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Defective Products:</strong> Electronic items, vehicles, furniture, mobiles, or medical equipment that do not work or are defective.</li>
            <li><strong>Poor or Incomplete Services:</strong> Wrong or incomplete service by a travel agency, builder, telecom, insurance, banking, or online service provider.</li>
            <li><strong>False Advertisement & Misleading Claims:</strong> Misleading advertisements or false claims made by a company.</li>
            <li><strong>Non-Refund or Cancellation Issues:</strong> Issues with product returns, ticket cancellations, hotel booking refunds, or non-refund of advance payments.</li>
            <li><strong>Medical Negligence:</strong> Harm or injury to a patient due to the negligence of a doctor or hospital.</li>
            <li><strong>Real Estate & Builder Fraud:</strong> Delays in possession, construction defects, or false promises by a builder.</li>
            <li><strong>Online Shopping Scams:</strong> Delivery of wrong or defective products, fake websites, or non-delivery issues.</li>
          </ul>
          <p>We are ready to provide legal assistance in all such cases.</p>

          <h2 className="mt-12">How to File a Consumer Complaint?</h2>
          <p>The process of filing a consumer complaint is as follows:</p>
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>Legal Notice:</strong> First, a written notice is sent to the company or service provider to resolve the problem.</li>
            <li><strong>Complaint Drafting:</strong> If there is no response, our lawyer drafts a Consumer Complaint Petition on your behalf.</li>
            <li><strong>Filing in Consumer Commission:</strong> The complaint is filed in the District, State, or National Consumer Commission based on the claim amount.</li>
            <li><strong>Hearing & Evidence:</strong> Your case is heard in court, where we present evidence and documents.</li>
            <li><strong>Judgment & Compensation:</strong> If negligence or fault is proven, you are awarded compensation and damages.</li>
          </ol>
          <p>We guide you at every step to ensure your case is resolved quickly and correctly.</p>

          <h2 className="mt-12">Why Choose Us?</h2>
          <p>We are a leading law firm, handling all types of Consumer Complaint and Product Liability cases.</p>
          <p>Our Specialties:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Experienced Consumer Law Advocates</li>
            <li>✅ Transparent Legal Process (No hidden charges)</li>
            <li>✅ Fast Filing & Timely Action</li>
            <li>✅ Affordable Consultation Fees</li>
            <li>✅ Complete Legal Documentation Support</li>
            <li>✅ Representation in District, State & National Consumer Forums</li>
          </ul>
          <p>We believe that every consumer should get justice—without delay and without harassment.</p>

          <h2 className="mt-12">What You Can Claim (Compensation)</h2>
          <p>If your complaint is genuine, you can claim the following compensation:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Refund of the product/service cost</li>
            <li>Compensation for mental agony & harassment</li>
            <li>Interest on delayed refund or service</li>
            <li>Reimbursement of litigation costs</li>
            <li>Damages for physical or financial loss</li>
          </ul>
          <p>Our legal team ensures that you get maximum legal relief.</p>

          <h2 className="mt-12">Consumer Complaint Jurisdiction (Where to File)</h2>
          <p>The case is filed in different commissions based on the value of the goods or services paid as consideration:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>District Consumer Commission:</strong> Up to ₹50 lakh</li>
            <li><strong>State Consumer Commission:</strong> More than ₹50 lakh and up to ₹2 crore</li>
            <li><strong>National Consumer Commission:</strong> Above ₹2 crore</li>
          </ul>
          <p>We file your complaint in the correct forum to make the process smooth and effective.</p>

          <h2 className="mt-12">Conclusion</h2>
          <p>Every consumer has the right to get the correct product and service. If a company or seller deceives you or causes you harm, the Consumer Protection Act is with you. Your first step is to seek legal help.</p>
          <p className="font-bold">👉 Call 7597497063 and get the justice you deserve.</p>
          <p>We take your voice to the consumer court—with honesty, experience, and trust.</p>

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
