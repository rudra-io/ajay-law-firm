
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ProductLiabilityPage() {
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
          
          <h2>Product Liability</h2>
          <p>
            If a defective product has caused injury, loss, or damage, you have the right to claim compensation under Indian Product Liability Law. We provide expert legal assistance for defective goods, unsafe products, and manufacturer negligence cases in Jaipur (📞 7597497063).
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className='mt-8'>
            आज के समय में हर व्यक्ति किसी न किसी product का इस्तेमाल करता है — चाहे वह mobile phone हो, medicine, vehicle, cosmetic product, या कोई household appliance. लेकिन क्या होगा अगर वह product defective निकले और उससे आपको injury, loss या damage हो जाए? यही मामला आता है Product Liability Law के अंतर्गत।
          </p>
          <p>
            <strong>Product Liability</strong> का मतलब है — किसी defective product की वजह से consumer को हुए नुकसान के लिए manufacturer, seller या distributor की legal responsibility। अगर आपको किसी product से physical injury, health issue, या financial loss हुआ है, तो आप उस company या manufacturer के खिलाफ compensation claim कर सकते हैं।
          </p>
          <p>
            ऐसे मामलों में आपकी मदद के लिए है हमारी टीम — Jaipur की trusted Product Liability Law Firm।
          </p>

          <h2 className="mt-12">Product Liability Law Kya Hai?</h2>
          <p>
            Product Liability Law consumer protection का एक महत्वपूर्ण हिस्सा है। इस कानून के तहत, अगर कोई product unsafe है या defective है और उससे consumer को नुकसान होता है, तो manufacturer, supplier, या seller जिम्मेदार होते हैं।
          </p>
          <p>
            भारत में ये अधिकार <strong>Consumer Protection Act, 2019</strong> और Product Liability Section (Chapter VI) के तहत दिए गए हैं।
          </p>
          <h3 className='text-xl mt-4'>Under This Law:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Manufacturer को यह सुनिश्चित करना होता है कि product safe हो।</li>
            <li>Seller को यह देखना होता है कि defective product market में न जाए।</li>
            <li>Consumer को नुकसान होने पर compensation claim करने का अधिकार होता है।</li>
          </ul>

          <h2 className="mt-12">Product Liability Lawyer in Jaipur</h2>
          <p>
            Our experienced product liability advocates की टीम (7597497063) हर प्रकार के consumer injury, defective product, और compensation cases को handle करती है। हमारा उद्देश्य है कि आपको आपका legal right और rightful compensation मिले।
          </p>
          <p>
            चाहे product domestic हो या imported, हम हर case का detailed legal analysis करते हैं और proper evidence के साथ आपका पक्ष मजबूत बनाते हैं।
          </p>

          <h2 className="mt-12">Common Types of Product Liability Cases</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Defective Electronics:</strong> Mobile blast, charger malfunction, short circuit से injury या fire.</li>
            <li><strong>Pharmaceutical / Medical Products:</strong> Unsafe medicines, expired drugs, या defective medical devices से health damage.</li>
            <li><strong>Automobile Defects:</strong> Car brake failure, airbag malfunction, tyre burst accident cases.</li>
            <li><strong>Cosmetic & Food Products:</strong> Skin reactions, food poisoning, or allergic reactions due to defective ingredients.</li>
            <li><strong>Industrial & Machinery Defects:</strong> Unsafe machines causing workplace injuries.</li>
          </ul>
          <p>हर case में, हमारी legal team यह साबित करती है कि product defective था और manufacturer/seller negligent था।</p>
          
          <h2 className="mt-12">Our Product Liability Legal Services Include:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Legal consultation for defective product claims</li>
            <li>✅ Filing Product Liability Complaint under Consumer Protection Act</li>
            <li>✅ Evidence collection and documentation support</li>
            <li>✅ Legal notice to manufacturer/seller</li>
            <li>✅ Representation before District, State & National Consumer Commission</li>
            <li>✅ Negotiation for compensation settlement</li>
            <li>✅ Criminal negligence complaint (if required)</li>
          </ul>
          <p>हम हर step पर आपका साथ देते हैं — from initial advice to final judgment.</p>

          <h2 className="mt-12">What You Can Claim (Compensation)</h2>
          <p>अगर defective product से नुकसान हुआ है, तो आप claim कर सकते हैं:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Medical expenses reimbursement</li>
            <li>Property or vehicle damage compensation</li>
            <li>Loss of income due to injury</li>
            <li>Mental agony or pain & suffering damages</li>
            <li>Punitive damages (for serious negligence)</li>
          </ul>
          <p>हमारी legal team यह ensure करती है कि आपको maximum possible compensation मिले।</p>

          <h2 className="mt-12">Why Choose Us?</h2>
          <p>We are a renowned legal firm in Jaipur that handles all types of Product Liability and Consumer Dispute Cases.</p>
          <p><strong>हम क्यों भरोसेमंद हैं:</strong></p>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Experienced Consumer & Product Liability Lawyers</li>
            <li>✅ Transparent Legal Process – कोई hidden charges नहीं</li>
            <li>✅ Fast documentation & filing</li>
            <li>✅ Affordable consultation fees</li>
            <li>✅ 100% client satisfaction focus</li>
          </ul>
          <p>हम believe करते हैं कि हर consumer को safe product और fair treatment मिलना चाहिए।</p>

          <h2 className="mt-12">Legal Framework for Product Liability in India</h2>
          <p><strong>Consumer Protection Act, 2019 (Chapter VI)</strong> में Product Liability से जुड़े मुख्य provisions हैं:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Section 83:</strong> Product Liability Action के लिए eligibility</li>
            <li><strong>Section 84-89:</strong> Manufacturer, Service Provider, Seller की liability</li>
            <li><strong>Section 90:</strong> Exceptions to product liability</li>
          </ul>
          <p>इस Act के अनुसार, manufacturer तब liable होगा जब product:</p>
          <ul className="list-disc pl-5 space-y-2">
              <li>Defective design का हो</li>
              <li>Manufacturing defect हो</li>
              <li>Warning label inadequate हो</li>
              <li>Unsafe components का use किया गया हो</li>
          </ul>
          <p>हमारी firm इन provisions का इस्तेमाल करके आपके लिए strong legal claim तैयार करती है।</p>

          <h2 className="mt-12">For Manufacturers & Sellers – Legal Compliance & Defence</h2>
          <p>अगर आप manufacturer या retailer हैं, और आपके खिलाफ product liability complaint हुई है, तो भी आपको expert legal defence की जरूरत है।</p>
          <p>हमारी legal team आपको help करती है:</p>
          <ul className="list-disc pl-5 space-y-2">
              <li>Legal notice & complaint reply तैयार करने में</li>
              <li>Product testing report collect करने में</li>
              <li>Compliance documentation verify करने में</li>
              <li>Court representation करने में</li>
          </ul>
          <p>हम ensure करते हैं कि आपका business legally compliant रहे और unnecessary penalties से बच सके।</p>

          <h2 className="mt-12">Conclusion</h2>
          <p>
            कानून हर consumer को सुरक्षा देता है — और हर manufacturer को जिम्मेदारी। अगर आपको किसी defective product से नुकसान हुआ है या आपको किसी पर गलत आरोप लगे हैं, तो देर न करें।
          </p>
          <p>👉 आज ही संपर्क करें 7597497063</p>
          <p>हम आपके साथ हैं, हर legal step पर।</p>
          
          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Consultation & Support</h3>
            <p className="mt-2">आप हमसे Call, WhatsApp या Office Visit के माध्यम से संपर्क कर सकते हैं। हम आपकी case details को confidential रखते हैं और आपको practical, honest advice देते हैं।</p>
              <Button asChild size="lg" className="mt-4">
                  <a href="tel:7597497063">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: 7597497063
                  </a>
              </Button>
            <p className="mt-2 text-sm">Justice with Trust</p>
            <p className="mt-2 text-sm"><strong>Legal Areas:</strong> Product Liability | Consumer Disputes | Labour Law | Cyber Crime | Court Marriage | Divorce | Criminal Law</p>
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
