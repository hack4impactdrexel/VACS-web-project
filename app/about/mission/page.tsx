import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GradientLine from "@/components/gradient-line"
import { Target, FileText, TrendingUp } from "lucide-react"
import HeroHeader from "@/components/hero-header"

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroHeader 
              src="/images/Pictures/schoolgirl-with-notebook-her-hands-sunset-background-school-goes-school.jpg"
              alt="school buildings"
              headText="Our Mission"
              subtext="Explore our completed projects and see how we've helped charter schools across the country create inspiring
                  learning environments."/>
      {/* Mission Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Mission Statement */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Mission Statement</h2>
              {/* </GradientLine> */}
              <p className="text-gray-600 mb-4">One school at a time~</p>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C"}}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed">
                    Dream Schools exists to support public charter schools in meeting their facility needs by providing
                    access to affordable, sustainable, and high-quality learning environments that empower student
                    success.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">Building schools, strengthening communities~</p>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C" }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed mb-4">
                    Founded in 2006, Dream Schools, Inc. is a 501(c)(3) nonprofit organization created to solve a
                    critical challenge in public education—helping charter schools access high-quality, affordable
                    facilities.
                  </p>
                  <p className="text-white text-lg leading-relaxed">
                    From day one, we understood that while visionary educators can spark transformational learning,
                    inadequate facilities often hinder that mission. Classrooms in church basements, converted
                    storefronts, or overcrowded rentals are far too familiar. That's where Dream Schools steps in.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Dream Schools supports public charter schools in meeting their facility needs by providing access to
                affordable, sustainable, high-quality learning environments that empower student success.
              </p>
              <GradientLine c1="#5B8BA3" c2="#E67E45" />
              
              <div className="rounded-card p-8 flex gap-6" style={{ background: "#4A6B7C" }}>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed mb-4">
                    We believe every student deserves a safe, welcoming, and purpose-built space to learn—and that every
                    educator deserves the freedom to focus on teaching, not construction management. That's why we
                    partner with mission-driven school leaders, funders, and community stakeholders to create facilities
                    that are more than just buildings.
                  </p>
                  <p className="text-white text-lg leading-relaxed mb-4">
                    They're launchpads for academic excellence and community renewal. Dream Schools offers customized
                    real estate development, project management, and lease-to-purchase solutions for charter schools
                    nationwide. We take on the early financial risk, manage complex development processes, and provide
                    100% financing so that schools can stay focused on students and not stress about square footage.
                  </p>
                  <p className="text-white text-lg leading-relaxed">
                    Over the years, we've helped countless schools grow from dream to reality—turning vacant lots and
                    empty buildings into vibrant learning centers. And while we're proud of the physical spaces we've
                    created, we're even prouder of the opportunities and futures we've helped build for students and
                    communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="text-center py-12">
              <p className="text-xl text-gray-700 mb-2">At Dream Schools, we're not just building schools.</p>
              <p className="text-xl text-gray-700 mb-2">We're building equity.</p>
              <p className="text-xl text-gray-700 mb-2">We're building opportunity.</p>
              <p className="text-2xl font-bold text-orange-primary">We're building dreams.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
