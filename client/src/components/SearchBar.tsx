import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onCategoryFilter?: (category: string | null) => void;
  categories?: string[];
  placeholder?: string;
}

export default function SearchBar({ 
  onSearch, 
  onCategoryFilter,
  categories = ['All', 'Proteins', 'Herbal Extracts', 'Vitamins', 'Minerals', 'Amino Acids'],
  placeholder = 'Search products...'
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleCategoryClick = (category: string) => {
    const newCategory = category === 'All' ? null : category;
    setSelectedCategory(category);
    onCategoryFilter?.(newCategory);
  };

  return (
    <div className="space-y-4">
      <div className="relative max-w-2xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10"
          data-testid="input-search"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={() => handleSearch('')}
            data-testid="button-clear-search"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'secondary'}
            className="cursor-pointer hover-elevate"
            onClick={() => handleCategoryClick(category)}
            data-testid={`badge-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}
