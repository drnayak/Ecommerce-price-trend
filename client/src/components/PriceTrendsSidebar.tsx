import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface PriceTrend {
  name: string;
  change: number;
}

export default function PriceTrendsSidebar() {
  const trends: PriceTrend[] = [
    { name: 'Minerals', change: -0.54 },
    { name: 'Vitamins', change: 3.28 },
    { name: 'Extracts', change: -0.42 },
    { name: 'Amino Acids', change: 4.88 },
    { name: 'Probiotics', change: -11.54 },
    { name: 'Minerals', change: -1.14 },
    { name: 'Enzymes', change: 5.28 },
    { name: 'Plant Extracts', change: -21.14 }
  ];

  return (
    <Card className="w-64">
      <CardHeader>
        <CardTitle className="text-sm">Price Trends</CardTitle>
        <p className="text-xs text-muted-foreground">All categories last 30 days</p>
      </CardHeader>
      <CardContent className="space-y-2">
        {trends.map((trend, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between py-1"
            data-testid={`trend-${index}`}
          >
            <span className="text-sm">{trend.name}</span>
            <div className={`flex items-center gap-1 text-sm font-medium ${trend.change < 0 ? 'text-green-600' : 'text-red-500'}`}>
              {trend.change < 0 ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
              {Math.abs(trend.change)}%
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
