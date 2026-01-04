
'use client';

import { motion } from 'framer-motion';
import { practiceAreas } from '@/lib/data';
import { PracticeAreaCard } from './practice-area-card';

export function PracticeAreasSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="practice-areas"
      className="py-16 md:py-24 bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="mx-[10%]">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p className="font-semibold text-primary" variants={itemVariants}>Our Expertise</motion.p>
          <motion.h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl" variants={itemVariants}>
            Practice Areas
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted-foreground" variants={itemVariants}>
            We offer a comprehensive range of legal services. Our team's expertise spans across various fields, ensuring you receive specialized and effective representation.
          </motion.p>
        </div>
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
        >
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard key={area.id} area={area} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
