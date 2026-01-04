
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AccountFreezeUnfreezePage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/cyber-law" className="hover:text-primary">Cyber Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Service Details</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <h1 className="border-b border-primary/20 pb-4">Service Overview</h1>
          
          <h2>Account Freeze/Unfreeze</h2>
          <p>
            Frozen bank account or funds blocked? Our team provides expert High Court advocate assistance for account unfreeze, legal fund release, loan disputes & banking issues. Call 7597497063 for quick resolution.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Bank account freeze और funds block होना आज के financial world में एक serious financial and legal issue बन गया है। Account freeze कई कारणों से हो सकता है — जैसे loan default, court order, cyber fraud, suspicious banking transactions, or RBI directives।
          </p>
          <p>
            A frozen account can severely affect personal savings, business operations, salary payments, or business transactions. इसलिए तुरंत High Court advocate या experienced banking lawyer से legal support लेना जरूरी है।
          </p>
          <p>
            At our firm, we provide professional legal assistance for individuals, businesses, and corporate clients facing bank account freezes, fund release issues, RTGS/NEFT holds, loan recovery disputes, and court-related banking matters.
          </p>

          <h2 className="mt-12">Reasons for Bank Account Freeze</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Loan Default / Non-payment</li>
            <li>Legal or Court Orders</li>
            <li>Income Tax / GST or SEBI Notices</li>
            <li>Cyber Fraud / Unauthorized Transactions</li>
            <li>RTGS/NEFT or Transaction Holds</li>
          </ul>

          <h2 className="mt-12">Our Legal Services</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
                <strong>Legal Notice & Complaint Drafting</strong>
                <p>Drafting strong legal notice to bank / authorities for fund release. Representation in case of disputed loans, cyber fraud, or unauthorized freeze. Ensuring notice complies with RBI guidelines and banking regulations.</p>
            </li>
            <li>
                <strong>Court Representation & High Court Advocacy</strong>
                <p>Representation before District Courts, Civil Courts, and High Court Jaipur. Filing petitions, writs, or applications for account unfreeze. Advocates with experience in banking law ensure fast judicial relief.</p>
            </li>
            <li>
                <strong>Coordination with Banks & Regulatory Authorities</strong>
                <p>Liaison with bank officials, RBI, SEBI, Income Tax authorities. Quick resolution of account freeze due to loan disputes, RTGS/NEFT blocks, or fraudulent activity. Regular updates on case progress.</p>
            </li>
          </ol>

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
