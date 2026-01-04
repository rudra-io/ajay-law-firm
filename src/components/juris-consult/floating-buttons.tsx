
'use client';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Phone } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8"
  >
    <path
      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004 1.764 5.833h.001z"
    />
  </svg>
);


export function FloatingButtons() {
  return (
    <TooltipProvider>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="lg"
              className="rounded-full h-16 w-16 p-0 bg-green-500 hover:bg-green-600 shadow-lg"
              aria-label="Chat on WhatsApp"
            >
              <a href="https://wa.me/917597497063" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="lg"
              className="rounded-full h-16 w-16 p-0 bg-primary hover:bg-primary/90 shadow-lg"
              aria-label="Call Now"
            >
              <a href="tel:7597497063">
                <Phone className="h-8 w-8" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Call Now</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
