"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Info,
  Type,
  Palette,
  Ruler,
  Eye,
  Sparkles,
  RefreshCw,
} from "lucide-react"
import { consistencyChecks } from "@/lib/mock-data"

export default function ConsistencyPage() {
  const [scanning, setScanning] = useState(false)
  const [filter, setFilter] = useState<string>("all")

  const handleScan = () => {
    setScanning(true)
    setTimeout(() => setScanning(false), 2000)
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertCircle className="h-4 w-4" />
      case "medium":
        return <AlertTriangle className="h-4 w-4" />
      case "low":
        return <Info className="h-4 w-4" />
      default:
        return null
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20"
      case "medium":
        return "bg-chart-3/10 text-chart-3 border-chart-3/20"
      case "low":
        return "bg-chart-1/10 text-chart-1 border-chart-1/20"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Typography":
        return <Type className="h-5 w-5" />
      case "Color":
        return <Palette className="h-5 w-5" />
      case "Spacing":
        return <Ruler className="h-5 w-5" />
      default:
        return <Eye className="h-5 w-5" />
    }
  }

  const filteredChecks =
    filter === "all" ? consistencyChecks : consistencyChecks.filter((check) => check.severity === filter)

  const highIssues = consistencyChecks.filter((c) => c.severity === "high").length
  const mediumIssues = consistencyChecks.filter((c) => c.severity === "medium").length
  const lowIssues = consistencyChecks.filter((c) => c.severity === "low").length
  const totalIssues = consistencyChecks.length
  const consistencyScore = Math.round(((100 - totalIssues * 2) / 100) * 100)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Visual Consistency Checker</h1>
          <p className="text-muted-foreground">Ensure design system compliance with AI-powered analysis</p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Consistency Score</p>
                <CheckCircle2 className="h-5 w-5 text-chart-2" />
              </div>
              <p className="text-3xl font-bold mb-2">{consistencyScore}%</p>
              <Progress value={consistencyScore} className="h-2" />
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">High Priority</p>
                <AlertCircle className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-3xl font-bold">{highIssues}</p>
              <p className="text-xs text-muted-foreground mt-1">Critical issues</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Medium Priority</p>
                <AlertTriangle className="h-5 w-5 text-chart-3" />
              </div>
              <p className="text-3xl font-bold">{mediumIssues}</p>
              <p className="text-xs text-muted-foreground mt-1">Moderate issues</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Low Priority</p>
                <Info className="h-5 w-5 text-chart-1" />
              </div>
              <p className="text-3xl font-bold">{lowIssues}</p>
              <p className="text-xs text-muted-foreground mt-1">Minor issues</p>
            </CardContent>
          </Card>
        </div>

        {/* Scan Button */}
        <Card className="border-border bg-card mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Run Consistency Scan</h3>
                <p className="text-sm text-muted-foreground">
                  Analyze your design for typography, color, spacing, and visual inconsistencies
                </p>
              </div>
              <Button onClick={handleScan} disabled={scanning}>
                {scanning ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Scan Design
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Issues List */}
        <Tabs defaultValue="all" className="space-y-6" onValueChange={setFilter}>
          <TabsList className="bg-muted">
            <TabsTrigger value="all">All Issues ({totalIssues})</TabsTrigger>
            <TabsTrigger value="high">High ({highIssues})</TabsTrigger>
            <TabsTrigger value="medium">Medium ({mediumIssues})</TabsTrigger>
            <TabsTrigger value="low">Low ({lowIssues})</TabsTrigger>
          </TabsList>

          <TabsContent value={filter} className="space-y-4">
            {filteredChecks.map((check) => (
              <Card key={check.id} className="border-border bg-card hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {getCategoryIcon(check.category)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <CardTitle className="text-lg">{check.issue}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {check.category}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm">{check.details}</CardDescription>
                      </div>
                    </div>

                    <Badge variant="outline" className={`flex items-center gap-1 ${getSeverityColor(check.severity)}`}>
                      {getSeverityIcon(check.severity)}
                      {check.severity}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm font-medium mb-3">Affected Locations</p>
                    <div className="space-y-2">
                      {check.locations.map((location, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2 rounded bg-background border border-border"
                        >
                          <span className="text-sm font-mono">{location}</span>
                          <Button variant="ghost" size="sm" className="h-7 text-xs">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-chart-1" />
                      <span className="text-sm text-muted-foreground">AI can auto-fix this issue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Ignore
                      </Button>
                      <Button size="sm">Fix Issue</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Design System Reference */}
        <Card className="border-border bg-card mt-6">
          <CardHeader>
            <CardTitle>Design System Reference</CardTitle>
            <CardDescription>Current design tokens and guidelines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Type className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-sm">Typography</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Heading</span>
                    <code className="font-mono text-xs">32px / 2rem</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Body</span>
                    <code className="font-mono text-xs">16px / 1rem</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Small</span>
                    <code className="font-mono text-xs">14px / 0.875rem</code>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-sm">Colors</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Primary</span>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-primary border border-border" />
                      <code className="font-mono text-xs">#4F46E5</code>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Secondary</span>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-secondary border border-border" />
                      <code className="font-mono text-xs">#6B7280</code>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Accent</span>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded bg-accent border border-border" />
                      <code className="font-mono text-xs">#10B981</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Ruler className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-sm">Spacing</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Small</span>
                    <code className="font-mono text-xs">8px / 0.5rem</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Medium</span>
                    <code className="font-mono text-xs">16px / 1rem</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Large</span>
                    <code className="font-mono text-xs">24px / 1.5rem</code>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
