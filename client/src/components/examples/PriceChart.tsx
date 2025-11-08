import PriceChart from '../PriceChart';

export default function PriceChartExample() {
  const mockData = [
    { date: '10/01', greenjeeva: 120, competitor1: 130, competitor2: 128, marketAvg: 129 },
    { date: '10/08', greenjeeva: 118, competitor1: 128, competitor2: 127, marketAvg: 127.5 },
    { date: '10/15', greenjeeva: 115, competitor1: 125, competitor2: 124, marketAvg: 124.5 },
    { date: '10/22', greenjeeva: 119, competitor1: 123, competitor2: 120, marketAvg: 121.5 },
    { date: '10/29', greenjeeva: 117, competitor1: 122, competitor2: 121, marketAvg: 121.5 },
    { date: '11/05', greenjeeva: 116, competitor1: 120, competitor2: 119, marketAvg: 119.5 },
  ];

  return (
    <div className="p-8 bg-background">
      <PriceChart data={mockData} title="Price Trend - Last 6 Weeks" />
    </div>
  );
}
