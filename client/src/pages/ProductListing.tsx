import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import ProductListCard from '@/components/ProductListCard';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Link } from 'wouter';
import turmericImg from '@assets/generated_images/Turmeric_powder_product_photo_62fd2254.png';
import peaProteinImg from '@assets/generated_images/Pea_protein_powder_photo_ef3c45d8.png';
import ashwagandhaImg from '@assets/generated_images/Ashwagandha_extract_powder_photo_723b23f2.png';
import curcuminImg from '@assets/generated_images/Curcumin_extract_powder_photo_0413c55a.png';
import spirulinaImg from '@assets/generated_images/Spirulina_powder_product_photo_628add5d.png';
import moringaImg from '@assets/generated_images/Moringa_powder_product_photo_da93a8f9.png';

export default function ProductListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allProducts = [
    {
      id: '1',
      name: 'Organic Turmeric Powder',
      category: 'Herbal Extracts',
      image: turmericImg,
      currentPrice: 116,
      weeklyChange: -2.5
    },
    {
      id: '2',
      name: 'Organic Pea Protein Isolate',
      category: 'Proteins',
      image: peaProteinImg,
      currentPrice: 89,
      weeklyChange: 2.1
    },
    {
      id: '3',
      name: 'Ashwagandha Extract 5:1',
      category: 'Herbal Extracts',
      image: ashwagandhaImg,
      currentPrice: 145,
      weeklyChange: -5.2
    },
    {
      id: '4',
      name: 'Curcumin 95% Extract',
      category: 'Herbal Extracts',
      image: curcuminImg,
      currentPrice: 198,
      weeklyChange: -1.8
    },
    {
      id: '5',
      name: 'Organic Spirulina Powder',
      category: 'Vitamins',
      image: spirulinaImg,
      currentPrice: 72,
      weeklyChange: -3.4
    },
    {
      id: '6',
      name: 'Moringa Leaf Powder',
      category: 'Vitamins',
      image: moringaImg,
      currentPrice: 54,
      weeklyChange: -4.2
    },
    {
      id: '7',
      name: 'Whey Protein Concentrate',
      category: 'Proteins',
      image: peaProteinImg,
      currentPrice: 95,
      weeklyChange: 1.5
    },
    {
      id: '8',
      name: 'Vitamin D3 5000 IU',
      category: 'Vitamins',
      image: curcuminImg,
      currentPrice: 28,
      weeklyChange: -2.8
    },
    {
      id: '9',
      name: 'Zinc Citrate Powder',
      category: 'Minerals',
      image: spirulinaImg,
      currentPrice: 42,
      weeklyChange: 0.5
    }
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-page-title">All Products</h1>
          <p className="text-muted-foreground">
            Browse all {allProducts.length} monitored products and track their price trends
          </p>
        </div>

        <div className="mb-8">
          <SearchBar
            onSearch={setSearchQuery}
            onCategoryFilter={setSelectedCategory}
          />
        </div>

        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredProducts.length} products
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductListCard
              key={product.id}
              {...product}
              onViewTrend={(id) => window.location.href = `/product/${id}`}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
