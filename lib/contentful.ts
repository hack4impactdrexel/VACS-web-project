// This file is a placeholder for Contentful integration
// You would implement actual Contentful client and helper functions here

import { createClient } from "contentful"

// Types for Contentful content models
export interface HeroSection {
  title: string
  subtitle: string
  backgroundImage: {
    url: string
    description: string
  }
}

export interface ServiceItem {
  title: string
  description: string
  icon: string
}

export interface StatsItem {
  value: string
  label: string
}

// Initialize Contentful client
export const initContentful = () => {
  // In production, you would use environment variables for these values
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "your-space-id",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "your-access-token",
  })

  return client
}

// Example function to fetch hero section content
export const getHeroSection = async (): Promise<HeroSection> => {
  const client = initContentful()

  try {
    const entries = await client.getEntries({
      content_type: "heroSection",
      limit: 1,
    })

    if (entries.items.length > 0) {
      const heroData = entries.items[0].fields as any

      return {
        title: heroData.title || "Building dreams, one school at a time",
        subtitle: heroData.subtitle || "Default subtitle text",
        backgroundImage: {
          url: heroData.backgroundImage?.fields?.file?.url || "/hero-kids-classroom.png",
          description: heroData.backgroundImage?.fields?.description || "Children in a classroom",
        },
      }
    }

    // Return default data if no entries found
    return {
      title: "Building dreams, one school at a time",
      subtitle: "Default subtitle when no content is available",
      backgroundImage: {
        url: "/hero-kids-classroom.png",
        description: "Children in a classroom",
      },
    }
  } catch (error) {
    console.error("Error fetching hero section from Contentful:", error)

    // Return default data on error
    return {
      title: "Building dreams, one school at a time",
      subtitle: "Default subtitle when error occurs",
      backgroundImage: {
        url: "/hero-kids-classroom.png",
        description: "Children in a classroom",
      },
    }
  }
}

// Example function to fetch services
export const getServices = async (): Promise<ServiceItem[]> => {
  const client = initContentful()

  try {
    const entries = await client.getEntries({
      content_type: "service",
      order: "fields.order",
    })

    if (entries.items.length > 0) {
      return entries.items.map((item: any) => ({
        title: item.fields.title || "",
        description: item.fields.description || "",
        icon: item.fields.icon || "default-icon",
      }))
    }

    // Return default data if no entries found
    return defaultServices
  } catch (error) {
    console.error("Error fetching services from Contentful:", error)
    return defaultServices
  }
}

// Default services data
const defaultServices: ServiceItem[] = [
  {
    title: "Facility Design & Construction",
    description:
      "We design and build charter school facilities from the ground up or renovate existing structures, always tailored to your educational mission.",
    icon: "building",
  },
  {
    title: "Educational Environment Design",
    description:
      "We believe learning environments should reflect and support the needs of students and educators. Every project is driven by purpose and equity.",
    icon: "book-open",
  },
  {
    title: "Real Estate Development",
    description:
      "We provide comprehensive real estate development services, guiding charter schools through every stage of the process.",
    icon: "home",
  },
]
