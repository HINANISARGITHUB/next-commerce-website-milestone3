"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";


export default function ShoppingCartModal() {
  // hookProvider use shoppingcart package
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    
  } = useShoppingCart();

  const stripePromise = loadStripe("pk_test_51QhOZBF3DJt7SJYiq2Boq3LitktQUotOllp2p4PXVjAwtPsh3aSxkX2S1VQoQr0kk37xvTRH09iNfAEBiPwaeIYf00dw4u3HfB");

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
  
    const stripe = await stripePromise; // Load Stripe instance
  
    if (!stripe) {
      console.error("Stripe failed to load");
      return;
    }
  
    try {
      const result = await stripe.redirectToCheckout({
        lineItems: [
          {
            price: "price_1QhP8FF3DJt7SJYiX7QHvQ4O", // Product 1 Price ID
            quantity: 1,
          },
          {
            price: "price_1QhPBVF3DJt7SJYi2chOXJPE", // Product 2 Price ID
            quantity: 1,
          },
          {
            price: "price_1QhOzRF3DJt7SJYiGkHcG4be", // Product 3 Price ID
            quantity: 1,
          },
          {
            price: "price_1QhQjuF3DJt7SJYifQew8dAt", // Product 4 Price ID
            quantity: 1,
          },
        ],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });
  
      if (result?.error) {
        console.log("Error during checkout:", result.error);
      }
    } catch (error) {
      console.log("Checkout Error:", error);
    }
  }
  
  
    

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don&apos;t have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>

                          {/* description */}
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>

                          {/* remove click function */}
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          {/* totalPrice */}
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${cartCount === 0 ? 0 : (totalPrice || 0).toFixed(2)}</p>
            </div>

            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout
            </p>

            {/* checkoutbutton */}
            <div className="mt-6">
              <Button
                onClick={handleCheckoutClick}
                className="w-full"
                disabled={cartCount === 0} // Disable if no items in cart
              >
                Checkout
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
