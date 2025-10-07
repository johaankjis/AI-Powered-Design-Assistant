import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Clock, Sparkles, CheckCircle2 } from "lucide-react"
import { designMetrics } from "@/lib/mock-data"

export function MetricsOverview() {
  const metrics = [
    {
      title: "Iteration Reduction",
      value: `${designMetrics.iterationReduction}%`,
      description: "Faster design iterations",
      icon: TrendingUp,
      trend: "+12% from last month",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      title: "Time Saved",
      value: `${designMetrics.timesSaved}h`,
      description: "Total hours saved",
      icon: Clock,
      trend: "+23h this week",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      title: "AI Suggestions",
      value: designMetrics.suggestionsGenerated.toLocaleString(),
      description: "Total suggestions generated",
      icon: Sparkles,
      trend: "+156 this week",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      title: "Consistency Score",
      value: `${designMetrics.consistencyScore}%`,
      description: "Design system compliance",
      icon: CheckCircle2,
      trend: "+2% improvement",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <div className={`h-10 w-10 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <p className="text-xs text-muted-foreground mb-2">{metric.description}</p>
              <p className="text-xs text-chart-2 font-medium">{metric.trend}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
