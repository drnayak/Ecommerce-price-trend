import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductListCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  currentPrice: number;
  weeklyChange: number;
  onViewTrend?: (id: string) => void;
}

export default function ProductListCard({
  id,
  name,
  category,
  image,
  currentPrice,
  weeklyChange,
  onViewTrend
}: ProductListCardProps) {
  return (
    <Card className="hover-elevate overflow-hidden" data-testid={`card-product-${id}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
          data-testid={`img-product-${id}`}
        />
        <Badge 
          className={cn(
            'absolute top-2 right-2',
            weeklyChange < 0 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-red-500 hover:bg-red-600 text-white'
          )}
          data-testid={`badge-change-${id}`}
        >
          {weeklyChange > 0 ? '+' : ''}{weeklyChange.toFixed(1)}%
        </Badge>
      </div>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{category}</p>
        <h3 className="font-semibold text-base mb-2 line-clamp-2" data-testid={`text-name-${id}`}>{name}</h3>
        <div className="flex items-center justify-between mb-3">
          <div className="text-xl font-bold" data-testid={`text-price-${id}`}>${currentPrice}</div>
          <div className="text-sm text-muted-foreground">Updated 2h ago</div>
        </div>
        <Button 
          variant="outline" 
          className="w-full group"
          onClick={() => onViewTrend?.(id)}
          data-testid={`button-view-trend-${id}`}
        >
          View Price Trend
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
