import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, Clock, Layout, Type, Eye } from "lucide-react"
import { recentSuggestions } from "@/lib/mock-data"

export function RecentSuggestions() {
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
        return <Layout className="h-4 w-4" />
      case "Content":
        return <Type className="h-4 w-4" />
      case "Visual":
        return <Eye className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle>Recent AI Suggestions</CardTitle>
        <CardDescription>Latest recommendations from your design assistant</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentSuggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                {getTypeIcon(suggestion.type)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-sm">{suggestion.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {suggestion.type}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{suggestion.description}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{suggestion.timestamp}</span>
                  <span>•</span>
                  <span className="text-chart-1 font-medium">{suggestion.confidence}% confidence</span>
                </div>
              </div>

              <Badge variant="outline" className={`flex items-center gap-1 ${getStatusColor(suggestion.status)}`}>
                {getStatusIcon(suggestion.status)}
                {suggestion.status}
              </Badge>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full mt-4 bg-transparent">
          View All Suggestions
        </Button>
      </CardContent>
    </Card>
  )
}
