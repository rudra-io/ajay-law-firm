
'use client';

import { Button } from '../ui/button';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-150%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section ref={targetRef} className="relative h-[100svh] w-full overflow-hidden bg-background">
      <div className="h-full">
        {/* Background Image with Parallax Zoom */}
        <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full">
          <Image
            src="/rex.jpg"
            alt="Hero Image"
            fill
            quality={100}
            priority
            className="object-cover object-[75%_center] md:object-[65%_center] lg:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </motion.div>

        {/* Text Layer */}
        <div className="absolute inset-0 flex items-center justify-start">
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="container mx-auto px-4 text-left"
          >
            <motion.div
              className="max-w-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="mb-2 font-semibold uppercase tracking-widest text-primary-foreground/80"
                variants={itemVariants}
              >
                Law Consultancy
              </motion.p>

              <motion.h1
                className="font-headline text-4xl font-bold text-primary-foreground md:text-6xl"
                variants={itemVariants}
              >
                Experienced
                <br />
                Legal Advice
              </motion.h1>

              <motion.p
                className="mt-6 max-w-lg text-lg text-primary-foreground/90"
                variants={itemVariants}
              >
                we believe in empowering businesses and individuals with comprehensive legal solutions tailored to meet unique challenges.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Button size="lg" className="mt-8 uppercase tracking-wider" asChild>
                  <Link href="#practice-areas">Explore More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
