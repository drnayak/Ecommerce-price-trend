import ProductPriceCard from '../ProductPriceCard';
import turmericImg from '@assets/generated_images/Turmeric_powder_product_photo_62fd2254.png';

export default function ProductPriceCardExample() {
  const chartData = [
    { value: 120 },
    { value: 118 },
    { value: 115 },
    { value: 119 },
    { value: 117 },
    { value: 116 }
  ];

  return (
    <div className="p-8 bg-background max-w-md">
      <ProductPriceCard
        id="1"
        name="Organic Turmeric Powder"
        sku="SKU-6874"
        description="Premium quality organic turmeric powder, 95% curcuminoids"
        image={turmericImg}
        currentPrice={116}
        weeklyChange={-2.5}
        pricePosition={-12}
        chartData={chartData}
        onViewDetails={(id) => console.log('View details:', id)}
      />
    </div>
  );
}
