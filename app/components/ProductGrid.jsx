'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCollection() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'BLACK NOCTURNAL HOODIE',
      price: 'RS. 13,995',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop&q=90',
      slug: 'black-nocturnal-hoodie',
    },
    {
      id: 2,
      name: 'OLIVE NOCTURNAL HOODIE',
      price: 'RS. 13,995',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1521223890152-f405c10c5f92?w=800&h=1000&fit=crop&q=90',
      slug: 'olive-nocturnal-hoodie',
    },
    {
      id: 3,
      name: 'BLACK SIGNAL SWEATSHIRT',
      price: 'RS. 8,495',
      image: 'https://images.unsplash.com/photo-1521223890152-f405c10c5f92?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=1000&fit=crop&q=90',
      slug: 'black-signal-sweatshirt',
    },
    {
      id: 4,
      name: 'YELLOW NOCTURNAL SWEATSHIRT',
      price: 'RS. 9,995',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1000&fit=crop&q=90',
      slug: 'yellow-nocturnal-sweatshirt',
    },
    {
      id: 5,
      name: 'GRAY PREMIUM HOODIE',
      price: 'RS. 12,995',
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop&q=90',
      slug: 'gray-premium-hoodie',
    },
    {
      id: 6,
      name: 'NAVY BLUE SWEATSHIRT',
      price: 'RS. 10,495',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1602810318691-0b8e4af75b4c?w=800&h=1000&fit=crop&q=90',
      slug: 'navy-blue-sweatshirt',
    },
    {
      id: 7,
      name: 'WHITE CLASSIC HOODIE',
      price: 'RS. 11,995',
      image: 'https://images.unsplash.com/photo-1602810318691-0b8e4af75b4c?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop&q=90',
      slug: 'white-classic-hoodie',
    },
    {
      id: 8,
      name: 'RED SIGNAL HOODIE',
      price: 'RS. 14,495',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop&q=90',
      slug: 'red-signal-hoodie',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className='text-black mb-4' >MORE FROM BLUORNG</h1>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
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
                <p className="text-xs text-gray-600">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Discover More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-2 text-black border-2 border-black text-sm tracking-wider font-medium hover:bg-black cursor-pointer hover:text-white transition-colors duration-300">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
}