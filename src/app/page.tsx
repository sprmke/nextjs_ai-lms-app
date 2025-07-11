import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Brain,
  Target,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="AI LMS Logo"
            width={40}
            height={40}
            className="bg-blue-100 p-2 rounded-lg"
          />
          <span className="text-xl font-bold text-gray-900">AI LMS</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
