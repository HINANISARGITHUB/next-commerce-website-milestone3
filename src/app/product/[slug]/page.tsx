// dynamic routing of product details

import AddToBag from "@/app/components/addToBag";
import CheckoutNow from "@/app/components/checkoutNow";
import ImageGallery from "@/app/components/imageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

async function getData(slug: string) {
  /* query 3*/

  const Query = `*[_type == "product" && slug.current == "${slug}"][0] {
  _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
   
}`;

  const data = await client.fetch(Query);

  return data;
}

export const dynamic = "force-dynamic";  //added end after all working

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto  max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* imgesGallery */}
          <ImageGallery images={data.images} />

          {/* images category-name */}

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>

              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            {/* images botton with star*/}

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-3">
                <span className="text-sm">4.2</span>

                {/* star icon */}
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition  duration-100">
                56 Ratings
              </span>
            </div>

            {/* price */}

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800">
                  ${data.price}
                </span>

                <span className="mb-0.5 text-red-500 line-through ml-2">
                  ${data.price + 30}
                </span>
              </div>

              {/* shipping */}

              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              {/* Truck icon */}
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Days Shipping</span>
            </div>

            {/* buttons */}
            <div className="flex gap-2.5">
              {/* after create addToBag.tsx file */}
              <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>

            {/* description */}

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
