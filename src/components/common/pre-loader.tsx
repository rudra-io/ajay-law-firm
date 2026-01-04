
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function PreLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background pointer-events-none',
        !isLoading && 'hidden'
      )}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Image
          src="/logo2.png"
          alt="Legal Solutions Jaipur Logo"
          width={100}
          height={100}
          priority
        />
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '8rem' }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
        className="h-1 bg-primary/20 rounded-full overflow-hidden mt-6"
      >
        <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%'}}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
            }}
        />
      </motion.div>
    </motion.div>
  );
}
