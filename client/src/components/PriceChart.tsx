import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from '@/components/ui/card';

interface PriceChartProps {
  data: Array<{
    date: string;
    greenjeeva?: number;
    competitor1?: number;
    competitor2?: number;
    marketAvg?: number;
  }>;
  height?: number;
  showLegend?: boolean;
  title?: string;
}

export default function PriceChart({ data, height = 320, showLegend = true, title }: PriceChartProps) {
  return (
    <div className="w-full">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
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
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          {showLegend && <Legend />}
          <Line 
            type="monotone" 
            dataKey="greenjeeva" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2.5}
            dot={false}
            name="Greenjeeva"
          />
          <Line 
            type="monotone" 
            dataKey="competitor1" 
            stroke="hsl(var(--muted-foreground))" 
            strokeWidth={1.5}
            strokeDasharray="5 5"
            dot={false}
            name="Competitor A"
          />
          <Line 
            type="monotone" 
            dataKey="competitor2" 
            stroke="hsl(var(--muted-foreground))" 
            strokeWidth={1.5}
            strokeDasharray="3 3"
            dot={false}
            name="Competitor B"
          />
          <Line 
            type="monotone" 
            dataKey="marketAvg" 
            stroke="hsl(var(--chart-2))" 
            strokeWidth={2}
            dot={false}
            name="Market Average"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
