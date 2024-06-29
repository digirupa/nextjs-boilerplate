import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function formatThousands(value: number): string {
  if (value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  } else {
    return '0'
  }
}

export function shortenNumber(num: number): string {
  num = Number(num.toString().replace(/[^0-9.]/g, ''))
  if (num < 1000) {
    return String(num)
  }

  let si = [
    { v: 1e3, s: ' K' },
    { v: 1e6, s: ' M' },
    { v: 1e9, s: ' B' },
    { v: 1e12, s: ' T' },
    { v: 1e15, s: ' P' },
    { v: 1e18, s: ' E' }
  ]

  let index
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break
    }
  }
  const result: string = (
    (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[index].s
  ).toString()
  return result
}
