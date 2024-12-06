"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { PortfolioOverview } from "@/components/dashboard/portfolio-overview";
import { MainContent } from "@/components/dashboard/main-content";
import { SidePanel } from "@/components/dashboard/side-panel";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader />
      <div className="container grid gap-6 pb-8 pt-6 md:py-8">
        <PortfolioOverview />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="col-span-2">
            <MainContent />
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}