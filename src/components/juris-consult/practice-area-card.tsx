
'use client';

import type { PracticeArea } from '@/lib/data';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type PracticeAreaCardProps = {
  area: PracticeArea;
  index: number;
};

const Icon = ({ name, ...props }: { name: string } & LucideIcons.LucideProps) => {
    const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
    if (!LucideIcon) return null;
    return <LucideIcon {...props} />;
};

export function PracticeAreaCard({ area }: PracticeAreaCardProps) {
    const getHrefForArea = (id: string) => {
        switch (id) {
        case 'bail':
            return '/bail-matters';
        case 'civil':
            return '/civil-law';
        case 'consumer':
            return '/consumer-law';
        case 'marriage':
            return '/court-marriage';
        case 'criminal':
            return '/criminal-law';
        case 'family':
            return '/family-law';
        case 'cyber':
            return '/cyber-law';
        default:
            return '#';
        }
    };
    
    const href = getHrefForArea(area.id);

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
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-full"
        >
          <Link href={href} className="group h-full block">
            <Card className={cn(
              "flex flex-col h-full overflow-hidden transition-all duration-300",
              "bg-primary/80 text-primary-foreground hover:bg-primary/90"
            )}>
              <CardHeader className="flex flex-col items-center text-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground">
                    <Icon name={area.icon} className="h-10 w-10" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{area.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                  <CardDescription className="text-primary-foreground/80">
                    {area.description}
                  </CardDescription>
              </CardContent>
              <CardContent>
                  <div className="flex items-center justify-center text-sm font-semibold text-primary-foreground transition-transform duration-300 group-hover:translate-x-1">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
    );
}
