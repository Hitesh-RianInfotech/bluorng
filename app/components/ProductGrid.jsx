// components/ProductGrid.jsx
import Image from 'next/image';

export default function ProductGrid({ products }) {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="relative mb-3 w-full overflow-hidden bg-black/95 pt-[130%]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="px-1">
            <h3 className="mb-1 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-900">
              {product.name}
            </h3>
            <p className="text-[11px] font-normal text-gray-600">
              RS. {product.price.toLocaleString('en-IN')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}