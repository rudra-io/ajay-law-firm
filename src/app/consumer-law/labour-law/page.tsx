
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { benefits } from '@/lib/data';
import { CheckCircle2, ChevronRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function LabourLawPage() {
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
          
          <h2>Labour Law</h2>
          <p>
            Labour Law protects the rights of both employees and employers. If you’re facing issues like unpaid salary, wrongful termination, or labour disputes, we provide expert legal advice and representation (📞 7597497063).
          </p>
          
          <Button asChild size="lg">
            <a href="tel:7597497063">
              <Phone className="mr-2 h-5 w-5" />
              Call US: 7597497063
            </a>
          </Button>

          <p className="mt-8">
            आज के समय में हर employee और employer के बीच एक healthy और fair relationship बनाए रखना बहुत ज़रूरी है। Labour Law (श्रम कानून) इसी balance को बनाए रखने के लिए बनाया गया है — ताकि किसी के साथ भी अन्याय न हो।
          </p>
          <p>
            अगर आप एक employee हैं और आपकी salary रोकी जा रही है, workplace पर harassment हो रहा है, या आपको बिना कारण terminate कर दिया गया है — तो यह आपके legal rights का उल्लंघन है। वहीं अगर आप एक employer हैं और आपको workers के साथ compliance, labour court case या trade union dispute का सामना करना पड़ रहा है — तो आपको भी expert legal guidance की जरूरत होती है।
          </p>
          <p className="font-bold text-lg text-center my-4">👉 A trusted Labour Law Legal Firm in Jaipur.</p>

          <h2 className="mt-12">Labour Law Kya Hai?</h2>
          <p>
            Labour Law (श्रम कानून) एक ऐसा कानूनी framework है जो employees और employers दोनों के अधिकारों (rights) और जिम्मेदारियों (duties) को निर्धारित करता है। इसका मुख्य उद्देश्य है – fair working conditions, job security, और equal treatment सुनिश्चित करना।
          </p>
          <p>भारत में लागू मुख्य Labour Laws हैं:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The Industrial Disputes Act, 1947</li>
            <li>The Payment of Wages Act, 1936</li>
            <li>The Minimum Wages Act, 1948</li>
            <li>The Employees’ Provident Fund Act, 1952</li>
            <li>The Payment of Gratuity Act, 1972</li>
            <li>The Employees’ State Insurance Act, 1948</li>
            <li>The Factories Act, 1948</li>
          </ul>
          <p>ये सारे कानून यह तय करते हैं कि हर worker को minimum wages, safe working conditions, timely payment, और unfair termination से protection मिले।</p>

          <h2 className="mt-12">Labour Law Legal Help in Jaipur</h2>
          <p>
            Our experienced advocates की टीम हर प्रकार के Labour Law cases को handle करती है (📞 7597497063)। हमारी कोशिश होती है कि हर client को legal protection, peace of mind, और justice मिले।
          </p>
          <p>
            चाहे case कितना भी complex क्यों न हो — हमारी legal team उसे simplify करके step-by-step solution देती है।
          </p>

          <h2 className="mt-12">For Employees – आपकी Legal Safety हमारी जिम्मेदारी</h2>
          <p>अगर आप एक employee हैं, तो ये आपके कुछ basic labour rights हैं:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>हर महीने timely salary मिलना</li>
            <li>बिना कारण terminate न किया जाना</li>
            <li>harassment या discrimination से सुरक्षा</li>
            <li>overtime का भुगतान</li>
            <li>PF और ESI की सुविधा</li>
            <li>equal work के लिए equal pay</li>
          </ul>
          <p>लेकिन अक्सर employers इन rights को नज़रअंदाज़ कर देते हैं। ऐसी स्थिति में हम आपकी ओर से legal action लेकर आपको न्याय दिलाने में मदद करते हैं।</p>
          <h3 className="text-xl mt-4">Common Employee Cases:</h3>
          <ul className="list-disc pl-5 space-y-2">
              <li>Salary not received / delay in payment</li>
              <li>Illegal termination or dismissal</li>
              <li>Workplace harassment or abuse</li>
              <li>Gratuity or bonus not given</li>
              <li>Contract violation by company</li>
              <li>Labour court representation</li>
          </ul>
          <p>हमारे lawyers आपकी पूरी legal file तैयार करते हैं, evidence collect करते हैं और court में आपकी ओर से strong representation करते हैं।</p>

          <h2 className="mt-12">For Employers – Legal Compliance aur Dispute Management</h2>
          <p>अगर आप एक business owner या employer हैं, तो आपके लिए भी कई legal obligations होती हैं। कभी-कभी small mistake भी labour department से penalty या case का कारण बन सकती है।</p>
          <p>हम आपकी company के लिए complete Labour Law compliance और dispute management service प्रदान करते हैं।</p>
          <h3 className="text-xl mt-4">Employer Legal Services:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Employment contract drafting</li>
            <li>HR policy & compliance check</li>
            <li>Employee dispute resolution</li>
            <li>Labour court case defence</li>
            <li>Industrial dispute settlement</li>
            <li>Advice on retrenchment & layoffs</li>
            <li>PF, ESI, gratuity compliance</li>
          </ul>
          <p>हमारा उद्देश्य है कि आपका business law के अनुसार smoothly चले और किसी तरह के legal risk से बचा रहे।</p>

          <h2 className="mt-12">Why Choose Us?</h2>
          <p>Jaipur में कई legal firms हैं, लेकिन हम सबसे trusted नामों में से एक हैं 👇</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>✅ Experienced Labour Law Advocates</li>
            <li>✅ Transparent Legal Advice</li>
            <li>✅ Fast & Effective Process</li>
            <li>✅ Affordable Consultation</li>
            <li>✅ Personalized Support</li>
          </ul>

          <h2 className="mt-12">Common Labour Law Disputes We Handle</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Wrongful termination cases</li>
                <li>Unpaid wages or salary delay</li>
                <li>Workplace harassment & discrimination</li>
                <li>Contract labour disputes</li>
                <li>Industrial relation issues</li>
                <li>Bonus, gratuity & leave disputes</li>
                <li>Trade union & employee strike management</li>
                <li>PF / ESI legal problems</li>
            </ul>
          <p className="mt-4">हर case को हम legally और practically analyze करते हैं ताकि आपको जल्द से जल्द relief मिले।</p>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground">Client Support & Consultation</h3>
            <p className="mt-2">आप WhatsApp या Call के ज़रिए consultation बुक कर सकते हैं। हम आपको आपकी situation के हिसाब से best legal advice देंगे — चाहे वह negotiation हो या court case।</p>
            <Button asChild size="lg" className="mt-4">
              <a href="tel:7597497063">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7597497063
              </a>
            </Button>
            <p className="mt-2 text-sm">Office: Jaipur, Rajasthan</p>
          </div>

          <h2 className="mt-12">Conclusion</h2>
          <p>कानून सबके लिए बराबर है — चाहे आप employer हों या employee। हमारा लक्ष्य है कि हर व्यक्ति को अपने श्रमिक अधिकारों (Labour Rights) की सही जानकारी और न्याय मिले।</p>
          <p>अगर आप किसी भी प्रकार के Labour Law issue से गुजर रहे हैं, तो देर न करें — आज ही call करें 👉 7597497063</p>
          <p className="font-bold mt-4">Your legal partner – Justice with Trust.</p>
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
