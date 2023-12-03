import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// turns price of 1 into $1.00 in the users set currency
export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "AUD",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const {currency = "AUD", notation = "compact"} = options

  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    // with no set value, it will take the default for currency and notation
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericPrice)
}