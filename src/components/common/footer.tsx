'use client';

import * as React from 'react';
import Link from 'next/link';
import { practiceAreas } from '@/lib/data';

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

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#2E3142] text-primary-foreground/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
                <h3 className="font-headline text-xl font-bold text-primary-foreground">Legal Solutions Jaipur</h3>
                <p className="mt-2 text-sm">Your trusted partner for comprehensive legal services in Jaipur.</p>
            </div>
            <div className="md:col-span-3">
                <h3 className="font-headline text-lg font-semibold text-primary-foreground mb-4">Practice Areas</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {practiceAreas.map((area) => (
                        <Link key={area.id} href={getHrefForArea(area.id)} className="text-sm hover:text-primary-foreground hover:underline transition-colors">
                            {area.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-6">
            <p className="text-center text-sm">
            &copy; {currentYear} Legal Solutions Jaipur. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
