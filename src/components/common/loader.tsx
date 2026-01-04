import { Loader2 } from 'lucide-react';

export function Loader() {
  return (
    <div className="flex h-full min-h-[calc(100vh-10rem)] w-full items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
    </div>
  );
}
