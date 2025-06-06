import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import HeroHeader from "@/components/hero-header"

export default function BidsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Bids Header */}
      
      <HeroHeader
        src="/images/Pictures/large-modern-office-building.jpg"
        alt=""
        headText="Current Bids & RFPs"
        subtext="Dream Schools is committed to fair and transparent procurement processes. Below you'll find our current
              open bids and requests for proposals."
      />
      

      {/* Current Bids */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Open Opportunities</h2>

            {/* Bid 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">General Contractor Services - Innovation Academy Phase 2</h3>
                <div className="text-blue-600 font-medium">Due: June 15, 2023</div>
              </div>
              <p className="text-gray-700 mb-4">
                Dream Schools is seeking qualified general contractors for Phase 2 of the Innovation Academy project in
                Philadelphia, PA. The project involves the renovation of 15,000 square feet of existing space to create
                additional classrooms, a media center, and administrative offices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="text-white font-medium rounded-card"
                  style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
                >
                  Download RFP
                </Button>
                <Button
                  variant="outline"
                  className="rounded-card border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white"
                >
                  Submit Proposal
                </Button>
              </div>
            </div>

            {/* Bid 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">Architectural Services - Horizon Charter School Expansion</h3>
                <div className="text-blue-600 font-medium">Due: July 1, 2023</div>
              </div>
              <p className="text-gray-700 mb-4">
                Dream Schools is seeking architectural services for the expansion of Horizon Charter School in Atlanta,
                GA. The project involves designing a 20,000 square foot addition to the existing facility to accommodate
                growing enrollment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="rounded-card text-white font-medium"
                  style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
                >
                  Download RFP
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white rounded-card"
                >
                  Submit Proposal
                </Button>
              </div>
            </div>

            {/* Bid 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">MEP Engineering Services - Multiple Projects</h3>
                <div className="text-blue-600 font-medium">Due: July 15, 2023</div>
              </div>
              <p className="text-gray-700 mb-4">
                Dream Schools is seeking qualified mechanical, electrical, and plumbing engineering firms to provide
                services for multiple upcoming projects across the Northeast and Mid-Atlantic regions. This is a
                multi-year contract opportunity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="rounded-card text-white font-medium"
                  style={{ background: "linear-gradient(45deg, #E67E45, #F4A574)" }}
                >
                  Download RFP
                </Button>
                <Button
                  variant="outline"
                  className="rounded-card border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white"
                >
                  Submit Proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Procurement Policy</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Dream Schools is committed to fair, open, and competitive procurement processes. We seek to work with
                diverse vendors and contractors who share our commitment to quality, sustainability, and community
                impact.
              </p>
              <p className="text-gray-700 mb-4">
                We encourage participation from small businesses, minority-owned businesses, women-owned businesses, and
                veteran-owned businesses. All qualified vendors will receive consideration without regard to race,
                color, religion, sex, national origin, disability, or protected veteran status.
              </p>
              <p className="text-gray-700">
                For questions about our procurement process or to be added to our vendor database, please contact
                procurement@dreamschoolsinc.org.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
