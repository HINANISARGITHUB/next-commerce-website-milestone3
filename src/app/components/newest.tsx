import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {  /*2nd query*/
  const Query = `*[_type == "product"][0...4] | order(_createdAt desc) { 
  _id,
    price, 
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
}`;

  const data = await client.fetch(Query);9
  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest Products
          </h2>

          <Link href="/all" className="text-primary flex items-center gap-x-1 ">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        {/* product */}

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="product image"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              {/* product detail*/}

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>

                {/* price */}

                <p className="text-sm font-medium text-gray-900">${product.price}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
