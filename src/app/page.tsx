import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button variant="outline">Click me</Button>
      <UserButton />
    </div>
  );
}
