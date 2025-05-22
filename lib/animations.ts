import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeIn = (delay = 0) => {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  }
}

export const slideIn = (direction: "left" | "right" | "up" | "down", delay = 0) => {
  const x = direction === "left" ? -50 : direction === "right" ? 50 : 0
  const y = direction === "up" ? -50 : direction === "down" ? 50 : 0

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }
}

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}

export const scaleIn = (delay = 0) => {
  return {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  }
}

export const rotateIn = (delay = 0) => {
  return {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  }
}
