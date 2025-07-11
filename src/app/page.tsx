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

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered Learning Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Master Any Subject with
            <span className="text-blue-600 block">AI-Powered Learning</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your learning experience with personalized AI courses,
            interactive quizzes, and intelligent study tools designed to help
            you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/sign-up">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Learning Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
