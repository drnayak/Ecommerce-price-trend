import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import PriceChart from '@/components/PriceChart';
import { Home, TrendingDown } from 'lucide-react';
import { Link, useRoute } from 'wouter';
import turmericImg from '@assets/generated_images/Turmeric_powder_product_photo_62fd2254.png';

export default function ProductDetail() {
  const [, params] = useRoute('/product/:id');
  const [selectedView, setSelectedView] = useState('all');

  const product = {
    id: params?.id || '1',
    name: 'Organic Turmeric Powder',
    sku: 'SKU-6874',
    description: 'Premium quality organic turmeric powder with 95% curcuminoids. Sourced from certified organic farms in India. Perfect for dietary supplements, functional foods, and natural health products.',
    category: 'Herbal Extracts',
    image: turmericImg,
    currentPrice: 116,
    weeklyChange: -2.5,
    pricePosition: -12
  };

  const fullChartData = [
    { date: '09/10', greenjeeva: 125, competitor1: 135, competitor2: 133, marketAvg: 134 },
    { date: '09/17', greenjeeva: 123, competitor1: 133, competitor2: 131, marketAvg: 132 },
    { date: '09/24', greenjeeva: 120, competitor1: 130, competitor2: 128, marketAvg: 129 },
    { date: '10/01', greenjeeva: 120, competitor1: 130, competitor2: 128, marketAvg: 129 },
    { date: '10/08', greenjeeva: 118, competitor1: 128, competitor2: 127, marketAvg: 127.5 },
    { date: '10/15', greenjeeva: 115, competitor1: 125, competitor2: 124, marketAvg: 124.5 },
    { date: '10/22', greenjeeva: 119, competitor1: 123, competitor2: 120, marketAvg: 121.5 },
    { date: '10/29', greenjeeva: 117, competitor1: 122, competitor2: 121, marketAvg: 121.5 },
    { date: '11/05', greenjeeva: 116, competitor1: 120, competitor2: 119, marketAvg: 119.5 },
  ];

  const priceHistory = [
    { date: 'Nov 5, 2025', greenjeeva: 116, competitor1: 120, competitor2: 119, marketAvg: 119.5 },
    { date: 'Oct 29, 2025', greenjeeva: 117, competitor1: 122, competitor2: 121, marketAvg: 121.5 },
    { date: 'Oct 22, 2025', greenjeeva: 119, competitor1: 123, competitor2: 120, marketAvg: 121.5 },
    { date: 'Oct 15, 2025', greenjeeva: 115, competitor1: 125, competitor2: 124, marketAvg: 124.5 },
  ];

  const getFilteredData = () => {
    if (selectedView === 'greenjeeva') {
      return fullChartData.map(d => ({ date: d.date, greenjeeva: d.greenjeeva }));
    }
    if (selectedView === 'competitor1') {
      return fullChartData.map(d => ({ date: d.date, greenjeeva: d.greenjeeva, competitor1: d.competitor1 }));
    }
    if (selectedView === 'competitor2') {
      return fullChartData.map(d => ({ date: d.date, greenjeeva: d.greenjeeva, competitor2: d.competitor2 }));
    }
    return fullChartData;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <a>
              <Button variant="ghost" size="icon">
                <Home className="w-5 h-5" />
              </Button>
            </a>
          </Link>
          <h1 className="text-2xl font-bold text-primary">Greenjeeva Price Tracker</h1>
          <div className="w-10" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                  data-testid="img-product"
                />
                <CardTitle data-testid="text-product-name">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{product.sku}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Category</p>
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Current Price</p>
                  <div className="text-3xl font-bold" data-testid="text-current-price">${product.currentPrice}</div>
                  <div className="flex items-center gap-1 text-sm font-medium text-green-600 mt-1">
                    <TrendingDown className="w-4 h-4" />
                    <span>{Math.abs(product.weeklyChange)}% this week</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Price Position</p>
                  <Badge className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300">
                    {Math.abs(product.pricePosition)}% below market average
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Description</p>
                  <p className="text-sm">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Price Comparison - Last 8 Weeks</CardTitle>
                <div className="flex items-center gap-2 mt-4">
                  <p className="text-sm text-muted-foreground">View:</p>
                  <ToggleGroup 
                    type="single" 
                    value={selectedView} 
                    onValueChange={(value) => value && setSelectedView(value)}
                  >
                    <ToggleGroupItem value="all" data-testid="toggle-all">All</ToggleGroupItem>
                    <ToggleGroupItem value="greenjeeva" data-testid="toggle-greenjeeva">Greenjeeva</ToggleGroupItem>
                    <ToggleGroupItem value="competitor1" data-testid="toggle-competitor1">Competitor A</ToggleGroupItem>
                    <ToggleGroupItem value="competitor2" data-testid="toggle-competitor2">Competitor B</ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardHeader>
              <CardContent>
                <PriceChart data={getFilteredData()} height={400} showLegend={selectedView === 'all'} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Price History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Date</th>
                        <th className="text-right py-3 px-4 font-semibold">Greenjeeva</th>
                        <th className="text-right py-3 px-4 font-semibold">Competitor A</th>
                        <th className="text-right py-3 px-4 font-semibold">Competitor B</th>
                        <th className="text-right py-3 px-4 font-semibold">Market Avg</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceHistory.map((row, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-border hover-elevate"
                          data-testid={`row-price-${index}`}
                        >
                          <td className="py-3 px-4">{row.date}</td>
                          <td className="text-right py-3 px-4 font-semibold text-primary">${row.greenjeeva}</td>
                          <td className="text-right py-3 px-4">${row.competitor1}</td>
                          <td className="text-right py-3 px-4">${row.competitor2}</td>
                          <td className="text-right py-3 px-4">${row.marketAvg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Competitor Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2">Competitor A</h4>
                    <p className="text-sm text-muted-foreground mb-1">Current Price: $120</p>
                    <p className="text-sm text-muted-foreground">Last Updated: 2 hours ago</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-2">Competitor B</h4>
                    <p className="text-sm text-muted-foreground mb-1">Current Price: $119</p>
                    <p className="text-sm text-muted-foreground">Last Updated: 2 hours ago</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  * Based on publicly available pricing data from 15 tracked competitors. Prices are updated weekly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
