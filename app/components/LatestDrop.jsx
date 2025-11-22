'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LatestDrop() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'COTTON ESSENTIAL TEE',
      price: 2495,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&q=90',
      slug: 'cotton-essential-tee',
    },
    {
      id: 6,
      name: 'CLASSIC BOMBER JACKET',
      price: 17995,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=1000&fit=crop&q=90',
      slug: 'classic-bomber-jacket',
    },
    {
      id: 34,
      name: 'PREMIUM ZIP HOODIE',
      price: 12995,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop&q=90',
      slug: 'premium-zip-hoodie',
    },
    {
      id: 38,
      name: 'CLASSIC CREW SWEATSHIRT',
      price: 8995,
      image: 'https://images.unsplash.com/photo-1521223890152-f405c10c5f92?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=1000&fit=crop&q=90',
      slug: 'classic-crew-sweatshirt',
    },
  ];

  return (
    <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className='text-black mb-4 sm:mb-6 text-lg' >LATEST DROP</h1>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white mb-4">
                {/* Default Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                
                {/* Hover Image */}
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} - Back`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <h3 className="text-xs font-medium tracking-wide uppercase text-gray-900">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600">RS. {product.price.toLocaleString('en-IN')}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Discover More Button */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <Link href="/new-in">
            <button className="px-4 sm:px-6 py-2 text-black border-2 border-black text-xs sm:text-sm tracking-wider font-medium hover:bg-black cursor-pointer hover:text-white transition-colors duration-300">
              DISCOVER MORE
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}