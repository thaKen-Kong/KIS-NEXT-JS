"use client"

import { useEffect, useRef, useState } from "react"

interface PopupWrapperProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  scale?: number
  pop?: boolean
  popScale?: number
  blur?: boolean
  fade?: boolean
  threshold?: number
  rootMargin?: string
  className?: string
  style?: React.CSSProperties
}

export function PopupWrapper({
  children,
  delay = 0,
  duration = 200,
  scale = 0,
  pop = false,
  popScale = 1.08,
  blur = true,
  fade = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  className = "",
  style,
}: PopupWrapperProps) {
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

  const isPopActive = pop && isVisible

  const animationStyle = pop
    ? `@keyframes popup-wrapper-pop {
        0% {
          opacity: 0;
          transform: scale(0) translateY(20px);
          filter: ${blur ? "blur(18px)" : "none"};
        }
        70% {
          opacity: 1;
          transform: scale(${popScale}) translateY(0);
          filter: none;
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
          filter: none;
        }
      }`
    : ""

  const appliedStyle: React.CSSProperties = {
    opacity: isPopActive ? undefined : isVisible ? 1 : fade ? 0 : 1,
    transform: isPopActive ? undefined : isVisible ? "none" : `scale(${scale}) translateY(20px)`,
    filter: isPopActive ? undefined : isVisible ? "none" : blur ? "blur(18px)" : "none",
    transition: pop
      ? undefined
      : `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms`,
    animation: isPopActive
      ? `popup-wrapper-pop ${duration}ms ease-out ${delay}ms forwards`
      : undefined,
    willChange: "transform, opacity, filter",
    ...style,
  }

  return (
    <>
      {pop ? <style>{animationStyle}</style> : null}
      <div ref={containerRef} className={className} style={appliedStyle}>
        {children}
      </div>
    </>
  )
}
