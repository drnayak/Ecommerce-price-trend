import InsightCard from '../InsightCard';
import { TrendingDown, TrendingUp, Users, Package } from 'lucide-react';

export default function InsightCardExample() {
  return (
    <div className="p-8 bg-background grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <InsightCard
        title="Avg Price Change"
        value="-3.2%"
        change={-3.2}
        icon={<TrendingDown className="w-4 h-4 text-green-600" />}
        subtitle="vs. last 4 weeks"
      />
      <InsightCard
        title="Products Monitored"
        value="48"
        icon={<Package className="w-4 h-4 text-primary" />}
        subtitle="Active tracking"
      />
      <InsightCard
        title="Competitors Tracked"
        value="15"
        icon={<Users className="w-4 h-4 text-primary" />}
      />
      <InsightCard
        title="Market Position"
        value="12% Below"
        change={-12}
        icon={<TrendingUp className="w-4 h-4 text-green-600" />}
        subtitle="market average"
      />
    </div>
  );
}
