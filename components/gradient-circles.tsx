interface GradientCirclesProps {
  variant?: "hero" | "services" | "impact" | "contact"
}

export default function GradientCircles({ variant = "hero" }: GradientCirclesProps) {
  const getCircleConfig = () => {
    switch (variant) {
      case "hero":
        return [
          {
            size: "w-80 h-80",
            position: "top-20 -right-40",
            gradient: "gradient-circle-blue",
            opacity: "opacity-60",
          },
          {
            size: "w-64 h-64",
            position: "-top-32 left-16",
            gradient: "gradient-circle-brown",
            opacity: "opacity-70",
          },
          {
            size: "w-48 h-48",
            position: "bottom-32 -left-24",
            gradient: "gradient-circle-red",
            opacity: "opacity-80",
          },
        ]
      case "services":
        return [
          {
            size: "w-56 h-56",
            position: "top-0 -right-28",
            gradient: "gradient-circle-red",
            opacity: "opacity-60",
          },
          {
            size: "w-40 h-40",
            position: "bottom-10 -left-20",
            gradient: "gradient-circle-blue",
            opacity: "opacity-70",
          },
        ]
      case "impact":
        return [
          {
            size: "w-72 h-72",
            position: "-top-36 -left-36",
            gradient: "gradient-circle-brown",
            opacity: "opacity-50",
          },
          {
            size: "w-44 h-44",
            position: "top-20 -right-22",
            gradient: "gradient-circle-red",
            opacity: "opacity-60",
          },
        ]
      case "contact":
        return [
          {
            size: "w-60 h-60",
            position: "-bottom-30 -right-30",
            gradient: "gradient-circle-blue",
            opacity: "opacity-60",
          },
          {
            size: "w-36 h-36",
            position: "top-10 -left-18",
            gradient: "gradient-circle-brown",
            opacity: "opacity-70",
          },
        ]
      default:
        return []
    }
  }

  const circles = getCircleConfig()

  return (
    <>
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`gradient-circle ${circle.gradient} ${circle.size} ${circle.position} ${circle.opacity}`}
        />
      ))}
    </>
  )
}
