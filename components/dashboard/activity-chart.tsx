"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { day: "Mon", suggestions: 45 },
  { day: "Tue", suggestions: 52 },
  { day: "Wed", suggestions: 38 },
  { day: "Thu", suggestions: 61 },
  { day: "Fri", suggestions: 48 },
  { day: "Sat", suggestions: 23 },
  { day: "Sun", suggestions: 19 },
]

export function ActivityChart() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Suggestions generated this week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            suggestions: {
              label: "Suggestions",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[200px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis
                dataKey="day"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="suggestions" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
