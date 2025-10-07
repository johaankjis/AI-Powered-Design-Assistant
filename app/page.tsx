import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Eye, Layout, Type, Palette, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Powered by GPT-4 & CoreML
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
            AI-Powered Design Assistant
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty leading-relaxed">
            Intelligent Figma-integrated plugin that automates layout suggestions, content generation, and visual
            consistency checks. Reduce manual iteration time by 40%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent">
              View Demo
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>40% faster iterations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>1500+ suggestions generated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-chart-3" />
              <span>94% consistency score</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container px-4 py-16 md:py-24" id="features">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Augment Your Design Workflow</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage generative AI to automate repetitive tasks and focus on creative problem-solving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Layout Suggestions</CardTitle>
                <CardDescription>
                  AI-powered recommendations for spacing, alignment, and component arrangement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Type className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Content Generation</CardTitle>
                <CardDescription>
                  Generate UI copy, headlines, and microcopy using GPT-4 with context awareness
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle>Visual Consistency</CardTitle>
                <CardDescription>CoreML-powered style recognition to ensure design system compliance</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle>Icon Recognition</CardTitle>
                <CardDescription>Automatically detect and suggest icons that match your visual style</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chart-5/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle>Real-time Feedback</CardTitle>
                <CardDescription>Get instant AI feedback as you design, integrated directly into Figma</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Iterations</CardTitle>
                <CardDescription>
                  Learn from your design decisions to provide increasingly relevant suggestions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16 md:py-24">
        <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your design workflow?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join designers who are already saving 40% of their iteration time with AI-powered assistance
            </p>
            <Button size="lg" className="text-base px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-semibold">AI Design Assistant</span>
            </div>
            <p className="text-sm text-muted-foreground">Powered by GPT-4 & CoreML • Built for designers</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
