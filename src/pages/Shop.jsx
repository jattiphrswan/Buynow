import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Build category list once
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const categoryParam = searchParams.get('category');

  // Resolve the active category from the URL, default to "All"
  const activeCategory = useMemo(() => {
    if (!categoryParam) return 'All';

    const match = categories.find(
      (cat) => cat.toLowerCase() === categoryParam.toLowerCase()
    );

    return match || 'All';
  }, [categoryParam, categories]);

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;

    return products.filter(
      (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: category.toLowerCase() });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header + Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shop All Products
          </h1>
          <p className="text-gray-600">
            Explore our premium collection of goods.
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          <Filter className="w-5 h-5 text-gray-500 mr-2 shrink-0" />
          {categories.map((category) => {
            const isActive =
              activeCategory.toLowerCase() === category.toLowerCase();

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-brand-primary text-dark'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid / Empty State */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-xl text-gray-500">
            No products found in this category.
          </p>
          <button
            type="button"
            onClick={() => handleCategoryChange('All')}
            className="mt-4 text-brand-primary font-medium hover:underline"
          >
            View all products
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
