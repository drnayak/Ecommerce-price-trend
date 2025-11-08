import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Users, RefreshCw, Clock } from 'lucide-react';

interface MarketInsightsProps {
  totalProducts: number;
  competitorsTracked: number;
  weeklyUpdates: number;
  nextUpdate: string;
}

export default function MarketInsights({
  totalProducts,
  competitorsTracked,
  weeklyUpdates,
  nextUpdate
}: MarketInsightsProps) {
  const stats = [
    {
      icon: <Package className="w-5 h-5 text-primary" />,
      label: 'Products Monitored',
      value: totalProducts,
      testId: 'stat-products'
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      label: 'Competitors Tracked',
      value: competitorsTracked,
      testId: 'stat-competitors'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-primary" />,
      label: 'Weekly Updates',
      value: weeklyUpdates,
      testId: 'stat-updates'
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      label: 'Next Update',
      value: nextUpdate,
      testId: 'stat-next-update'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="hover-elevate">
          <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
            {stat.icon}
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold mb-1" data-testid={stat.testId}>
              {stat.value}
            </div>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
