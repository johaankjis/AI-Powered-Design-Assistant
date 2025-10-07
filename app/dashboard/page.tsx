import { Header } from "@/components/header"
import { MetricsOverview } from "@/components/dashboard/metrics-overview"
import { RecentSuggestions } from "@/components/dashboard/recent-suggestions"
import { AIModelsStatus } from "@/components/dashboard/ai-models-status"
import { ActivityChart } from "@/components/dashboard/activity-chart"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your AI design assistant performance and insights</p>
        </div>

        <div className="space-y-6">
          <MetricsOverview />

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentSuggestions />
            </div>
            <div className="space-y-6">
              <AIModelsStatus />
              <ActivityChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
