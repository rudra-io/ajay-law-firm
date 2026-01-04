
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const faqs = [
    {
        question: "Q1. What is the first step to file a torture or harassment case?",
        answer: "The first step is to file a complaint at the nearest police station or women's police station. Our legal team will help you with the correct sections and documentation."
    },
    {
        question: "Q2. What should I do if false harassment or 498A allegations are made against me?",
        answer: "In such cases, apply for anticipatory bail and collect evidence. Our defense team will represent you in court."
    },
    {
        question: "Q3. Where can I complain about workplace harassment?",
        answer: "Every company has an Internal Committee (IC). You can file a complaint there or apply to the women's commission under the POSH Act."
    },
    {
        question: "Q4. Can men also file harassment cases?",
        answer: "Yes, in cases of mental or cyber harassment, men can also file a complaint. The law also provides gender-neutral protection."
    },
    {
        question: "Q5. Can I get compensation in a harassment case?",
        answer: "Yes, the court can order compensation or maintenance if the victim has suffered damage or trauma."
    }
];

export default function TortureHarassmentPage() {
  return (
    <div className="bg-background text-foreground pt-20">
      <section className="py-8 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/criminal-law" className="hover:text-primary">Criminal Law</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground">Service Details</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h1:font-serif prose-h1:text-4xl prose-h1:text-foreground prose-h2:font-serif prose-h2:text-3xl prose-h2:text-primary prose-p:text-muted-foreground prose-strong:text-foreground">
          <h1 className="border-b border-primary/20 pb-4">Torture & Harassment</h1>
          <p>
            If you are a victim of mental, physical, or domestic harassment, we are with you. We provide complete legal protection, complaint filing support, and court representation for harassment and torture cases.
          </p>
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Torture and Harassment are offenses that seriously affect a person's mental, physical, or social condition. In India, these cases are legally recognized under various sections of the Indian Penal Code (IPC) like Sections 354, 498A, 509, and relevant provisions of the Domestic Violence Act and POSH Act (Workplace Harassment).
          </p>
          <p>
            Our experienced legal team specializes in providing legal help and justice to victims in such cases. We handle every case with sensitivity and confidentiality.
          </p>

          <h2 className="mt-12">Types of Harassment & Torture Cases</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>Domestic Torture / Harassment:</strong>
              <p>When family or in-laws mentally or physically torture a woman, these offenses fall under Section 498A IPC and the Domestic Violence Act, 2005. We help women file complaints, protection orders, and maintenance claims through the proper legal procedure.</p>
            </li>
            <li>
              <strong>Workplace Harassment:</strong>
              <p>If a woman or employee faces sexual comments, unwanted attention, or threats at the workplace, it is an offense under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013. Our team assists in the internal complaints committee (IC) process and legal redressal in labour courts.</p>
            </li>
            <li>
              <strong>Mental Harassment:</strong>
              <p>Continuous pressure, humiliation, insult, or abusive behavior that affects a person's mental state is called mental harassment. Such cases can be filed under Section 509 IPC (insulting modesty) or for civil remedies for defamation and compensation.</p>
            </li>
            <li>
              <strong>Cyber Harassment:</strong>
              <p>Online trolling, fake profiles, threatening messages, or sharing obscene content comes under cyber harassment. We help in taking legal action through the cybercrime police and cyber cell.</p>
            </li>
            <li>
              <strong>Dowry-Related Torture:</strong>
              <p>If harassment or violence is committed for dowry after marriage, this offense is strictly punishable under Section 304B IPC (Dowry Death) and 498A IPC. We assist victims in filing FIRs, dowry complaints, and representation before the women's cell & court.</p>
            </li>
          </ol>

          <h2 className="mt-12">Legal Remedies Available</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>FIR Registration:</strong> Filing a complaint at the police station is the first step. Our team guides you with the correct sections and procedures.</li>
            <li><strong>Protection Orders:</strong> Protection, residence, and maintenance orders can be obtained under the Domestic Violence Act.</li>
            <li><strong>Bail & Anticipatory Bail:</strong> If someone has been falsely accused, we help in the anticipatory bail and regular bail process.</li>
            <li><strong>Court Representation:</strong> We provide professional representation in the Sessions Court, High Court, and Women's Cell.</li>
            <li><strong>Mediation & Settlement:</strong> In some cases, a settlement is a better solution. We help in fair mediation between both parties.</li>
          </ul>

          <h2 className="mt-12">Why Choose Us</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Experienced criminal & family lawyers for harassment and torture cases</li>
                <li>Expert in 498A, Domestic Violence Act & Sexual Harassment Act</li>
                <li>Confidential consultation & client privacy assurance</li>
                <li>Proper documentation and evidence collection support</li>
                <li>24×7 legal assistance and fast response</li>
            </ul>
            <p>Our aim is that every victim gets protection, justice, and self-respect back. Our goal is to provide justice with compassion and strong legal backing.</p>

          <h2 className="mt-12">Areas We Serve:</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Women harassment and torture cases</li>
                <li>False harassment allegations defense</li>
                <li>Corporate & workplace sexual harassment</li>
                <li>Domestic violence and dowry harassment</li>
                <li>Cyber and social media harassment cases</li>
            </ul>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Contact Us Today</h3>
            <p className="mt-2 text-muted-foreground">If you or someone you know is a victim of harassment or torture, do not stay silent.</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2" />
                Call us for immediate legal help – 7597497063
              </a>
            </Button>
            <p>We will show you the right legal path and stand with you at every step.</p>
          </div>

          <h2 className="mt-12">Frequently Asked Questions (FAQ)</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-4 bg-card rounded-lg">
            <h3 className="font-bold">For Expert Legal Advice:</h3>
            <p className="font-semibold mt-2">Contact Us</p>
            <p>Best Harassment & Torture Case Lawyers</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call: 7597497063
              </a>
            </Button>
            <p className="mt-4">Address: 96 Agra Road, Prem Nagar Jaipur, Rajasthan 302031</p>
            <p>Email: <a href="mailto:Ajaykumarsharma32727@gmail.com" className='text-primary'>Ajaykumarsharma32727@gmail.com</a></p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-24">
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
