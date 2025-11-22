'use client';

import { useState, useMemo } from 'react';
import NavbarWithCustomGif from '../components/NavbarWithCustomGif';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';

export default function NewInPage() {
  // Sample product data with high-quality Unsplash images
  const [allProducts] = useState([
    // T-SHIRTS
    {
      id: 1,
      name: 'COTTON ESSENTIAL TEE',
      price: 2495,
      category: 'T-SHIRTS',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 2,
      name: 'VINTAGE BLACK TEE',
      price: 3195,
      category: 'T-SHIRTS',
      size: ['M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 3,
      name: 'SLIM FIT COTTON TEE',
      price: 2795,
      category: 'T-SHIRTS',
      size: ['XS', 'S', 'M', 'L'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 4,
      name: 'PREMIUM ORGANIC TEE',
      price: 3995,
      category: 'T-SHIRTS',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 5,
      name: 'OVERSIZED COMFORT TEE',
      price: 3395,
      category: 'T-SHIRTS',
      size: ['M', 'L', 'XL', 'XXL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1503341338985-b0475d5a0c4e?w=800&h=1000&fit=crop&q=90',
    },
    // JACKETS
    {
      id: 6,
      name: 'CLASSIC BOMBER JACKET',
      price: 17995,
      category: 'JACKETS',
      size: ['M', 'L', 'XL', 'XXL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 7,
      name: 'VINTAGE DENIM JACKET',
      price: 15995,
      category: 'JACKETS',
      size: ['S', 'M', 'L'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 8,
      name: 'TACTICAL FIELD JACKET',
      price: 21995,
      category: 'JACKETS',
      size: ['XS', 'S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 9,
      name: 'GENUINE LEATHER JACKET',
      price: 26995,
      category: 'JACKETS',
      size: ['L', 'XL', 'XXL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop&q=90',
    },
    // SHIRTS
    {
      id: 10,
      name: 'FORMAL DRESS SHIRT',
      price: 4795,
      category: 'SHIRTS',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1594938291221-94f313b0e0c6?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 11,
      name: 'OXFORD BUTTON DOWN',
      price: 5195,
      category: 'SHIRTS',
      size: ['M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1624378515193-9e09c4e5e5c1?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 12,
      name: 'CASUAL STRIPED SHIRT',
      price: 4595,
      category: 'SHIRTS',
      size: ['XS', 'S', 'M'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1594938291221-94f313b0e0c6?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 13,
      name: 'LINEN RELAXED SHIRT',
      price: 5495,
      category: 'SHIRTS',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1624378515193-9e09c4e5e5c1?w=800&h=1000&fit=crop&q=90',
    },
    // POLOS
    {
      id: 14,
      name: 'CLASSIC FIT POLO',
      price: 4295,
      category: 'POLOS',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 15,
      name: 'PREMIUM PIMA POLO',
      price: 4995,
      category: 'POLOS',
      size: ['M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 16,
      name: 'PERFORMANCE POLO',
      price: 4695,
      category: 'POLOS',
      size: ['XS', 'S', 'M', 'L'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop&q=90',
    },
    // JEANS
    {
      id: 17,
      name: 'SLIM STRAIGHT JEANS',
      price: 7495,
      category: 'JEANS',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 18,
      name: 'BLACK DENIM JEANS',
      price: 8195,
      category: 'JEANS',
      size: ['M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 19,
      name: 'VINTAGE WASH JEANS',
      price: 7695,
      category: 'JEANS',
      size: ['XS', 'S', 'M', 'L', 'XL'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 20,
      name: 'DARK WASH JEANS',
      price: 8795,
      category: 'JEANS',
      size: ['M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&q=90',
    },
    // PANTS
    {
      id: 21,
      name: 'CLASSIC CHINO PANTS',
      price: 6795,
      category: 'PANTS',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 22,
      name: 'UTILITY CARGO PANTS',
      price: 7295,
      category: 'PANTS',
      size: ['XS', 'S', 'M'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 23,
      name: 'FORMAL TROUSER PANTS',
      price: 7895,
      category: 'PANTS',
      size: ['L', 'XL', 'XXL'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 24,
      name: 'SLIM FIT DRESS PANTS',
      price: 8395,
      category: 'PANTS',
      size: ['M', 'L', 'XL', 'XXL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&q=90',
    },
    // SHORTS
    {
      id: 25,
      name: 'CARGO UTILITY SHORTS',
      price: 4795,
      category: 'SHORTS',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 26,
      name: 'CHINO CLASSIC SHORTS',
      price: 4295,
      category: 'SHORTS',
      size: ['M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 27,
      name: 'BEACH SWIM SHORTS',
      price: 3795,
      category: 'SHORTS',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
    },
    // CARGOS
    {
      id: 28,
      name: 'TACTICAL UTILITY CARGO',
      price: 8795,
      category: 'CARGOS',
      size: ['M', 'L', 'XL', 'XXL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 29,
      name: 'MILITARY STYLE CARGO',
      price: 9195,
      category: 'CARGOS',
      size: ['XS', 'S', 'M'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 30,
      name: 'URBAN CARGO PANTS',
      price: 8595,
      category: 'CARGOS',
      size: ['L', 'XL'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
    },
    // JERSEY
    {
      id: 31,
      name: 'ATHLETIC PERFORMANCE JERSEY',
      price: 5795,
      category: 'JERSEY',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 32,
      name: 'SPORT MESH JERSEY',
      price: 5295,
      category: 'JERSEY',
      size: ['M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 33,
      name: 'TRAINING JERSEY',
      price: 6095,
      category: 'JERSEY',
      size: ['XS', 'S', 'M', 'L'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&fit=crop&q=90',
    },
    // HOODIES
    {
      id: 34,
      name: 'PREMIUM ZIP HOODIE',
      price: 12995,
      category: 'HOODIES',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 35,
      name: 'OVERSIZED HOODIE',
      price: 11995,
      category: 'HOODIES',
      size: ['M', 'L', 'XL', 'XXL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 36,
      name: 'FLEECE HOODIE',
      price: 13995,
      category: 'HOODIES',
      size: ['XS', 'S', 'M', 'L'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 37,
      name: 'PULLOVER HOODIE',
      price: 10995,
      category: 'HOODIES',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1602810318691-0b8e4af75b4c?w=800&h=1000&fit=crop&q=90',
    },
    // SWEATSHIRTS
    {
      id: 38,
      name: 'CLASSIC CREW SWEATSHIRT',
      price: 8995,
      category: 'SWEATSHIRTS',
      size: ['M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1521223890152-f405c10c5f92?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 39,
      name: 'PREMIUM SWEATSHIRT',
      price: 10495,
      category: 'SWEATSHIRTS',
      size: ['S', 'M', 'L', 'XL'],
      availability: 'IN STOCK',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=1000&fit=crop&q=90',
    },
    {
      id: 40,
      name: 'OVERSIZED SWEATSHIRT',
      price: 9495,
      category: 'SWEATSHIRTS',
      size: ['L', 'XL', 'XXL'],
      availability: 'OUT OF STOCK',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&fit=crop&q=90',
    },
  ]);

  const [sortBy, setSortBy] = useState('FEATURED');
  const [selectedCategory, setSelectedCategory] = useState('VIEW ALL');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(null);

  // Products with size and availability - assign default values for products missing them
  const productsWithFilters = useMemo(() => {
    return allProducts.map((product) => ({
      ...product,
      size: product.size || ['S', 'M', 'L', 'XL'],
      availability: product.availability || 'IN STOCK',
    }));
  }, [allProducts]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let products = [...productsWithFilters];
    
    // Filter by category
    if (selectedCategory !== 'VIEW ALL') {
      products = products.filter(product => product.category === selectedCategory);
    }
    
    // Filter by size
    if (selectedSize) {
      products = products.filter(product => 
        product.size && product.size.includes(selectedSize)
      );
    }
    
    // Filter by availability
    if (selectedAvailability) {
      products = products.filter(product => 
        product.availability === selectedAvailability
      );
    }
    
    // Sort products
    switch (sortBy) {
      case 'PRICE_LOW_HIGH':
        return products.sort((a, b) => a.price - b.price);
      case 'PRICE_HIGH_LOW':
        return products.sort((a, b) => b.price - a.price);
      case 'NEWEST':
        return products.sort((a, b) => b.id - a.id);
      case 'FEATURED':
      default:
        return products;
    }
  }, [productsWithFilters, sortBy, selectedCategory, selectedSize, selectedAvailability]);

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAvailabilityChange = (availability) => {
    setSelectedAvailability(availability);
  };

  return (
    <>
      <NavbarWithCustomGif />
      <div className="pt-24 pb-12">
        <div className="">
          <FilterBar
            totalProducts={filteredAndSortedProducts.length}
            onSortChange={handleSortChange}
            onCategoryChange={handleCategoryChange}
            onSizeChange={handleSizeChange}
            onAvailabilityChange={handleAvailabilityChange}
          />
          <ProductGrid products={filteredAndSortedProducts} />
        </div>
      </div>
    </>
  );
}

