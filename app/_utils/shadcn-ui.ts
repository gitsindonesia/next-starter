import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// For shadcn UI
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
