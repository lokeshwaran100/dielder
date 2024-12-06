"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PortfolioChart } from "@/components/dashboard/portfolio-chart";
import { AssetAllocation } from "@/components/dashboard/asset-allocation";
import { AIActivityFeed } from "@/components/dashboard/ai-activity-feed";

export function MainContent() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Portfolio Performance</CardTitle>
            <div className="flex gap-2">
              {["1D", "1W", "1M", "3M", "1Y", "ALL"].map((period) => (
                <Button key={period} variant="outline" size="sm">
                  {period}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <PortfolioChart />
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Protocol Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <AssetAllocation type="protocol" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Asset Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <AssetAllocation type="asset" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Activity Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <AIActivityFeed />
        </CardContent>
      </Card>
    </div>
  );
}