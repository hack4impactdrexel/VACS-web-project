"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer
      className="text-white pt-16 pb-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #5B8BA3 0%, #4A6B7C 50%, #3A5A6B 100%)",
      }}
    >
      {/* Background Gradient Circles */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-30"
        style={{ background: "linear-gradient(135deg, #E67E45, #F4A574)" }}
      ></div>
      <div
        className="absolute bottom-10 -left-16 w-32 h-32 rounded-full opacity-40"
        style={{ background: "linear-gradient(135deg, #8B5A3C, #B07D5F)" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold">Dream Schools</span>
            </div>
            <p className="text-blue-light mb-6 text-sm leading-relaxed font-medium">
              Building affordable, sustainable, and high-quality facilities for charter schools across the country.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-orange-primary transition-colors text-sm font-medium hover:transform hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-orange-primary transition-colors text-sm font-medium hover:transform hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-orange-primary transition-colors text-sm font-medium hover:transform hover:translate-x-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolios"
                  className="text-white hover:text-orange-primary transition-colors text-sm font-medium hover:transform hover:translate-x-1 inline-block"
                >
                  Portfolios
                </Link>
              </li>
              <li>
                <Link
                  href="/bids"
                  className="text-white hover:text-orange-primary transition-colors text-sm font-medium hover:transform hover:translate-x-1 inline-block"
                >
                  Bids
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-orange-primary flex-shrink-0 mt-1" />
                <span className="text-sm text-white font-medium">(717)-666-7099</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-orange-primary flex-shrink-0 mt-1" />
                <span className="text-sm text-white font-medium">info@dreamschoolsinc.org</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-primary flex-shrink-0 mt-1" />
                <span className="text-sm text-white font-medium">
                  1530 Westerly Pkwy
                  <br />
                  State College, PA 16801
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 uppercase tracking-wider text-white">Newsletter</h3>
            <p className="text-white mb-4 text-sm font-medium">Stay updated with our latest news and projects.</p>
            <div className="flex">
              <Input
                placeholder="Your email"
                className="rounded-l-full rounded-r-none border-blue-light bg-white text-gray-dark placeholder:text-gray-body focus:border-orange-primary focus:ring-orange-primary"
              />
              <Button
                className="rounded-r-full rounded-l-none font-semibold uppercase text-sm"
                style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-light pt-8 text-center text-blue-light text-sm">
          <p>&copy; {new Date().getFullYear()} Dream Schools, Inc. All rights reserved.</p>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-primary hover:bg-orange-secondary rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:transform hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </footer>
  )
}
