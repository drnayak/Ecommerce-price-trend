import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, TrendingDown, TrendingUp } from 'lucide-react';
import { LineChart, Line } from 'recharts';

interface Favorite {
  name: string;
  value: string;
  change: number;
  chartData: number[];
}

export default function FavoritesPanel() {
  const [timeRange, setTimeRange] = useState('3months');

  const favorites: Favorite[] = [
    { name: 'Beetroot Extract', value: '2.19€', change: -7.42, chartData: [2.35, 2.30, 2.25, 2.22, 2.20, 2.19] },
    { name: 'Anonas Extract 25%', value: '5.78€', change: -7.42, chartData: [6.20, 6.10, 6.00, 5.90, 5.85, 5.78] },
    { name: 'Acitrola Extract 25%', value: '9.76€', change: -7.42, chartData: [10.50, 10.30, 10.10, 9.95, 9.85, 9.76] },
    { name: 'Ashwagandha Extract 5:1', value: '16.32€', change: -7.42, chartData: [17.50, 17.20, 16.90, 16.60, 16.45, 16.32] }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Favorites</CardTitle>
          <select 
            className="text-sm border border-border rounded px-2 py-1 bg-background"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            data-testid="select-favorites-timerange"
          >
            <option value="3months">3 Months</option>
            <option value="6months">6 Months</option>
            <option value="1year">1 Year</option>
          </select>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Top marked in favorites</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {favorites.map((fav, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 border border-border rounded-lg hover-elevate"
            data-testid={`favorite-${index}`}
          >
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <div>
                <div className="font-semibold text-sm">{fav.name}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  {fav.change < 0 ? (
                    <TrendingDown className="w-3 h-3 text-green-600" />
                  ) : (
                    <TrendingUp className="w-3 h-3 text-red-500" />
                  )}
                  <span className={fav.change < 0 ? 'text-green-600' : 'text-red-500'}>
                    {Math.abs(fav.change)}%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="font-bold">{fav.value}</div>
              </div>
              <LineChart width={60} height={30} data={fav.chartData.map(v => ({ value: v }))}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={fav.change < 0 ? '#16a34a' : '#ef4444'} 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full" data-testid="button-show-more-favorites">
          Show more
        </Button>
      </CardContent>
    </Card>
  );
}
