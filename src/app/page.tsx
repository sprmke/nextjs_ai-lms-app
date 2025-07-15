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
          <Link href="/sign-up">
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

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform provides all the tools you need for
              effective learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Course Generation
              </h3>
              <p className="text-gray-600 mb-6">
                Generate personalized courses tailored to your learning style
                and goals with our advanced AI.
              </p>
              <Image
                src="/content.png"
                alt="AI Course Generation"
                width={200}
                height={120}
                className="rounded-lg"
              />
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Interactive Quizzes
              </h3>
              <p className="text-gray-600 mb-6">
                Test your knowledge with adaptive quizzes that adjust to your
                performance level.
              </p>
              <Image
                src="/quiz.png"
                alt="Interactive Quizzes"
                width={200}
                height={120}
                className="rounded-lg"
              />
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Smart Flashcards
              </h3>
              <p className="text-gray-600 mb-6">
                Create and study with intelligent flashcards that help you
                retain information better.
              </p>
              <Image
                src="/flashcard.png"
                alt="Smart Flashcards"
                width={200}
                height={120}
                className="rounded-lg"
              />
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Practice Sessions
              </h3>
              <p className="text-gray-600 mb-6">
                Engage in focused practice sessions designed to reinforce your
                learning.
              </p>
              <Image
                src="/practice.png"
                alt="Practice Sessions"
                width={200}
                height={120}
                className="rounded-lg"
              />
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Progress Tracking
              </h3>
              <p className="text-gray-600 mb-6">
                Monitor your learning progress with detailed analytics and
                insights.
              </p>
              <Image
                src="/exam.png"
                alt="Progress Tracking"
                width={200}
                height={120}
                className="rounded-lg"
              />
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Q&A Support
              </h3>
              <p className="text-gray-600 mb-6">
                Get instant answers to your questions with our intelligent AI
                assistant.
              </p>
              <Image
                src="/qa.png"
                alt="AI Q&A Support"
                width={200}
                height={120}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Courses Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners who are already achieving their goals
            with AI-powered education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/sign-up">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm">Trusted by 10,000+ learners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/logo.svg"
                alt="AI LMS Logo"
                width={32}
                height={32}
                className="bg-blue-100 p-1 rounded-lg"
              />
              <span className="text-lg font-bold">AI LMS</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 AI LMS. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
