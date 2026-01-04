
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path
      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.004 1.764 5.833h.001z"
    />
  </svg>
);

export function WhatsAppCard() {
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https%3A%2F%2Fwa.me%2F917597497063";
  const whatsappUrl = "https://wa.me/917597497063";

  return (
    <Card className="max-w-md mx-auto shadow-xl bg-background/10">
      <CardContent className="p-8 text-center flex flex-col items-center justify-between h-full">
        <div>
            <h3 className="font-headline text-2xl font-bold text-primary-foreground">Chat with us on WhatsApp</h3>
            <p className="mt-2 text-primary-foreground/80">
            Scan the QR code with your phone or click the button below.
            </p>
            <div className="my-6 flex justify-center">
                <div className="p-2 bg-white rounded-lg">
                    <Image 
                        src={qrCodeUrl} 
                        alt="WhatsApp QR Code"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
        <Button asChild size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            <span>Open WhatsApp</span>
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
