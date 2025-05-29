import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { BookOpenIcon, BuildingIcon, HomeIcon } from "lucide-react"
import Link from "next/link"
import VideoBackground from "@/components/video-background"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <a href="#main" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        {/* Section 1: Hero Section */}
        <section id="hero" className="hero">
          {/* Essential Decorative Circles */}
          <div className="decorative-circle circle-1"></div>
          <div className="decorative-circle circle-2"></div>
          <div className="decorative-circle circle-3"></div>

          {/* Background Video/Image */}
          <VideoBackground
            videoSrc="/school-construction.mp4"
            fallbackImageSrc="/images/hero-classroom.png"
            fallbackImageAlt="Children studying in a bright classroom setting"
            overlayOpacity={0.6}
          />

          {/* Hero Card - Lower Left Position */}
          <div className="hero-card">
            <h1 className="mb-4">
              <span className="title-building">Building </span>
              <span className="title-dreams">dreams</span>
              <span className="title-rest">, one school at a time</span>
            </h1>

            {/* Orange underline decoration */}
            <div className="orange-underline"></div>

            <p className="text-lg text-gray-dark mb-6 leading-relaxed font-medium">
              We partner with charter schools to create inspiring learning spaces. Since 2006, we've handled every
              step—from finding the perfect site to managing construction—so educators can focus on what matters most:
              <span className="highlight-orange"> their students</span>.
            </p>

            <p className="text-base text-gray-dark leading-relaxed mb-8 font-medium">
              <span className="highlight-orange">100% financing</span> •
              <span className="highlight-orange"> Full project management</span> •
              <span className="highlight-orange"> Lease-to-own options</span>
            </p>

            <a
              href="#services"
              className="btn-gradient text-white font-semibold text-base uppercase tracking-wide px-8 py-6 inline-block"
            >
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Section 2: Services Preview */}
        <section id="services" className="relative py-20 bg-white overflow-hidden section-spacing">
          <div className="services-bg-circle services-circle-1"></div>
          <div className="services-bg-circle services-circle-2"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#5B8BA3" }}>
                Our Services
              </h2>
              <div
                className="w-24 h-1 rounded-full mx-auto mb-8"
                style={{ background: "linear-gradient(45deg, #5B8BA3, #E67E45)" }}
              ></div>
              <p className="text-lg md:text-xl text-blue-primary max-w-3xl mx-auto">
                From concept to completion, we build the spaces where students succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white rounded-card shadow-card card-hover overflow-hidden border-t-4 border-blue-accent loading">
                <div className="p-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, #5B8BA3 0%, #7BA4BD 50%, #C8DAE6 100%)" }}
                  >
                    <BuildingIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-blue-header">Facility Design</h3>
                  <p className="text-base text-gray-dark">
                    We design and build charter school facilities from the ground up or renovate existing structures,
                    always tailored to your educational mission.
                  </p>
                </div>
                <div className="h-48 relative">
                  <Image
                    src="/images/city-hall.jpg"
                    alt="Architects reviewing school building plans"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>

              <Card className="bg-white rounded-card shadow-card card-hover overflow-hidden border-t-4 border-orange-primary loading">
                <div className="p-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
                  >
                    <BookOpenIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-blue-header">Educational Environment</h3>
                  <p className="text-base text-gray-dark">
                    We believe learning environments should reflect and support the needs of students and educators.
                    Every project is driven by purpose and equity.
                  </p>
                </div>
                <div className="h-48 relative">
                  <Image
                    src="/images/educational-environment.png"
                    alt="Modern school classroom with flexible seating"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>

              <Card className="bg-white rounded-card shadow-card card-hover overflow-hidden border-t-4 border-blue-accent loading">
                <div className="p-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "linear-gradient(135deg, #5B8BA3 0%, #7BA4BD 50%, #C8DAE6 100%)" }}
                  >
                    <HomeIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-blue-header">Real Estate Development</h3>
                  <p className="text-base text-gray-dark">
                    We provide comprehensive real estate development services, guiding charter schools through every
                    stage of the process.
                  </p>
                </div>
                <div className="h-48 relative">
                  <Image
                    src="/images/brightworld.jpg"
                    alt="Real estate development meeting with school officials"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 3: Full Services Detail */}
        <section
          id="services-detail"
          className="relative py-20 overflow-hidden section-spacing"
          style={{ background: "linear-gradient(135deg, #5B8BA3 0%, #7BA4BD 100%)" }}
        >
          <div
            className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-30"
            style={{ background: "linear-gradient(135deg, #E67E45, #F4A074)" }}
          ></div>
          <div
            className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-40"
            style={{ background: "linear-gradient(135deg, #8B5A3C, #D4A082)" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-card overflow-hidden shadow-card">
                <Image
                  src="/images/vacss.jpg"
                  alt="Students engaged in collaborative learning"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white rounded-card shadow-card p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-header">Our Services</h2>
                <div className="w-24 h-1 bg-orange-primary rounded-full mb-8"></div>

                <p className="text-xl mb-6 leading-relaxed font-semibold text-gray-dark">
                  From concept to completion, we build the spaces where{" "}
                  <span className="text-orange-primary">students succeed</span>.
                </p>

                <p className="text-lg mb-6 leading-relaxed font-medium text-gray-dark">
                  At Dream Schools, we offer full-spectrum facility solutions designed specifically for public charter
                  schools. Whether you're launching a new school or expanding an existing one, we handle the details—so
                  you can focus on <span className="text-orange-primary font-bold">students</span>.
                </p>

                <p className="text-xl font-bold mb-6 text-blue-header">
                  We don't just build <span className="text-orange-primary">schools</span>
                </p>
                <p className="text-lg mb-8 font-semibold text-gray-dark">
                  we build the foundation for <span className="text-orange-primary font-bold">student success</span> and{" "}
                  <span className="text-orange-primary font-bold">community revitalization</span>.
                </p>

                <Link
                  href="/about/mission"
                  className="btn-gradient text-white font-semibold text-base uppercase tracking-wide px-8 py-6 inline-block"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Dream Schools */}
        <section id="why-us" className="relative py-20 bg-gray-light overflow-hidden section-spacing">
          <div
            className="absolute top-20 -right-32 w-80 h-80 rounded-full opacity-60"
            style={{ background: "linear-gradient(135deg, #5B8BA3, #7BA4BD)" }}
          ></div>
          <div
            className="absolute bottom-20 -left-32 w-64 h-64 rounded-full opacity-70"
            style={{ background: "linear-gradient(135deg, #B85450, #E8A8A4)" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-header">Why Dream Schools?</h2>
              <div
                className="w-24 h-1 rounded-full mx-auto mb-8"
                style={{ background: "linear-gradient(45deg, #5B8BA3, #E67E45)" }}
              ></div>

              <p className="text-xl md:text-2xl text-blue-primary mb-8 leading-relaxed font-medium">
                Because every student deserves more than just a classroom—they deserve a place to
                <span className="highlight-orange"> dream, grow, and thrive</span>.
              </p>

              <p className="text-lg text-gray-dark leading-relaxed font-medium">
                Dream Schools turns visionary education into reality by developing
                <span className="highlight-orange"> affordable, sustainable</span>, and
                <span className="highlight-orange"> high-quality</span> facilities tailored to each charter school's
                mission. We handle the complexities—so school leaders can stay focused on what matters most: students.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Contact Form */}
        <section
          id="contact"
          className="relative py-20 overflow-hidden section-spacing"
          style={{ background: "linear-gradient(135deg, #5B8BA3 0%, #7BA4BD 100%)" }}
        >
          <div
            className="absolute top-10 -left-20 w-60 h-60 rounded-full opacity-50"
            style={{ background: "linear-gradient(135deg, #E67E45, #F4A074)" }}
          ></div>
          <div
            className="absolute bottom-10 -right-20 w-48 h-48 rounded-full opacity-60"
            style={{ background: "linear-gradient(135deg, #8B5A3C, #D4A082)" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Contact Us</h2>
                <div className="w-24 h-1 bg-orange-primary rounded-full mx-auto mb-8"></div>
                <p className="text-lg md:text-xl text-white opacity-90">
                  Ready to build your dream school? Get in touch with our team today.
                </p>
              </div>

              <Card className="rounded-card shadow-card bg-white">
                <div className="p-8 md:p-10">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        placeholder="First Name"
                        className="w-full rounded-xl border-2 border-gray-medium focus:border-blue-accent focus:ring-blue-accent placeholder:text-gray-body transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Last Name"
                        className="w-full rounded-xl border-2 border-gray-medium focus:border-blue-accent focus:ring-blue-accent placeholder:text-gray-body transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Organization"
                        className="w-full rounded-xl border-2 border-gray-medium focus:border-blue-accent focus:ring-blue-accent placeholder:text-gray-body transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number"
                        className="w-full rounded-xl border-2 border-gray-medium focus:border-blue-accent focus:ring-blue-accent placeholder:text-gray-body transition-all duration-300"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Input
                        placeholder="Email"
                        className="w-full rounded-xl border-2 border-gray-medium focus:border-blue-accent focus:ring-blue-accent placeholder:text-gray-body transition-all duration-300"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Textarea
                        placeholder="Message"
                        className="w-full min-h-[150px] rounded-xl border-2 border-gray-medium focus:border-blue-accent focus:ring-blue-accent placeholder:text-gray-body transition-all duration-300"
                      />
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                      <Button className="btn-gradient text-white font-semibold text-base uppercase tracking-wide px-8 py-6 w-full md:w-auto">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
