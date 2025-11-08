import ProductListCard from '../ProductListCard';
import ashwagandhaImg from '@assets/generated_images/Ashwagandha_extract_powder_photo_723b23f2.png';
import peaProteinImg from '@assets/generated_images/Pea_protein_powder_photo_ef3c45d8.png';

export default function ProductListCardExample() {
  return (
    <div className="p-8 bg-background grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <ProductListCard
        id="1"
        name="Ashwagandha Extract 5:1"
        category="Herbal Extracts"
        image={ashwagandhaImg}
        currentPrice={145}
        weeklyChange={-5.2}
        onViewTrend={(id) => console.log('View trend:', id)}
      />
      <ProductListCard
        id="2"
        name="Organic Pea Protein Isolate"
        category="Proteins"
        image={peaProteinImg}
        currentPrice={89}
        weeklyChange={2.1}
        onViewTrend={(id) => console.log('View trend:', id)}
      />
    </div>
  );
}
