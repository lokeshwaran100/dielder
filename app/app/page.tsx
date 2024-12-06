import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Shield, Sparkles, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Sparkles className="h-6 w-6" />
              <span className="font-bold">Dielder</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/onboarding">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered DeFi <br className="hidden sm:inline" />
            Investment Platform
          </h1>
          <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Simplify your long-term DeFi investments with automated portfolio management and intelligent risk optimization.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/onboarding">
              <Button size="lg" className="h-12">
                Start Investing
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="h-12">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Secure & Verified</h3>
              <p className="text-muted-foreground">
                Your investments are protected through verified DeFi protocols and smart contract audits.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Sparkles className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">AI Optimization</h3>
              <p className="text-muted-foreground">
                Our AI continuously optimizes your portfolio for the best risk-adjusted returns.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Target className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Goal-Based Investing</h3>
              <p className="text-muted-foreground">
                Set your investment goals and let our platform work towards achieving them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}