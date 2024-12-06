"use client";

import { Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "rebalance",
    description: "Portfolio rebalanced for optimal yield",
    timestamp: "2 hours ago",
    impact: "+0.2% APY",
    positive: true,
  },
  {
    id: 2,
    type: "risk",
    description: "Reduced exposure to volatile assets",
    timestamp: "5 hours ago",
    impact: "-5% Risk",
    positive: true,
  },
  {
    id: 3,
    type: "yield",
    description: "Identified new yield opportunity",
    timestamp: "1 day ago",
    impact: "+0.5% APY",
    positive: true,
  },
];

export function AIActivityFeed() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center justify-between rounded-lg border p-4"
        >
          <div className="flex items-center gap-4">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {activity.positive ? (
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            )}
            <span
              className={`text-sm font-medium ${
                activity.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {activity.impact}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}