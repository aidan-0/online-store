"use client";

import { ShoppingCartIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  // change this to play with cart settings
  const itemCount = 0;
  const fee = 1;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCartIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0{/* items in cart */}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
          {/* TODO: fix this number later */}
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/* TODO: cart logic */}
              Cart items
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="flex">
                <span className="flex-1">Transaction Fee</span>
                <span>{formatPrice(fee)}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Total</span>
                {/* TODO - CALC THE TOTAL  */}
                <span>{formatPrice(fee)}</span>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center mt-10">
            <p className="text-xl font-semibold">Nothing in here yet</p>
          <div className="flex h-full items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground scale-150" aria-hidden='true'>
              <Image
                src="/empty-cart.png"
                fill
                alt="empty shopping cart image"
              />
            </div>
          </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
