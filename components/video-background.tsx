"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface VideoBackgroundProps {
  videoSrc: string
  fallbackImageSrc: string
  fallbackImageAlt: string
  overlayOpacity?: number
}

export default function VideoBackground({
  videoSrc,
  fallbackImageSrc,
  fallbackImageAlt,
  overlayOpacity = 0.5,
}: VideoBackgroundProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [shouldUseReducedMotion, setShouldUseReducedMotion] = useState(false)
  const [isVideoError, setIsVideoError] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setShouldUseReducedMotion(mediaQuery.matches)

    const handleReducedMotionChange = () => {
      setShouldUseReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleReducedMotionChange)
    return () => {
      mediaQuery.removeEventListener("change", handleReducedMotionChange)
    }
  }, [])

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  const handleVideoError = () => {
    setIsVideoError(true)
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {!shouldUseReducedMotion && !isVideoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover ${isVideoLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          poster={fallbackImageSrc}
          aria-hidden="true"
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Always render the image as fallback or for reduced motion preference */}
      <div
        className={`${
          isVideoLoaded && !shouldUseReducedMotion && !isVideoError ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500 absolute inset-0`}
      >
        <Image
          src={fallbackImageSrc || "/placeholder.svg"}
          alt={fallbackImageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/60 z-10"
        style={{ opacity: overlayOpacity }}
      ></div>
    </div>
  )
}
