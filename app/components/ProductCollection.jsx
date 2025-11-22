'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCollection() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 2,
      name: 'VINTAGE BLACK TEE',
      price: 3195,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&q=90',
      slug: 'vintage-black-tee',
    },
    {
      id: 7,
      name: 'VINTAGE DENIM JACKET',
      price: 15995,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop&q=90',
      slug: 'vintage-denim-jacket',
    },
    {
      id: 10,
      name: 'FORMAL DRESS SHIRT',
      price: 4795,
      image: 'https://images.unsplash.com/photo-1594938291221-94f313b0e0c6?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1624378515193-9e09c4e5e5c1?w=800&h=1000&fit=crop&q=90',
      slug: 'formal-dress-shirt',
    },
    {
      id: 14,
      name: 'CLASSIC FIT POLO',
      price: 4295,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&q=90',
      slug: 'classic-fit-polo',
    },
    {
      id: 17,
      name: 'SLIM STRAIGHT JEANS',
      price: 7495,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&q=90',
      slug: 'slim-straight-jeans',
    },
    {
      id: 21,
      name: 'CLASSIC CHINO PANTS',
      price: 6795,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=1000&fit=crop&q=90',
      slug: 'classic-chino-pants',
    },
    {
      id: 35,
      name: 'FLEECE HOODIE',
      price: 13995,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop&q=90',
      slug: 'fleece-hoodie',
    },
    {
      id: 39,
      name: 'PREMIUM SWEATSHIRT',
      price: 10495,
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&h=1000&fit=crop&q=90',
      hoverImage: 'https://images.unsplash.com/photo-1521223890152-f405c10c5f92?w=800&h=1000&fit=crop&q=90',
      slug: 'premium-sweatshirt',
    },
  ];

  return (
    <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className='text-black mb-4 sm:mb-6 text-lg' >MORE FROM RETRO LOUVE</h1>
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