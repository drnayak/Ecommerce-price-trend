import { useState } from 'react';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import PriceChart from '@/components/PriceChart';
import InsightCard from '@/components/InsightCard';
import ProductPriceCard from '@/components/ProductPriceCard';
import MarketInsights from '@/components/MarketInsights';
import { TrendingDown, TrendingUp, Package, BarChart3 } from 'lucide-react';
import turmericImg from '@assets/generated_images/Turmeric_powder_product_photo_62fd2254.png';
import peaProteinImg from '@assets/generated_images/Pea_protein_powder_photo_ef3c45d8.png';
import ashwagandhaImg from '@assets/generated_images/Ashwagandha_extract_powder_photo_723b23f2.png';
import curcuminImg from '@assets/generated_images/Curcumin_extract_powder_photo_0413c55a.png';
import spirulinaImg from '@assets/generated_images/Spirulina_powder_product_photo_628add5d.png';
import moringaImg from '@assets/generated_images/Moringa_powder_product_photo_da93a8f9.png';

export default function PriceTrendsLanding() {
  const [, setLocation] = useState('');

  const aggregateData = [
    { date: '10/01', greenjeeva: 125, marketAvg: 135 },
    { date: '10/08', greenjeeva: 123, marketAvg: 133 },
    { date: '10/15', greenjeeva: 120, marketAvg: 130 },
    { date: '10/22', greenjeeva: 122, marketAvg: 128 },
    { date: '10/29', greenjeeva: 119, marketAvg: 126 },
    { date: '11/05', greenjeeva: 118, marketAvg: 125 },
  ];

  const products = [
    {
      id: '1',
      name: 'Organic Turmeric Powder',
      sku: 'SKU-6874',
      description: 'Premium quality organic turmeric powder, 95% curcuminoids',
      image: turmericImg,
      currentPrice: 116,
      weeklyChange: -2.5,
      pricePosition: -12,
      chartData: [{ value: 120 }, { value: 118 }, { value: 115 }, { value: 119 }, { value: 117 }, { value: 116 }]
    },
    {
      id: '2',
      name: 'Organic Pea Protein Isolate',
      sku: 'SKU-5429',
      description: 'Plant-based protein powder, 80% protein content',
      image: peaProteinImg,
      currentPrice: 89,
      weeklyChange: 2.1,
      pricePosition: -8,
      chartData: [{ value: 87 }, { value: 86 }, { value: 88 }, { value: 87 }, { value: 88 }, { value: 89 }]
    },
    {
      id: '3',
      name: 'Ashwagandha Extract 5:1',
      sku: 'SKU-7821',
      description: 'High potency ashwagandha root extract powder',
      image: ashwagandhaImg,
      currentPrice: 145,
      weeklyChange: -5.2,
      pricePosition: -15,
      chartData: [{ value: 155 }, { value: 152 }, { value: 148 }, { value: 150 }, { value: 147 }, { value: 145 }]
    },
    {
      id: '4',
      name: 'Curcumin 95% Extract',
      sku: 'SKU-3341',
      description: 'Standardized curcumin extract, pharmaceutical grade',
      image: curcuminImg,
      currentPrice: 198,
      weeklyChange: -1.8,
      pricePosition: -10,
      chartData: [{ value: 205 }, { value: 202 }, { value: 200 }, { value: 201 }, { value: 199 }, { value: 198 }]
    },
    {
      id: '5',
      name: 'Organic Spirulina Powder',
      sku: 'SKU-9234',
      description: 'Premium blue-green algae superfood powder',
      image: spirulinaImg,
      currentPrice: 72,
      weeklyChange: -3.4,
      pricePosition: -14,
      chartData: [{ value: 76 }, { value: 75 }, { value: 74 }, { value: 73 }, { value: 72 }, { value: 72 }]
    },
    {
      id: '6',
      name: 'Moringa Leaf Powder',
      sku: 'SKU-4567',
      description: 'Organic moringa oleifera leaf powder',
      image: moringaImg,
      currentPrice: 54,
      weeklyChange: -4.2,
      pricePosition: -18,
      chartData: [{ value: 58 }, { value: 57 }, { value: 56 }, { value: 55 }, { value: 54 }, { value: 54 }]
    }
  ];

  const topDrops = [
    { name: 'Moringa Leaf Powder', change: -18 },
    { name: 'Ashwagandha Extract', change: -15 },
    { name: 'Spirulina Powder', change: -14 },
    { name: 'Turmeric Powder', change: -12 },
    { name: 'Curcumin Extract', change: -10 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-green-50 to-background dark:from-green-950/20 dark:to-background py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-hero-title">
              Compare Market Prices & Track Trends
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing insights for nutraceutical products. Track competitor prices, monitor market trends, and make informed purchasing decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
              title="Market Position"
              value="12% Below"
              change={-12}
              icon={<TrendingUp className="w-4 h-4 text-green-600" />}
              subtitle="market average"
            />
            <InsightCard
              title="Price Updates"
              value="Weekly"
              icon={<BarChart3 className="w-4 h-4 text-primary" />}
              subtitle="Every Monday"
            />
          </div>

          <Card className="p-6">
            <PriceChart 
              data={aggregateData} 
              height={320}
              title="Average Market Price Trend - Last 6 Weeks"
            />
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Top Price Drops</h2>
              <p className="text-muted-foreground">Products with the highest price reductions this week</p>
            </div>
            <Link href="/products" data-testid="link-view-all">
              <a className="text-primary hover:underline font-medium">View All Products →</a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {topDrops.slice(0, 2).map((drop, index) => (
              <Card key={index} className="p-4 hover-elevate">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{drop.name}</h3>
                    <p className="text-sm text-muted-foreground">Price decreased by</p>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {drop.change}%
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Product Price Comparisons</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductPriceCard
                key={product.id}
                {...product}
                onViewDetails={(id) => window.location.href = `/product/${id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Market Insights</h2>
          <MarketInsights
            totalProducts={48}
            competitorsTracked={15}
            weeklyUpdates={192}
            nextUpdate="Nov 15"
          />
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://greenjeeva.com" className="hover:text-primary">Greenjeeva.com</a></li>
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Sourcing</a></li>
                <li><a href="#" className="hover:text-primary">Transparency Policy</a></li>
                <li><a href="#" className="hover:text-primary">Market Data</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empowering Buyers</h3>
              <p className="text-sm text-muted-foreground italic">
                Empowering Buyers with Transparent Market Insights
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
