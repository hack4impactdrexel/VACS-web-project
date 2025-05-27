import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Target, BookOpenIcon, Users, HomeIcon, BuildingIcon } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* About Us Hero */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-header">About Us</h1>
            <div
              className="w-24 h-1 rounded-full mx-auto mb-8"
              style={{ background: "linear-gradient(45deg, #5B8BA3, #E67E45)" }}
            ></div>
            <p className="text-xl text-blue-primary max-w-3xl mx-auto">
              Building dreams, strengthening communities, and empowering student success since 2006.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Accordion Sections */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {/* Section 1: Our Mission & Story */}
              <AccordionItem value="mission" className="border-none">
                <AccordionTrigger className="bg-white rounded-t-xl px-8 py-6 text-2xl font-semibold text-blue-header hover:no-underline">
                  Our Mission
                </AccordionTrigger>
                <AccordionContent className="bg-white rounded-b-xl px-8 pt-2 pb-8 mt-0">
                  <div className="space-y-12">
                    {/* Mission Statement */}
                    <div>
                      <Card
                        className="rounded-card shadow-card p-8 md:p-12 text-center mb-8"
                        style={{ background: "linear-gradient(135deg, #5B8BA3 0%, #7BA4BD 100%)" }}
                      >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                          <Target className="w-8 h-8 text-blue-header" />
                        </div>
                        <p className="text-lg md:text-xl text-white leading-relaxed">
                          Dream Schools exists to support public charter schools in meeting their facility needs by
                          providing access to affordable, sustainable, and high-quality learning environments that
                          empower student success.
                        </p>
                      </Card>

                      <div className="space-y-6 text-lg text-gray-dark leading-relaxed">
                        <p>
                          We believe every student deserves a safe, welcoming, and purpose-built space to learn—and that
                          every educator deserves the freedom to focus on teaching, not construction management. That's
                          why we partner with mission-driven school leaders, funders, and community stakeholders to
                          create facilities that are more than just buildings.
                        </p>

                        <p>
                          They're launchpads for academic excellence and community renewal. Dream Schools offers
                          customized real estate development, project management, and lease-to-purchase solutions for
                          charter schools nationwide. We take on the early financial risk, manage complex development
                          processes, and provide 100% financing so that schools can stay focused on students and not
                          stress about square footage.
                        </p>
                      </div>
                    </div>

                    {/* Our Story */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-6 text-blue-header">Our Story</h3>
                      <Card
                        className="rounded-card shadow-card p-8 md:p-12"
                        style={{ background: "linear-gradient(135deg, #5B8BA3 0%, #7BA4BD 100%)" }}
                      >
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                          <BookOpenIcon className="w-8 h-8 text-blue-header" />
                        </div>
                        <div className="space-y-6 text-lg text-white leading-relaxed">
                          <p>
                            Founded in 2006, Dream Schools, Inc. is a 501(c)(3) nonprofit organization created to solve
                            a critical challenge in public education—helping charter schools access high-quality,
                            affordable facilities.
                          </p>
                          <p>
                            From day one, we understood that while visionary educators can spark transformational
                            learning, inadequate facilities often hinder that mission. Classrooms in church basements,
                            converted storefronts, or overcrowded rentals are far too familiar. That's where Dream
                            Schools steps in.
                          </p>
                          <p>
                            We create environments where communities grow, educators thrive, and students are empowered
                            to dream bigger. Every project we undertake is a testament to our belief that excellent
                            facilities help create great opportunities and serve as the foundation for student success
                            and community revitalization.
                          </p>
                        </div>
                      </Card>
                    </div>

                    {/* What We Do */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-6 text-blue-header">What We Do</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-white rounded-card shadow-card card-hover p-8">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                            style={{ background: "linear-gradient(135deg, #5B8BA3 0%, #7BA4BD 100%)" }}
                          >
                            <HomeIcon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-medium mb-4 text-blue-header">Real Estate Development</h3>
                          <p className="text-base text-gray-dark leading-relaxed">
                            From concept to completion, we manage every phase of facility development, including site
                            selection, zoning, design, construction, and occupancy.
                          </p>
                        </Card>

                        <Card className="bg-white rounded-card shadow-card card-hover p-8">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                            style={{ background: "linear-gradient(135deg, #5B8BA3 0%, #7BA4BD 100%)" }}
                          >
                            <BuildingIcon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-medium mb-4 text-blue-header">Renovations & Financing</h3>
                          <p className="text-base text-gray-dark leading-relaxed">
                            We specialize in reimagining spaces and offer 100% financing for charter school facility
                            projects, providing flexible lease-to-own pathways aligned with your growth.
                          </p>
                        </Card>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-semibold text-blue-header mb-4">
                        At Dream Schools, we're not just building schools.
                      </div>
                      <div className="text-xl text-orange-primary font-medium mb-2">We're building equity.</div>
                      <div className="text-xl text-orange-primary font-medium mb-2">We're building opportunity.</div>
                      <div className="text-xl text-orange-primary font-medium">We're building dreams.</div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Section 2: Our Board of Directors */}
              <AccordionItem value="board" className="border-none">
                <AccordionTrigger className="bg-white rounded-t-xl px-8 py-6 text-2xl font-semibold text-blue-header hover:no-underline">
                  Our Board of Directors
                </AccordionTrigger>
                <AccordionContent className="bg-white rounded-b-xl px-8 pt-2 pb-8 mt-0">
                  <div className="space-y-12">
                    <div className="flex justify-center mb-8">
                      <Image
                        src="/images/board-members.png"
                        alt="Board members in a meeting"
                        width={600}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>

                    <Card className="bg-white rounded-card shadow-card p-8 md:p-12 mb-8">
                      <div className="w-16 h-16 bg-blue-light rounded-full flex items-center justify-center mb-6">
                        <Users className="w-8 h-8 text-blue-header" />
                      </div>
                      <div className="space-y-6 text-lg text-gray-dark leading-relaxed">
                        <p>
                          The strength of Dream Schools, Inc. lies in the expertise, passion, and dedication of its
                          Board of Directors. Our board comprises professionals from diverse backgrounds and
                          professions, united by a shared commitment to educational equity and community development.
                        </p>
                        <p>
                          Representing fields such as education, finance, law, real estate, construction, public policy,
                          and nonprofit leadership, our board brings various perspectives and skill sets to guide our
                          strategic direction and ensure strong governance. Their collective experience allows Dream
                          Schools to navigate complex challenges and remain innovative in our approach to supporting
                          public charter schools.
                        </p>
                      </div>
                    </Card>

                    <div className="text-center">
                      <p className="text-xl text-blue-primary leading-relaxed">
                        Together, our board members serve as stewards of our mission—to provide affordable, sustainable,
                        and high-quality learning environments for students—ensuring that every decision supports the
                        long-term success of the schools and communities we serve.
                      </p>
                    </div>

                    {/* Leadership Profiles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                        <div className="flex flex-col items-center">
                          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                            <Image
                              src="/images/ceo-jonathan.png"
                              alt="Jonathan Wolf"
                              width={200}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="text-xl font-bold mb-1">Jonathan Wolf</h4>
                          <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
                          <p className="text-gray-700 text-sm text-center">
                            Over 20 years of experience in real estate development, finance, and management. MBA from
                            Harvard Business School.
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg shadow-sm p-6">
                        <div className="flex flex-col items-center">
                          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                            <Image
                              src="/images/board-chair-david.png"
                              alt="David Uminsky"
                              width={200}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="text-xl font-bold mb-1">David Uminsky</h4>
                          <p className="text-blue-600 font-medium mb-4">Board Chair</p>
                          <p className="text-gray-700 text-sm text-center">
                            Professor of Mathematics and Data Science at the University of San Francisco. Ph.D. from UC
                            Berkeley.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Our Impact */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-6 text-center text-blue-header">Our Impact</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                          <div className="text-gray-700">Square feet of learning space</div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                          <div className="text-gray-700">Students served</div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">100s</div>
                          <div className="text-gray-700">Jobs created</div>
                        </div>
                      </div>
                    </div>

                    {/* Support Our Mission */}
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                      <p className="text-gray-700 mb-6">
                        Dream Schools is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the
                        extent allowed by law.
                      </p>
                      <button
                        className="px-8 py-3 text-white font-medium rounded-md"
                        style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
                      >
                        Donate Today
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
