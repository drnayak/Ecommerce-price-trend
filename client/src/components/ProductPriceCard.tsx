import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface ProductPriceCardProps {
  id: string;
  name: string;
  sku: string;
  description: string;
  image: string;
  currentPrice: number;
  weeklyChange: number;
  pricePosition: number;
  chartData: Array<{ value: number }>;
  onViewDetails?: (id: string) => void;
}

export default function ProductPriceCard({
  id,
  name,
  sku,
  description,
  image,
  currentPrice,
  weeklyChange,
  pricePosition,
  chartData,
  onViewDetails
}: ProductPriceCardProps) {
  return (
    <Card className="hover-elevate overflow-hidden" data-testid={`card-product-${id}`}>
      <CardHeader className="pb-4">
        <div className="flex gap-4">
          <img 
            src={image} 
            alt={name}
            className="w-24 h-24 rounded-lg object-cover"
            data-testid={`img-product-${id}`}
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate" data-testid={`text-product-name-${id}`}>{name}</h3>
            <p className="text-sm text-muted-foreground">{sku}</p>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold" data-testid={`text-price-${id}`}>${currentPrice}</div>
            <div className={cn(
              'flex items-center gap-1 text-sm font-medium mt-1',
              weeklyChange < 0 ? 'text-green-600' : 'text-red-500'
            )}>
              {weeklyChange < 0 ? <TrendingDown className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
              <span data-testid={`text-change-${id}`}>{Math.abs(weeklyChange)}% this week</span>
            </div>
          </div>
          <ResponsiveContainer width={100} height={40}>
            <LineChart data={chartData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <Badge 
          variant="secondary" 
          className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300"
          data-testid={`badge-position-${id}`}
        >
          {Math.abs(pricePosition)}% below market avg
        </Badge>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => onViewDetails?.(id)}
          data-testid={`button-view-trend-${id}`}
        >
          View Price Trend
        </Button>
      </CardContent>
    </Card>
  );
}
