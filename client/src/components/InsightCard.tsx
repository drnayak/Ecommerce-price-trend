import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown, ArrowUp, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InsightCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  subtitle?: string;
}

export default function InsightCard({ title, value, change, icon, subtitle }: InsightCardProps) {
  const getTrendIcon = () => {
    if (change === undefined || change === 0) return <Minus className="w-4 h-4" />;
    if (change > 0) return <ArrowUp className="w-4 h-4" />;
    return <ArrowDown className="w-4 h-4" />;
  };

  const getTrendColor = () => {
    if (change === undefined || change === 0) return 'text-muted-foreground';
    if (change > 0) return 'text-red-500';
    return 'text-green-600';
  };

  return (
    <Card className="hover-elevate">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-2 mt-2">
          {change !== undefined && (
            <div className={cn('flex items-center gap-1 text-sm font-medium', getTrendColor())}>
              {getTrendIcon()}
              <span>{Math.abs(change)}%</span>
            </div>
          )}
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
