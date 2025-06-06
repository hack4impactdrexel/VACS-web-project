import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Search, Users, PenToolIcon as Tool, DollarSign } from "lucide-react"
import HeroHeader from "@/components/hero-header"
import GradientLine from "@/components/gradient-line"
export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroHeader 
              src="images/Pictures/teacher-students-walking-around-school-campus-stock-photo.jpg"
              alt="school buildings"
              headText="What We Do"
              subtext="Explore our completed projects and see how we've helped charter schools across the country create inspiring
                  learning environments."/>
      {/* Services Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* What We Do */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-blue-header">What We Do</h1>
            </div>

            {/* Real Estate Development */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Real Estate Development</h2>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C" }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Search className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed">
                    From concept to completion, we manage every phase of facility development, including site selection,
                    zoning, design, construction, and occupancy. Whether it's ground-up build or an adaptive reuse,
                    every aspect of facility is tailored to the school's educational model and long-term vision.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Project Management</h2>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C" }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed">
                    As trusted project managers and owner's representatives, we ensure your facility vision is
                    faithfully delivered on time and within budget. We approach facility development to eliminate all
                    distractions and roadblocks so your leadership team can focus on education.
                  </p>
                </div>
              </div>
            </div>

            {/* Renovations & Upgrades */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Renovations & Upgrades</h2>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C" }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Tool className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed">
                    We specialize in reimagining spaces—turning warehouses, big-box stores, and other non-traditional
                    spaces into vibrant charter schools. Our team has extensive experience solving complex facility
                    challenges, transforming outdated facilities into places where students and educators thrive.
                  </p>
                </div>
              </div>
            </div>

            {/* Lease-to-Purchase Financing */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Lease-to-Purchase Financing</h2>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C" }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed">
                    Dream Schools offers 100% financing for charter school facility projects, providing flexible
                    lease-to-own pathways aligned with your growth. We take on the early-stage financial risk and allow
                    you to build equity over time, creating a clear path to the day your school can own its facility.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="text-center py-12">
              <p className="text-xl text-gray-700 mb-6">
                At Dream Schools, we believe that excellent facilities help create great opportunities.
              </p>
              <p className="text-2xl font-bold text-orange-primary">
                We don't just build schools—we build the foundation for student success
                <br />
                and community revitalization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
