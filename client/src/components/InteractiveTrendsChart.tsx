import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface ChartDataPoint {
  date: string;
  greenjeeva?: number;
  marketAvg?: number;
  competitorA?: number;
  competitorB?: number;
}

export default function InteractiveTrendsChart() {
  const [timeRange, setTimeRange] = useState('30d');
  const [category, setCategory] = useState('all');
  const [visibleLines, setVisibleLines] = useState({
    greenjeeva: true,
    marketAvg: true,
    competitorA: true,
    competitorB: true
  });

  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '6m', label: '6 Months' },
    { value: '1y', label: '1 Year' }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'minerals', label: 'Minerals' },
    { value: 'vitamins', label: 'Vitamins' },
    { value: 'extracts', label: 'Extracts' },
    { value: 'proteins', label: 'Proteins' },
    { value: 'amino', label: 'Amino Acids' }
  ];

  const chartData: ChartDataPoint[] = [
    { date: '10/01', greenjeeva: 125, marketAvg: 135, competitorA: 138, competitorB: 132 },
    { date: '10/08', greenjeeva: 123, marketAvg: 133, competitorA: 136, competitorB: 130 },
    { date: '10/15', greenjeeva: 120, marketAvg: 130, competitorA: 133, competitorB: 127 },
    { date: '10/22', greenjeeva: 122, marketAvg: 128, competitorA: 130, competitorB: 126 },
    { date: '10/29', greenjeeva: 119, marketAvg: 126, competitorA: 128, competitorB: 124 },
    { date: '11/05', greenjeeva: 118, marketAvg: 125, competitorA: 127, competitorB: 123 },
  ];

  const stats = [
    { label: 'Greenjeeva', value: 118, change: -5.6, color: 'hsl(var(--primary))' },
    { label: 'Market Avg', value: 125, change: -7.4, color: 'hsl(var(--chart-2))' },
    { label: 'Competitor A', value: 127, change: -8.0, color: '#94A3B8' },
    { label: 'Competitor B', value: 123, change: -6.8, color: '#CBD5E1' }
  ];

  const toggleLine = (line: keyof typeof visibleLines) => {
    setVisibleLines(prev => ({ ...prev, [line]: !prev[line] }));
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle>Price Trends Overview</CardTitle>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex gap-1">
              {timeRanges.map((range) => (
                <Button
                  key={range.value}
                  variant={timeRange === range.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeRange(range.value)}
                  data-testid={`button-timerange-${range.value}`}
                >
                  {range.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          {categories.map((cat) => (
            <Badge
              key={cat.value}
              variant={category === cat.value ? 'default' : 'secondary'}
              className="cursor-pointer hover-elevate"
              onClick={() => setCategory(cat.value)}
              data-testid={`badge-category-${cat.value}`}
            >
              {cat.label}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex gap-2 flex-wrap">
          {Object.entries(visibleLines).map(([key, visible]) => {
            const stat = stats.find(s => s.label.toLowerCase().replace(/\s+/g, '') === key);
            return (
              <Button
                key={key}
                variant={visible ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleLine(key as keyof typeof visibleLines)}
                className="gap-2"
                data-testid={`button-toggle-${key}`}
              >
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: stat?.color }}
                />
                {stat?.label}
              </Button>
            );
          })}
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
                padding: '0.75rem'
              }}
              formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
            />
            <Legend />
            {visibleLines.greenjeeva && (
              <Line 
                type="monotone" 
                dataKey="greenjeeva" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2.5}
                dot={false}
                name="Greenjeeva"
              />
            )}
            {visibleLines.marketAvg && (
              <Line 
                type="monotone" 
                dataKey="marketAvg" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                dot={false}
                name="Market Average"
              />
            )}
            {visibleLines.competitorA && (
              <Line 
                type="monotone" 
                dataKey="competitorA" 
                stroke="#94A3B8" 
                strokeWidth={1.5}
                strokeDasharray="5 5"
                dot={false}
                name="Competitor A"
              />
            )}
            {visibleLines.competitorB && (
              <Line 
                type="monotone" 
                dataKey="competitorB" 
                stroke="#CBD5E1" 
                strokeWidth={1.5}
                strokeDasharray="3 3"
                dot={false}
                name="Competitor B"
              />
            )}
          </LineChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="p-3 rounded-lg bg-muted/30">
              <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-2xl font-bold">${stat.value}</div>
              <div className={`flex items-center gap-1 text-sm font-medium mt-1 ${stat.change < 0 ? 'text-green-600' : 'text-red-500'}`}>
                {stat.change < 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                {Math.abs(stat.change)}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
