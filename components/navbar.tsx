"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-lg py-2" : "py-4",
      )}
      style={{ background: "#5B8BA3" }}
    >
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white">Dream Schools</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-12">
          <Link
            href="/"
            className={cn(
              "text-white font-semibold tracking-wider text-sm uppercase px-4 py-2 rounded-full transition-all duration-300 hover:transform hover:scale-105",
              pathname === "/" ? "bg-white/30" : "hover:bg-white/20",
            )}
            scroll={true}
            onClick={() => window.scrollTo(0, 0)}
          >
            HOME
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "text-white font-semibold tracking-wider text-sm uppercase px-4 py-2 rounded-full transition-all duration-300 hover:transform hover:scale-105 flex items-center",
                pathname.includes("/about") ? "bg-white/30" : "hover:bg-white/20",
              )}
            >
              ABOUT US <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/about/mission" className="w-full" scroll={true} onClick={() => window.scrollTo(0, 0)}>
                  Our Mission
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/board" className="w-full" scroll={true} onClick={() => window.scrollTo(0, 0)}>
                  Board of Directors
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {["SERVICES", "PORTFOLIOS", "BIDS"].map((item) => {
            const href = `/${item.toLowerCase().replace(" ", "-")}`
            const isActive = pathname === href

            return (
              <Link
                key={item}
                href={href}
                className={cn(
                  "text-white font-semibold tracking-wider text-sm uppercase px-4 py-2 rounded-full transition-all duration-300 hover:transform hover:scale-105",
                  isActive ? "bg-white/30" : "hover:bg-white/20",
                )}
                scroll={true}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 shadow-lg" style={{ background: "#5B8BA3" }}>
          <nav className="flex flex-col space-y-2 px-4 py-4">
            <Link
              href="/"
              className="text-white font-semibold tracking-wider text-sm uppercase py-3 px-4 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => {
                setIsMenuOpen(false)
                window.scrollTo(0, 0)
              }}
              scroll={true}
            >
              HOME
            </Link>

            <div className="text-white font-semibold tracking-wider text-sm uppercase py-3 px-4">ABOUT US</div>
            <Link
              href="/about/mission"
              className="text-white font-semibold tracking-wider text-sm uppercase py-2 px-8 rounded-full hover:bg-white/20 transition-colors ml-4"
              onClick={() => {
                setIsMenuOpen(false)
                window.scrollTo(0, 0)
              }}
              scroll={true}
            >
              Our Mission
            </Link>
            <Link
              href="/about/board"
              className="text-white font-semibold tracking-wider text-sm uppercase py-2 px-8 rounded-full hover:bg-white/20 transition-colors ml-4"
              onClick={() => {
                setIsMenuOpen(false)
                window.scrollTo(0, 0)
              }}
              scroll={true}
            >
              Board of Directors
            </Link>

            {["SERVICES", "PORTFOLIOS", "BIDS"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-white font-semibold tracking-wider text-sm uppercase py-3 px-4 rounded-full hover:bg-white/20 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false)
                  window.scrollTo(0, 0)
                }}
                scroll={true}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
