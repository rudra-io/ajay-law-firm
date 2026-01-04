import { Hero } from '@/components/juris-consult/hero';
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('@/components/juris-consult/testimonials-section').then(mod => mod.TestimonialsSection));
const WhyChooseUs = dynamic(() => import('@/components/juris-consult/why-choose-us').then(mod => mod.WhyChooseUs));
const PracticeAreasSection = dynamic(() => import('@/components/juris-consult/practice-areas-section').then(mod => mod.PracticeAreasSection));
const TeamSection = dynamic(() => import('@/components/juris-consult/team-section').then(mod => mod.TeamSection));
const FaqSection = dynamic(() => import('@/components/juris-consult/faq-section').then(mod => mod.FaqSection));
const ContactSection = dynamic(() => import('@/components/juris-consult/contact-section').then(mod => mod.ContactSection));

export default function Home() {
  return (
    <>
      <Hero />
      <TestimonialsSection />
      <WhyChooseUs />
      <PracticeAreasSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
