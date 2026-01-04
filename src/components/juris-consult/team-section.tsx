
'use client';
import { attorneys } from '@/lib/data';
import { AttorneyCard } from './attorney-card';
import { motion } from 'framer-motion';

export function TeamSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <motion.section 
      id="team" 
      className="py-16 md:py-24 bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="mx-[10%]">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p className="font-semibold text-primary" variants={itemVariants}>Our Legal Experts</motion.p>
          <motion.h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl" variants={itemVariants}>
            Meet Our Attorneys
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted-foreground" variants={itemVariants}>
            Our team of dedicated and experienced attorneys is the cornerstone of our success. Get to know the legal minds who will champion your cause.
          </motion.p>
        </div>
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-8"
          variants={sectionVariants}
        >
          {attorneys.map((attorney, index) => (
            <motion.div key={attorney.id} custom={index} variants={itemVariants} className="w-full sm:w-auto">
              <AttorneyCard attorney={attorney} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
