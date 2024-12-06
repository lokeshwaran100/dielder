"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Target, ArrowRight, Wallet, Calculator } from "lucide-react";

export function OnboardingFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    timeframe: "",
    initialDeposit: "",
  });

  const calculateProjection = () => {
    const monthlyRate = 5.2 / 12 / 100; // 5.2% APY
    const months = parseInt(formData.timeframe) * 12;
    const futureValue =
      parseFloat(formData.initialDeposit) * Math.pow(1 + monthlyRate, months);
    return futureValue.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-muted/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="p-8">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= i
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i}
                </div>
                {i < 4 && (
                  <div
                    className={`w-24 h-1 ${
                      step > i ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Welcome */}
          {step === 1 && (
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-bold">Welcome to Dielder</h2>
              <p className="text-muted-foreground">
                Let's secure your financial future together
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setStep(2)}
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>
          )}

          {/* Step 2: Goal Setting */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Set Your Goal</h2>
                <p className="text-muted-foreground">
                  How much would you like to save?
                </p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Target Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground">
                      $
                    </span>
                    <Input
                      type="number"
                      className="pl-8"
                      placeholder="500,000"
                      value={formData.goal}
                      onChange={(e) =>
                        setFormData({ ...formData, goal: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Time Frame (Years)</Label>
                  <Input
                    type="number"
                    placeholder="10"
                    value={formData.timeframe}
                    onChange={(e) =>
                      setFormData({ ...formData, timeframe: e.target.value })
                    }
                  />
                </div>
                <Button className="w-full" onClick={() => setStep(3)}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Initial Deposit */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Initial Deposit</h2>
                <p className="text-muted-foreground">
                  How much would you like to start with?
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-3 top-3 text-muted-foreground">
                    $
                  </span>
                  <Input
                    type="number"
                    className="pl-8"
                    placeholder="10,000"
                    value={formData.initialDeposit}
                    onChange={(e) =>
                      setFormData({ ...formData, initialDeposit: e.target.value })
                    }
                  />
                </div>
                <Button className="w-full" onClick={() => setStep(4)}>
                  Preview Strategy
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Strategy Preview */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Your Investment Strategy</h2>
                <p className="text-muted-foreground">
                  Here's how we'll help you reach your goal
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Initial Deposit</span>
                    <span className="font-medium">${formData.initialDeposit}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Target Goal</span>
                    <span className="font-medium">${formData.goal}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Timeframe</span>
                    <span className="font-medium">{formData.timeframe} years</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Projected Value</span>
                    <span className="font-medium">${calculateProjection()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current APY</span>
                    <span className="font-medium text-green-500">5.2%</span>
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">AI Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI will optimize your portfolio across verified protocols:
                  </p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• 45% Ethereum Staking (4.8% APY)</li>
                    <li>• 30% Polygon Staking (5.2% APY)</li>
                    <li>• 25% USDC Lending (5.8% APY)</li>
                  </ul>
                </div>
                <Button
                  className="w-full"
                  onClick={() => (window.location.href = "/dashboard")}
                >
                  Start Investing
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}