"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Copy, RefreshCw, Type, ImageIcon, Wand2, Check } from "lucide-react"

export default function GeneratorPage() {
  const [context, setContext] = useState("")
  const [copyType, setCopyType] = useState("headline")
  const [tone, setTone] = useState("professional")
  const [generating, setGenerating] = useState(false)
  const [copied, setCopied] = useState<number | null>(null)

  const generatedCopy = [
    {
      id: 1,
      content: "Transform Your Design Workflow with AI",
      variations: ["Revolutionize Design with AI Power", "AI-Powered Design Made Simple"],
    },
    {
      id: 2,
      content: "Automate repetitive tasks and focus on creativity",
      variations: ["Free up time for what matters most", "Let AI handle the details while you create"],
    },
    {
      id: 3,
      content: "Start Your Free Trial Today",
      variations: ["Get Started Free", "Try It Free Now", "Begin Your Journey"],
    },
  ]

  const iconSuggestions = [
    { id: 1, name: "Sparkles", category: "AI/Magic", style: "outlined" },
    { id: 2, name: "Zap", category: "Speed/Power", style: "filled" },
    { id: 3, name: "Layout", category: "Design/Structure", style: "outlined" },
    { id: 4, name: "Palette", category: "Color/Design", style: "filled" },
    { id: 5, name: "Eye", category: "Vision/Preview", style: "outlined" },
    { id: 6, name: "Layers", category: "Organization", style: "filled" },
  ]

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => setGenerating(false), 1500)
  }

  const handleCopy = (id: number, content: string) => {
    navigator.clipboard.writeText(content)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Content Generator</h1>
          <p className="text-muted-foreground">Generate UI copy and discover icons with AI assistance</p>
        </div>

        <Tabs defaultValue="copy" className="space-y-6">
          <TabsList className="bg-muted">
            <TabsTrigger value="copy">
              <Type className="h-4 w-4 mr-2" />
              Copy Generator
            </TabsTrigger>
            <TabsTrigger value="icons">
              <ImageIcon className="h-4 w-4 mr-2" />
              Icon Finder
            </TabsTrigger>
          </TabsList>

          {/* Copy Generator Tab */}
          <TabsContent value="copy" className="space-y-6">
            <div className="grid lg:grid-cols-[400px_1fr] gap-6">
              {/* Input Panel */}
              <Card className="border-border bg-card h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wand2 className="h-5 w-5" />
                    Generate Copy
                  </CardTitle>
                  <CardDescription>Provide context and let GPT-4 create compelling UI text</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Content Type</Label>
                    <Select value={copyType} onValueChange={setCopyType}>
                      <SelectTrigger className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="headline">Headline</SelectItem>
                        <SelectItem value="subheadline">Subheadline</SelectItem>
                        <SelectItem value="cta">CTA Button</SelectItem>
                        <SelectItem value="description">Description</SelectItem>
                        <SelectItem value="microcopy">Microcopy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Tone</Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="playful">Playful</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Context</Label>
                    <Textarea
                      placeholder="Describe your product, feature, or the purpose of this copy..."
                      value={context}
                      onChange={(e) => setContext(e.target.value)}
                      className="min-h-[120px] bg-background"
                    />
                    <p className="text-xs text-muted-foreground">
                      Example: "SaaS product for team collaboration, targeting remote workers"
                    </p>
                  </div>

                  <Button className="w-full" onClick={handleGenerate} disabled={generating}>
                    {generating ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4 mr-2" />
                        Generate Copy
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Results Panel */}
              <div className="space-y-4">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle>Generated Results</CardTitle>
                    <CardDescription>AI-powered copy suggestions with variations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {generatedCopy.map((item) => (
                      <div key={item.id} className="p-4 rounded-lg border border-border bg-card space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="font-semibold mb-2">{item.content}</p>
                            <Badge variant="outline" className="text-xs bg-chart-1/10 text-chart-1 border-chart-1/20">
                              Primary suggestion
                            </Badge>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCopy(item.id, item.content)}
                            className="bg-transparent"
                          >
                            {copied === item.id ? (
                              <>
                                <Check className="h-4 w-4 mr-1" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 mr-1" />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-border">
                          <p className="text-xs font-medium text-muted-foreground">Variations</p>
                          {item.variations.map((variation, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-2 rounded bg-muted/50 hover:bg-muted transition-colors"
                            >
                              <p className="text-sm">{variation}</p>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCopy(item.id * 10 + idx, variation)}
                                className="h-7 px-2"
                              >
                                {copied === item.id * 10 + idx ? (
                                  <Check className="h-3.5 w-3.5" />
                                ) : (
                                  <Copy className="h-3.5 w-3.5" />
                                )}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-chart-1 mt-0.5" />
                      <div>
                        <p className="font-medium mb-1">AI Tip</p>
                        <p className="text-sm text-muted-foreground">
                          More specific context leads to better results. Include your target audience, product benefits,
                          and desired action.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Icon Finder Tab */}
          <TabsContent value="icons" className="space-y-6">
            <div className="grid lg:grid-cols-[400px_1fr] gap-6">
              {/* Search Panel */}
              <Card className="border-border bg-card h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5" />
                    Find Icons
                  </CardTitle>
                  <CardDescription>CoreML-powered icon recognition and suggestions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Describe what you need</Label>
                    <Textarea
                      placeholder="E.g., 'icons for a payment feature' or 'speed and performance'"
                      className="min-h-[100px] bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Style Preference</Label>
                    <Select defaultValue="outlined">
                      <SelectTrigger className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="outlined">Outlined</SelectItem>
                        <SelectItem value="filled">Filled</SelectItem>
                        <SelectItem value="mixed">Mixed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Find Icons
                  </Button>
                </CardContent>
              </Card>

              {/* Results Panel */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Icon Suggestions</CardTitle>
                  <CardDescription>AI-matched icons based on your design context</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {iconSuggestions.map((icon) => (
                      <div
                        key={icon.id}
                        className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-accent/5 transition-colors cursor-pointer"
                      >
                        <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                          <Sparkles className="h-8 w-8 text-primary" />
                        </div>
                        <p className="font-medium text-sm text-center mb-1">{icon.name}</p>
                        <p className="text-xs text-muted-foreground text-center mb-2">{icon.category}</p>
                        <Badge variant="outline" className="w-full justify-center text-xs">
                          {icon.style}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
