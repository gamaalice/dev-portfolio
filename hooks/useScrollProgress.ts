"use client"

import { useEffect, useState } from "react"

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let frameId: number | null = null

    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
      frameId = null
    }

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrollProgress)
      }
    }

    updateScrollProgress()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollProgress
}
