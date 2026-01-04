
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function BankingFinanceDisputesPage() {
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
          
          <h2>Banking & Finance Disputes</h2>
          <p>
            Expert Banking & Finance Dispute Lawyer in Jaipur. Loan recovery & cheque bounce help – Call 7597497063.
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            We are one of the leading law firms in Jaipur providing professional legal services in banking and finance disputes. We represent individuals, businesses, and financial institutions in resolving complex issues related to loans, recoveries, defaults, cheques, and financial frauds.
          </p>
          <p>
            हमारी टीम अनुभवी एडवोकेट्स की है जो बैंकिंग और फाइनेंशियल विवादों (Banking & Finance Disputes) में विशेषज्ञता रखती है। चाहे मामला loan recovery, credit dispute, cheque bounce, या bank fraud का हो — हम हर स्थिति में अपने क्लाइंट्स के लिए मजबूत कानूनी समाधान प्रदान करते हैं।
          </p>

          <h2 className="mt-12">Our Expertise</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li>
              <strong>Loan Recovery & Default Cases:</strong>
              <p>अगर आपने लोन दिया है और सामने वाला व्यक्ति या संस्था भुगतान नहीं कर रही है, तो हमारी टीम SARFAESI Act, Debt Recovery Tribunal (DRT), और Civil Courts के माध्यम से वसूली करवाने में मदद करती है। We handle both secured and unsecured loan recovery cases for banks, NBFCs, and individuals.</p>
            </li>
            <li>
              <strong>Cheque Bounce Matters (धारा 138 N.I. Act):</strong>
              <p>हम Negotiable Instruments Act की धारा 138 के तहत cheque bounce मामलों में विशेषज्ञ हैं। चाहे आपको legal notice भेजना हो या court में केस फाइल करना हो, हमारी टीम पूरे प्रोसेस में आपका साथ देती है।</p>
            </li>
            <li>
              <strong>Bank Fraud & Misappropriation Cases:</strong>
              <p>Financial fraud cases में तुरंत कानूनी एक्शन लेना बहुत जरूरी होता है। हमारी टीम ऐसे मामलों में FIR registration, cyber financial investigation, और criminal proceedings में सहायता करती है।</p>
            </li>
          </ul>

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
