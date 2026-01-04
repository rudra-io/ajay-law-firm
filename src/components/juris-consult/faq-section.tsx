
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { homepageFaqs } from '@/lib/data/homepage-faqs';
import { motion } from 'framer-motion';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export function FaqSection() {
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
      id="faq"
      className="py-16 md:py-24 bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="mx-[10%]">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p className="mt-4 text-lg text-muted-foreground" variants={itemVariants}>
            Get answers to common questions about our specialized legal services in Jaipur.
          </motion.p>
        </div>

        <motion.div className="mt-12 max-w-4xl mx-auto" variants={itemVariants}>
          <Tabs defaultValue="cyber-crime" className="w-full">
            <div className="flex justify-center">
              <ScrollArea className="max-w-full">
                <TabsList className="inline-flex w-max">
                  {Object.keys(homepageFaqs).map(categoryKey => (
                    <TabsTrigger key={categoryKey} value={categoryKey}>
                      {homepageFaqs[categoryKey as keyof typeof homepageFaqs].title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            {Object.keys(homepageFaqs).map(categoryKey => {
              const category = homepageFaqs[categoryKey as keyof typeof homepageFaqs];
              return (
                <TabsContent key={categoryKey} value={categoryKey} className="mt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>
      </div>
    </motion.section>
  );
}
