"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./addToBag";


export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  // import hook
  const { checkoutSingleItem } = useShoppingCart();

//   applied after changing in hook to checkout

function buyNow (priceId: string) {
    checkoutSingleItem(priceId)
}

////////////////////////////////////////

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button className="bg-gray-300 text-black hover:bg-gray-400"
      onClick={() => {
       buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}
