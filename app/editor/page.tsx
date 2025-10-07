"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sparkles,
  Layout,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Maximize2,
  Minimize2,
  Grid3x3,
  Layers,
} from "lucide-react"

export default function EditorPage() {
  const [spacing, setSpacing] = useState([24])
  const [borderRadius, setBorderRadius] = useState([8])
  const [columns, setColumns] = useState([3])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Layout Editor</h1>
          <p className="text-muted-foreground">Design and preview layouts with AI-powered suggestions</p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-6">
          {/* Controls Panel */}
          <aside className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Layout Controls</h3>
                    <Button size="sm" variant="ghost" className="h-8 px-2">
                      <Sparkles className="h-4 w-4 mr-1" />
                      AI Assist
                    </Button>
                  </div>

                  <Tabs defaultValue="spacing" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-muted">
                      <TabsTrigger value="spacing">Spacing</TabsTrigger>
                      <TabsTrigger value="layout">Layout</TabsTrigger>
                    </TabsList>

                    <TabsContent value="spacing" className="space-y-6 mt-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Gap</Label>
                          <span className="text-sm text-muted-foreground">{spacing[0]}px</span>
                        </div>
                        <Slider
                          value={spacing}
                          onValueChange={setSpacing}
                          min={0}
                          max={64}
                          step={4}
                          className="w-full"
                        />
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs bg-chart-1/10 text-chart-1 border-chart-1/20">
                            AI: 24px recommended
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Border Radius</Label>
                          <span className="text-sm text-muted-foreground">{borderRadius[0]}px</span>
                        </div>
                        <Slider
                          value={borderRadius}
                          onValueChange={setBorderRadius}
                          min={0}
                          max={24}
                          step={2}
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-sm">Padding</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            Small
                          </Button>
                          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                            Medium
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            Large
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            XLarge
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="layout" className="space-y-6 mt-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-sm">Columns</Label>
                          <span className="text-sm text-muted-foreground">{columns[0]}</span>
                        </div>
                        <Slider
                          value={columns}
                          onValueChange={setColumns}
                          min={1}
                          max={6}
                          step={1}
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-sm">Alignment</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <AlignLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                            <AlignCenter className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <AlignRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-sm">Container</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Minimize2 className="h-4 w-4 mr-1" />
                            Boxed
                          </Button>
                          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                            <Maximize2 className="h-4 w-4 mr-1" />
                            Full
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-chart-1" />
                  <h3 className="font-semibold text-sm">AI Suggestions</h3>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-chart-1/5 border border-chart-1/20">
                    <p className="text-xs font-medium mb-1">Spacing Optimization</p>
                    <p className="text-xs text-muted-foreground mb-2">
                      Increase gap to 24px for better visual hierarchy
                    </p>
                    <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                      Apply
                    </Button>
                  </div>

                  <div className="p-3 rounded-lg bg-chart-2/5 border border-chart-2/20">
                    <p className="text-xs font-medium mb-1">Grid Layout</p>
                    <p className="text-xs text-muted-foreground mb-2">Switch to 4 columns on desktop for balance</p>
                    <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                      Apply
                    </Button>
                  </div>

                  <div className="p-3 rounded-lg bg-chart-3/5 border border-chart-3/20">
                    <p className="text-xs font-medium mb-1">Responsive Design</p>
                    <p className="text-xs text-muted-foreground mb-2">Add tablet breakpoint at 768px</p>
                    <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                      Apply
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Preview Canvas */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Layout className="h-5 w-5" />
                    <h3 className="font-semibold">Preview Canvas</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Grid3x3 className="h-4 w-4 mr-1" />
                      Grid
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Layers className="h-4 w-4 mr-1" />
                      Layers
                    </Button>
                  </div>
                </div>

                {/* Preview Area */}
                <div className="min-h-[600px] rounded-lg border-2 border-dashed border-border bg-muted/20 p-8">
                  <div
                    className="grid gap-6"
                    style={{
                      gridTemplateColumns: `repeat(${columns[0]}, 1fr)`,
                      gap: `${spacing[0]}px`,
                    }}
                  >
                    {Array.from({ length: columns[0] * 2 }).map((_, i) => (
                      <Card
                        key={i}
                        className="border-border bg-card hover:border-primary/50 transition-colors cursor-pointer"
                        style={{ borderRadius: `${borderRadius[0]}px` }}
                      >
                        <CardContent className="p-6">
                          <div className="h-32 rounded bg-muted/50 mb-4 flex items-center justify-center">
                            <Layout className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-4 bg-muted rounded w-3/4" />
                            <div className="h-3 bg-muted/70 rounded w-full" />
                            <div className="h-3 bg-muted/70 rounded w-5/6" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                      92% consistency
                    </Badge>
                    <span>•</span>
                    <span>{columns[0] * 2} components</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="bg-transparent">
                      Export Code
                    </Button>
                    <Button>Save Layout</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
