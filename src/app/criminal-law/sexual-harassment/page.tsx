
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const faqs = [
    {
        question: "Q1. How should I file a sexual harassment case?",
        answer: "You can file a written complaint with your workplace's Internal Committee (IC) or at the nearest police station. Our legal team can assist you throughout this process."
    },
    {
        question: "Q2. Is the sexual harassment law only for women?",
        answer: "The POSH Act is for the protection of women. However, men who face harassment can file complaints under other provisions of the Indian Penal Code."
    },
    {
        question: "Q3. What if false sexual harassment allegations are made against me?",
        answer: "In such cases, seek anticipatory bail immediately, gather evidence, and contact our defense team to protect your rights."
    },
    {
        question: "Q4. Can a company be held responsible in a workplace harassment case?",
        answer: "Yes, if the employer has not constituted an Internal Committee (IC) or ignores a complaint, action can be taken against the company."
    },
    {
        question: "Q5. Can a victim get compensation in harassment cases?",
        answer: "Yes, the victim can receive compensation for emotional damage, loss of career opportunity, and mental trauma."
    }
];

const legalProvisions = [
    { section: 'Section 354 IPC', description: 'Assault or criminal force to a woman with intent to outrage her modesty', punishment: 'Up to 5 years imprisonment + fine' },
    { section: 'Section 354A IPC', description: 'Making physical contact, sexual remarks, or demanding sexual favours', punishment: 'Up to 3 years imprisonment' },
    { section: 'Section 354D IPC', description: 'Stalking', punishment: 'Up to 3 years imprisonment (for the first offence)' },
    { section: 'Section 509 IPC', description: 'Word, gesture, or act intended to insult the modesty of a woman', punishment: 'Up to 3 years simple imprisonment + fine' },
    { section: 'POSH Act, 2013', description: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act', punishment: 'Civil and criminal penalties' }
];

export default function SexualHarassmentPage() {
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
          <h1 className="border-b border-primary/20 pb-4">Sexual Harassment</h1>
          <p>
            If you are facing sexual harassment in your workplace or personal life, we provide complete legal assistance to protect your privacy, dignity, and justice—with confidential & expert legal support.
          </p>
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            Sexual Harassment is an offense that violates an individual's dignity, mental peace, and right to safety. In India, sexual harassment is legally recognized and punishable under various laws—especially Sections 354, 354A, 354D, 509 of the IPC and the POSH Act, 2013 (Prevention of Sexual Harassment at Workplace).
          </p>
          <p>
            We provide legal protection to both victims and falsely accused individuals, offering services like FIR filing, complaint support, and court representation.
          </p>

          <h2 className="mt-12">Types of Sexual Harassment Cases</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>Workplace Sexual Harassment:</strong>
              <p>When a woman faces inappropriate behavior, sexual comments, unwanted touching, or staring at the workplace, it is punishable under the POSH Act, 2013. We help victims approach the Internal Committee (IC) and also provide court representation.</p>
            </li>
            <li>
              <strong>Physical Harassment:</strong>
              <p>Physical contact, unwanted touching, or assault falls under Section 354 of the IPC – Assault or criminal force to a woman with intent to outrage her modesty. We assist from police FIR to medical evidence and trial.</p>
            </li>
            <li>
              <strong>Verbal or Mental Harassment:</strong>
              <p>Lewd comments, offensive jokes, or threats can lead to trauma. Such acts are covered under Section 509 of the IPC – Word, gesture, or act intended to insult the modesty of a woman.</p>
            </li>
            <li>
              <strong>Cyber Sexual Harassment:</strong>
              <p>Creating fake profiles, sending obscene content, or online threats are cybercrime offenses. Our cyber law experts handle complaints through the Cyber Cell & local police.</p>
            </li>
            <li>
              <strong>Stalking and Unwanted Attention:</strong>
              <p>Repeatedly following, messaging, or intimidating someone constitutes stalking under Section 354D of the IPC. We assist in filing FIRs, obtaining restraining orders, and ensuring safety.</p>
            </li>
          </ol>

          <h2 className="mt-12">Relevant Legal Provisions</h2>
          <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>IPC Section / Act</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Punishment</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {legalProvisions.map((provision, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{provision.section}</TableCell>
                        <TableCell>{provision.description}</TableCell>
                        <TableCell>{provision.punishment}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
          </Table>

          <h2 className="mt-12">Our Legal Services Include</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Legal Advice & Case Assessment:</strong> We provide confidential consultation to understand the facts and advise the best legal course of action.</li>
            <li><strong>Complaint Drafting & Filing:</strong> We assist in filing a written complaint with the IC, Police, or Magistrate under the POSH Act or IPC.</li>
            <li><strong>FIR Registration & Police Support:</strong> Our team helps ensure your FIR is correctly drafted under the relevant IPC sections.</li>
            <li><strong>Court Representation:</strong> Experienced advocates represent you in the Sessions Court, and High Court.</li>
            <li><strong>False Allegation Defence:</strong> If you’ve been falsely accused of sexual harassment, we provide a strong defense strategy and help in obtaining anticipatory bail.</li>
          </ul>

          <h2 className="mt-12">Rights of the Victim</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>A complaint can be filed within 3 months of the incident under the POSH Act.</li>
                <li>The victim has the right to privacy and dignity during the investigation.</li>
                <li>Interim protection orders and transfer from the workplace can be requested.</li>
                <li>Compensation can be claimed for emotional distress and loss of career opportunities.</li>
            </ul>

          <h2 className="mt-12">Why Choose Us</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Expert team of criminal and POSH Act lawyers.</li>
                <li>100% confidential consultation (privacy protected).</li>
                <li>Assistance in both victim and defense cases.</li>
                <li>Proper documentation, evidence support, and fast filing.</li>
                <li>Representation in court, IC, and other forums.</li>
            </ul>
            <p>Our team handles every case with sensitivity, dignity, and professionalism—to ensure you get proper justice and protection.</p>

          <h2 className="mt-12">Common Clients We Assist:</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Working professionals (corporate employees, HRs, managers)</li>
                <li>Students facing campus harassment</li>
                <li>Domestic workers or household staff</li>
                <li>Individuals falsely accused of sexual misconduct</li>
                <li>Organizations needing POSH compliance</li>
            </ul>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
                <h3 className="font-serif text-2xl font-bold text-foreground">Contact Us Today</h3>
                <p className="mt-2 text-muted-foreground">If you are a victim of sexual harassment or are troubled by false allegations, contact us immediately.</p>
                <Button asChild size="lg" className="mt-4">
                  <a href="tel:7597497063">
                    <Phone className="mr-2" />
                    Call: 7597497063
                  </a>
                </Button>
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
            <h3 className="font-bold">For Confidential Legal Help:</h3>
            <p className='font-semibold mt-2'>Contact Us</p>
            <p>Best Sexual Harassment & POSH Act Lawyers</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7597497063
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
