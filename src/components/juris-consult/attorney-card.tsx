
'use client';

import type { Attorney } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type AttorneyCardProps = {
  attorney: Attorney;
};

export function AttorneyCard({ attorney }: AttorneyCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 cursor-pointer max-w-sm w-full mx-auto">
          <div className="relative h-96 w-full">
            <Image
              src={attorney.imageUrl}
              alt={`Photo of ${attorney.name}`}
              fill
              className="object-cover object-top"
              data-ai-hint={attorney.imageHint}
            />
          </div>
          <CardHeader>
            <CardTitle className="font-headline text-xl">{attorney.name}</CardTitle>
            <Badge variant="secondary" className="w-fit">{attorney.title}</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3">{attorney.bio}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-headline text-3xl font-bold text-foreground">{attorney.name}</DialogTitle>
          <DialogDescription asChild>
             <div><Badge variant="secondary" className="w-fit">{attorney.title}</Badge></div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2">
          <div className="relative h-96 md:h-[32rem] w-full">
            <Image
              src={attorney.imageUrl}
              alt={`Photo of ${attorney.name}`}
              fill
              className="object-cover object-top rounded-l-lg"
              data-ai-hint={attorney.imageHint}
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <p className="text-muted-foreground">{attorney.bio}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
