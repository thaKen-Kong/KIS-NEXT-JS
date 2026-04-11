"use client"

import { useEffect, useRef, useState } from "react"

type Direction = "left" | "right" | "top" | "bottom"

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: Direction
  blur?: boolean
  fade?: boolean
  threshold?: number
  rootMargin?: string
  transitionDuration?: number
  className?: string
  style?: React.CSSProperties
}

export function ScrollReveal({
  children,
  direction = "bottom",
  blur = true,
  fade = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  transitionDuration = 500,
  className = "",
  style,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const hiddenTransform = {
    left: "translateX(-40px)",
    right: "translateX(40px)",
    top: "translateY(-40px)",
    bottom: "translateY(40px)",
  }[direction]

  const appliedStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : fade ? 0 : 1,
    transform: isVisible ? "none" : hiddenTransform,
    filter: isVisible ? "none" : blur ? "blur(20px)" : "none",
    transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out, filter ${transitionDuration}ms ease-out`,
    willChange: "transform, opacity, filter",
    ...style,
  }

  return (
    <div ref={containerRef} className={className} style={appliedStyle}>
      {children}
    </div>
  )
}
