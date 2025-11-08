import MarketInsights from '../MarketInsights';

export default function MarketInsightsExample() {
  return (
    <div className="p-8 bg-background">
      <MarketInsights
        totalProducts={48}
        competitorsTracked={15}
        weeklyUpdates={192}
        nextUpdate="Nov 15"
      />
    </div>
  );
}
