'use client'
import { useEffect } from 'react'

export const ScrollToTop = () => {
  useEffect(() => {
    return window.scrollTo(0, 0)
  }, [])

  return null
}
