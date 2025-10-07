"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, XCircle, Clock, Layout, Type, Eye, TrendingUp, AlertCircle } from "lucide-react"
import { allSuggestions } from "@/lib/mock-data"

export default function SuggestionsPage() {
  const [filter, setFilter] = useState<string>("all")

  const filteredSuggestions = filter === "all" ? allSuggestions : allSuggestions.filter((s) => s.status === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "applied":
        return "bg-chart-2/10 text-chart-2 border-chart-2/20"
      case "pending":
        return "bg-chart-3/10 text-chart-3 border-chart-3/20"
      case "dismissed":
        return "bg-muted text-muted-foreground border-border"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "applied":
        return <CheckCircle2 className="h-3.5 w-3.5" />
      case "pending":
        return <Clock className="h-3.5 w-3.5" />
      case "dismissed":
        return <XCircle className="h-3.5 w-3.5" />
      default:
        return null
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Layout":
        return <Layout className="h-5 w-5" />
      case "Content":
        return <Type className="h-5 w-5" />
      case "Visual":
        return <Eye className="h-5 w-5" />
      default:
        return null
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-chart-5 bg-chart-5/10"
      case "medium":
        return "text-chart-3 bg-chart-3/10"
      case "low":
        return "text-muted-foreground bg-muted"
      default:
        return "text-muted-foreground bg-muted"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">AI Suggestions</h1>
          <p className="text-muted-foreground">Review and manage design recommendations from your AI assistant</p>
        </div>

        <Tabs defaultValue="all" className="space-y-6" onValueChange={setFilter}>
          <TabsList className="bg-muted">
            <TabsTrigger value="all">All Suggestions</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
            <TabsTrigger value="dismissed">Dismissed</TabsTrigger>
          </TabsList>

          <TabsContent value={filter} className="space-y-4">
            {filteredSuggestions.map((suggestion) => (
              <Card key={suggestion.id} className="border-border bg-card hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {getTypeIcon(suggestion.type)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <CardTitle className="text-lg">{suggestion.title}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {suggestion.type}
                          </Badge>
                          <Badge variant="outline" className={`text-xs ${getImpactColor(suggestion.impact)}`}>
                            {suggestion.impact} impact
                          </Badge>
                        </div>
                        <CardDescription className="text-sm">{suggestion.description}</CardDescription>
                      </div>
                    </div>

                    <Badge variant="outline" className={`flex items-center gap-1 ${getStatusColor(suggestion.status)}`}>
                      {getStatusIcon(suggestion.status)}
                      {suggestion.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-chart-1 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">AI Rationale</p>
                        <p className="text-sm text-muted-foreground">{suggestion.rationale}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Before</p>
                      <code className="text-sm font-mono">{suggestion.before}</code>
                    </div>
                    <div className="p-4 rounded-lg bg-chart-2/5 border border-chart-2/20">
                      <p className="text-xs font-medium text-muted-foreground mb-2">After</p>
                      <code className="text-sm font-mono">{suggestion.after}</code>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3.5 w-3.5 text-chart-1" />
                        <span className="text-chart-1 font-medium">{suggestion.confidence}% confidence</span>
                      </div>
                      <span>•</span>
                      <span>{suggestion.timestamp}</span>
                      <span>•</span>
                      <span>{suggestion.affectedComponents.length} components</span>
                    </div>

                    {suggestion.status === "pending" && (
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          Dismiss
                        </Button>
                        <Button size="sm">Apply Suggestion</Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
