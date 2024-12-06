"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp } from "lucide-react";

export function SidePanel() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center space-y-0">
          <Shield className="mr-2 h-4 w-4" />
          <CardTitle className="text-base">Risk Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Portfolio Risk Score</span>
                <span className="font-medium text-green-500">Low</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-1/3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Insurance Coverage</span>
                <span className="text-green-500">Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Smart Contract Risk</span>
                <span className="text-yellow-500">Medium</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center space-y-0">
          <TrendingUp className="mr-2 h-4 w-4" />
          <CardTitle className="text-base">Yield Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm">Average APY</span>
              <span className="font-medium text-green-500">5.2%</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Ethereum Staking</span>
                <span>4.8%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Polygon Staking</span>
                <span>5.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>USDC Lending</span>
                <span>5.8%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}