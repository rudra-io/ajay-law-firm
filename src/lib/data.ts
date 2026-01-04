
import { PlaceHolderImages } from './placeholder-images';

export type PracticeArea = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Attorney = {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  bio: string;
  practiceAreaIds: string[];
};

export type Testimonial = {
  id:string;
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
  imageHint: string;
};

export type BailMatterService = {
  id: string;
  name: string;
  description: string;
};

export const practiceAreas: PracticeArea[] = [
  { id: 'bail', name: 'Bail Matters', description: 'Expert legal support for anticipatory bail, regular bail, and other related criminal proceedings to protect your liberty.', icon: 'Gavel' },
  { id: 'civil', name: 'Civil Law', description: 'Comprehensive handling of civil disputes including property, contracts, and money recovery suits.', icon: 'Scale' },
  { id: 'consumer', name: 'Consumer Law', description: 'Protecting consumer rights against unfair trade practices, defective products, and service deficiencies.', icon: 'ShoppingCart' },
  { id: 'marriage', name: 'Court Marriage', description: 'Complete guidance for marriage registration, including inter-caste, inter-religion, and NRI marriages.', icon: 'HeartHandshake' },
  { id: 'criminal', name: 'Criminal Law', description: 'Robust defense strategies for individuals facing criminal charges, from investigation to trial.', icon: 'Shield' },
  { id: 'family', name: 'Family Law', description: 'Sensitive and effective handling of divorce, child custody, and other matrimonial disputes.', icon: 'Heart' },
  { id: 'cyber', name: 'Cyber Law', description: 'Specialized legal services for cybercrime, data protection, and online legal issues.', icon: 'Shield' },
];

export const attorneys: Attorney[] = [
  {
    id: '1',
    name: 'Advocate Siyaram Sharma',
    title: 'Senior Associate',
    imageUrl: '/L1.png',
    imageHint: 'professional headshot man',
    bio: 'A dedicated advocate with extensive experience in civil and corporate law, providing clients with strategic and effective legal solutions.',
    practiceAreaIds: ['corporate', 'civil'],
  },
  {
    id: '2',
    name: 'Advocate Ajay Kumar Sharma',
    title: 'Founder & Lead Counsel',
    imageUrl: '/L2.png',
    imageHint: 'professional headshot man',
    bio: 'Advocate Ajay is a seasoned litigator with a focus on criminal defense, family law, and cyber law. He has a passion for justice and client advocacy, with a track record of success in complex cases.',
    practiceAreaIds: ['criminal', 'bail-matters', 'family', 'cyber'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'During a complex corporate merger, Legal Solutions Jaipur provided exceptional guidance. Their professionalism and deep expertise in corporate law were second to none.',
    name: 'Shankar Vijay',
    title: 'Private Client',
    imageUrl: 'https://picsum.photos/seed/1/100/100',
    imageHint: 'professional headshot',
  },
  {
    id: '2',
    quote: "Facing a difficult criminal charge, I was lost. Advocate Ajay and his team were my anchor, fighting tirelessly for me and securing a positive outcome. I can't thank them enough.",
    name: 'Rohit kumar',
    title: 'Private Client',
    imageUrl: 'https://picsum.photos/seed/2/100/100',
    imageHint: 'client portrait',
  },
  {
    id: '3',
    quote: 'The team at Legal Solutions Jaipur handled my sensitive family law matter with the utmost care. They were not just attorneys but true advisors who guided me through a challenging time.',
    name: 'Shikhar Sharma',
    title: 'Private Client',
    imageUrl: 'https://picsum.photos/seed/3/100/100',
    imageHint: 'happy client',
  },
  {
    id: '4',
    quote: 'As a startup, protecting our IP was critical. Legal Solutions Jaipur made the patent and trademark process clear and seamless. Their strategic advice has been invaluable.',
    name: 'Priya Patel',
    title: 'Founder, InnovateU',
    imageUrl: 'https://picsum.photos/seed/4/100/100',
    imageHint: 'corporate headshot',
  },
];

export const benefits = [
    "Expert legal guidance for cyber, criminal, and family law cases",
    "Personalized approach for each client and case",
    "Timely case updates and transparent communication",
    "Strong representation in Jaipur courts and Rajasthan High Court",
    "Assistance with legal documentation, filings, and compliance"
];

