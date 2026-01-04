
'use client';
import { motion } from 'framer-motion';
import { Scale, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const reasons = [
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: 'Expertise & Experience',
    description: 'Our team comprises seasoned legal professionals with deep knowledge across various domains of law.',
    imageUrl: '/img1.jpg',
    imageHint: 'lawyers collaborating',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Client-Centric Approach',
    description: 'We prioritize your needs, offering personalized strategies and maintaining transparent communication.',
    imageUrl: '/img4.jpg',
    imageHint: 'client consultation',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Proven Track Record',
    description: 'A history of successful outcomes and satisfied clients stands as a testament to our dedication and skill.',
    imageUrl: '/img3.jpg',
    imageHint: 'handshake deal',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Strategic Solutions',
    description: 'We go beyond traditional methods, providing innovative and strategic solutions for complex legal challenges.',
    imageUrl: '/img5.jpg',
    imageHint: 'strategy meeting',
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = (direction: 'left' | 'right') => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
});


export function WhyChooseUs() {
  return (
    <motion.section
      id="why-us"
      className="py-16 md:py-24 bg-transparent overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="mx-[10%]">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-20">
          <motion.p className="font-semibold text-primary" variants={itemVariants('left')}>Our Commitment</motion.p>
          <motion.h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl" variants={itemVariants('right')}>
            Why Choose Legal Solutions Jaipur?
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted-foreground" variants={itemVariants('left')}>
            We stand apart through our dedication to excellence, integrity, and achieving the best possible outcomes for our clients.
          </motion.p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              custom={index % 2 === 0 ? 'left' : 'right'}
              variants={itemVariants(index % 2 === 0 ? 'left' : 'right')}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              <div className={cn(
                "grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12",
                index % 2 !== 0 && "md:grid-flow-col-dense"
              )}>
                <div className={cn("relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-primary", index % 2 !== 0 && "md:col-start-2")}>
                  <Image
                    src={reason.imageUrl}
                    alt={reason.title}
                    fill
                    className="object-cover"
                    data-ai-hint={reason.imageHint}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={cn("flex flex-col justify-center", index % 2 !== 0 && "md:col-start-1 md:row-start-1")}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      {reason.icon}
                    </div>
                    <h3 className="font-headline text-2xl font-bold">{reason.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
