import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { camelize, getCurrentInstance, toHandlerKey } from 'vue'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// updated with your project's assets folder setup
export function getProductImageUrl(name: string) {
  return new URL(`../assets/product/images/${name}`, import.meta.url).href
}

export function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
