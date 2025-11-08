import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeatmapItem {
  name: string;
  value: number;
  change: number;
}

export default function PriceHeatmap() {
  const [period, setPeriod] = useState('4w');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const periods = [
    { value: '1w', label: '1 Week' },
    { value: '4w', label: '4 Weeks' },
    { value: '12w', label: '12 Weeks' },
    { value: '1y', label: '1 Year' }
  ];

  const heatmapData: HeatmapItem[] = [
    { name: 'Turmeric Extract', value: 8, change: -15.2 },
    { name: 'Ashwagandha', value: 12, change: -12.8 },
    { name: 'Spirulina', value: 6, change: -8.5 },
    { name: 'Moringa', value: 5, change: -6.2 },
    { name: 'Curcumin', value: 10, change: 12.3 },
    { name: 'Pea Protein', value: 7, change: 8.7 },
    { name: 'Whey Protein', value: 9, change: 15.4 },
    { name: 'Collagen', value: 6, change: 5.2 },
    { name: 'Vitamin D3', value: 4, change: -3.1 },
    { name: 'Vitamin C', value: 5, change: -1.8 },
    { name: 'Zinc', value: 3, change: 2.4 },
    { name: 'Magnesium', value: 4, change: 4.1 },
  ];

  const getColor = (change: number) => {
    if (change < -10) return 'bg-green-700 dark:bg-green-800';
    if (change < -5) return 'bg-green-600 dark:bg-green-700';
    if (change < 0) return 'bg-green-500 dark:bg-green-600';
    if (change < 5) return 'bg-red-400 dark:bg-red-500';
    if (change < 10) return 'bg-red-500 dark:bg-red-600';
    return 'bg-red-600 dark:bg-red-700';
  };

  const getGridSize = (value: number) => {
    if (value >= 10) return 'col-span-2 row-span-2';
    if (value >= 6) return 'col-span-2';
    return 'col-span-1';
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Price Trends Heatmap</CardTitle>
          <div className="flex gap-1">
            {periods.map((p) => (
              <Button
                key={p.value}
                variant={period === p.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setPeriod(p.value)}
                data-testid={`button-period-${p.value}`}
              >
                {p.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-700 rounded"></div>
            <span>Price Decreased</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-600 rounded"></div>
            <span>Price Increased</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2 h-[300px]">
          {heatmapData.map((item) => (
            <div
              key={item.name}
              className={cn(
                getGridSize(item.value),
                getColor(item.change),
                'rounded-lg p-3 flex flex-col justify-between text-white cursor-pointer transition-all',
                'hover:scale-105 hover:ring-2 hover:ring-primary hover:z-10',
                hoveredItem === item.name && 'ring-2 ring-primary scale-105 z-10'
              )}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              data-testid={`heatmap-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="font-semibold text-sm">{item.name}</div>
              <div className="text-xl font-bold">
                {item.change > 0 ? '+' : ''}{item.change}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
