"use client";
import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ProductCard({ id, title, price, description, category, image, rating }) {
  const router = useRouter();
  const { rate, count } = rating || { rate: 0, count: 0 };

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[220px] max-w-[280px] min-h-[450px] flex flex-col"
      onClick={() => router.push(`/products/${id}`)}
    >
      <CardHeader className="relative p-4 flex-shrink-0">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-4 flex flex-col min-h-[180px]">
        <div className="h-[56px] flex-shrink-0">
          <h4 className="font-semibold text-lg line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h4>
        </div>

        <div className="flex items-center mb-2 flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rate) ? 'text-yellow-400' : 'text-gray-200'
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({count})</span>
        </div>

        <div className="h-[40px] flex-shrink-0">
          <p className="text-sm text-gray-700 line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto flex-shrink-0">
          <p className="text-lg font-bold text-blue-600">
            ${price.toFixed(2)}
          </p>
          <Button 
            variant="outline" 
            className="hover:bg-blue-600 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic here
            }}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard; 