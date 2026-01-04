
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Consumer Complaint Lawyer | File Consumer Cases Fast",
    description: "File consumer complaints against defective products, fraud, service deficiency & unfair trade practices.",
    alternates: { canonical: "https://www.jaipurlegalsolution.com/consumer-law/consumer-complaints" }
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

          <h2 className="mt-12">Consumer Complaint Kya Hota Hai?</h2>
          <p>
            जब कोई consumer (ग्राहक) किसी product या service provider से नुकसान झेलता है — जैसे defective product, poor service, refund ना मिलना, या cheating — तो वह Consumer Protection Act, 2019 के तहत शिकायत दर्ज कर सकता है। इस कानून के तहत हर व्यक्ति को consumer court (District, State, or National Commission) में अपनी शिकायत दाखिल करने का अधिकार है।
          </p>
          
          <h2 className="mt-12">Common Types of Consumer Complaints</h2>
          <p>Common consumer complaint cases we handle (📞 7597497063) include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Defective Products:</strong> Electronic items, vehicles, furniture, mobile, or medical equipment जो काम न करें या defective हों।</li>
            <li><strong>Poor or Incomplete Services:</strong> Travel agency, builder, telecom, insurance, banking, or online service provider की गलत या अधूरी सेवा।</li>
            <li><strong>False Advertisement & Misleading Claims:</strong> Company द्वारा झूठा या भ्रामक प्रचार (misleading advertisement) करना।</li>
            <li><strong>Non-Refund or Cancellation Issues:</strong> Product return, ticket cancel, hotel booking refund, या advance payment न मिलना।</li>
            <li><strong>Medical Negligence:</strong> Doctor या hospital की गलती से patient को नुकसान या injury होना।</li>
            <li><strong>Real Estate & Builder Fraud:</strong> Possession delay, construction defects, or false promises by builder।</li>
            <li><strong>Online Shopping Scams:</strong> Wrong product delivered, defective items, fake websites, or no delivery issues।</li>
          </ul>
          <p>हर प्रकार के ऐसे मामलों में हम आपकी legal सहायता के लिए तैयार हैं।</p>

          <h2 className="mt-12">Consumer Complaint File Kaise Karein?</h2>
          <p>Consumer Complaint File करने की प्रक्रिया:</p>
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>Legal Notice:</strong> सबसे पहले company या service provider को written notice भेजा जाता है ताकि वह problem resolve करे।</li>
            <li><strong>Complaint Drafting:</strong> अगर response ना मिले, तो हमारा lawyer आपकी तरफ से Consumer Complaint Petition तैयार करता है।</li>
            <li><strong>Filing in Consumer Commission:</strong> Complaint District, State या National Consumer Commission में फाइल होती है — claim amount के आधार पर।</li>
            <li><strong>Hearing & Evidence:</strong> Court में आपके case की सुनवाई होती है, जहां हम सबूत और documents प्रस्तुत करते हैं।</li>
            <li><strong>Judgment & Compensation:</strong> अगर negligence या fault साबित हो जाए, तो आपको compensation और damages दिए जाते हैं।</li>
          </ol>
          <p>हम हर step पर आपको guide करते हैं ताकि आपका मामला जल्दी और सही तरीके से सुलझे।</p>

          <h2 className="mt-12">Why Choose Us?</h2>
          <p>We are a leading law firm in Jaipur, handling all types of Consumer Complaint and Product Liability cases.</p>
          <p>हमारी Specialties:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Experienced Consumer Law Advocates</li>
            <li>✅ Transparent Legal Process (No hidden charges)</li>
            <li>✅ Fast Filing & Timely Action</li>
            <li>✅ Affordable Consultation Fees</li>
            <li>✅ Complete Legal Documentation Support</li>
            <li>✅ Representation in District, State & National Consumer Forum</li>
          </ul>
          <p>हम believe करते हैं कि हर consumer को न्याय मिलना चाहिए — बिना delay और बिना harassment के।</p>

          <h2 className="mt-12">What You Can Claim (Compensation)</h2>
          <p>अगर आपकी complaint genuine है, तो आप नीचे दिए गए compensation claim कर सकते हैं:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Product/service cost refund</li>
            <li>Compensation for mental agony & harassment</li>
            <li>Interest on delayed refund or service</li>
            <li>Litigation cost reimbursement</li>
            <li>Damages for physical or financial loss</li>
          </ul>
          <p>हमारी legal team यह ensure करती है कि आपको maximum legal relief मिले।</p>

          <h2 className="mt-12">Consumer Complaint Jurisdiction (Where to File)</h2>
          <p>Complaint amount और loss value के आधार पर case को अलग-अलग commission में file किया जाता है:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>District Consumer Commission:</strong> Up to ₹50 lakh</li>
            <li><strong>State Consumer Commission:</strong> ₹50 lakh – ₹2 crore</li>
            <li><strong>National Consumer Commission:</strong> Above ₹2 crore</li>
          </ul>
          <p>हम आपकी complaint को सही forum में file करते हैं ताकि process smooth और effective रहे।</p>

          <h2 className="mt-12">Conclusion</h2>
          <p>हर consumer का अधिकार है कि उसे सही product और service मिले। अगर कोई company या seller आपके साथ धोखा करता है या आपको नुकसान पहुंचाता है, तो Consumer Protection Act आपके साथ है। आपका पहला कदम – legal help लेना।</p>
          <p className="font-bold">👉 Call करें 7597497063 और पाएँ अपने हक का न्याय।</p>
          <p>हम आपकी आवाज़ को consumer court तक पहुँचाते हैं — ईमानदारी, अनुभव और विश्वास के साथ।</p>

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

    