
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useActiveSection } from '@/hooks/use-active-section';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/#why-us', label: 'ABOUT' },
  { href: '/#practice-areas', label: 'SERVICES' },
  { href: '/#contact', label: 'CONTACT' },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const activeSection = useActiveSection(['why-us', 'practice-areas', 'team', 'contact']);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); 
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
        setScrolled(true);
    }
  }, [isHomePage]);
  
  const getActiveHref = () => {
    if (!isHomePage) return pathname;
    if (activeSection) return `/#${activeSection}`;
    if (pathname === '/') return '/';
    return '';
  }

  const activeHref = getActiveHref();
  const showSolidHeader = !isHomePage || scrolled;

  return (
    <header 
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        showSolidHeader ? 'bg-[#2E3142] shadow-lg' : 'bg-transparent'
      )}
    >
      <div className={cn(
        "container mx-auto flex items-center justify-between px-4 transition-all duration-300",
        showSolidHeader ? "h-20" : "h-24"
      )}>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Legal Solutions Jaipur Logo" width={150} height={150} className="transition-all" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm md:text-base font-medium transition-colors",
                "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              {link.label}
              {((isHomePage && link.href === activeHref) || (!isHomePage && link.href === '/')) && (
                <motion.div
                  layoutId="active-nav-underline"
                  className={cn("absolute bottom-0 left-0 right-0 h-0.5", "bg-primary")}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={cn("text-primary-foreground hover:bg-white/10")}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#2E3142] border-r-0">
            <div className="flex h-full flex-col">
              <div className="mb-8 flex items-center gap-2">
                <Image src="/logo.png" alt="Legal Solutions Jaipur Logo" width={60} height={60} />
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
