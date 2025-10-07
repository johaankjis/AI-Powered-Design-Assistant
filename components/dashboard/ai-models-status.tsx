import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity } from "lucide-react"
import { aiModels } from "@/lib/mock-data"

export function AIModelsStatus() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle>AI Models</CardTitle>
        <CardDescription>Active model status and usage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {aiModels.map((model) => (
            <div key={model.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-chart-2" />
                  <span className="font-semibold text-sm">{model.name}</span>
                </div>
                <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
                  {model.status}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{model.purpose}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Requests</span>
                <span className="font-medium">{model.requests.toLocaleString()}</span>
              </div>
              {model !== aiModels[aiModels.length - 1] && <div className="h-px bg-border mt-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
