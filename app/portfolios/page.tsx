import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroHeader from "@/components/hero-header"

export default function PortfoliosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Portfolios Header */}
      {/* <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/02eqjpg.jpg"
            alt="School buildings"
            width={1600}
            height={400}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Explore our completed projects and see how we've helped charter schools across the country create inspiring
            learning environments.
          </p>
        </div>
      </section> */}
      <HeroHeader 
        src="/images/02eqjpg.jpg"
        alt="school buildings"
        headText="Our Portfolio"
        subtext="Explore our completed projects and see how we've helped charter schools across the country create inspiring
            learning environments."/>
      {/* Filtering Options
      <section className="py-8 bg-white border-b border-gray-medium">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-blue-primary text-white rounded-full font-medium transition-all duration-300">
              All Projects
            </button>
            <button className="px-6 py-2 bg-white text-blue-primary border-2 border-blue-primary rounded-full font-medium hover:bg-blue-primary hover:text-white transition-all duration-300">
              New Construction
            </button>
            <button className="px-6 py-2 bg-white text-blue-primary border-2 border-blue-primary rounded-full font-medium hover:bg-blue-primary hover:text-white transition-all duration-300">
              Renovations
            </button>
            <button className="px-6 py-2 bg-white text-blue-primary border-2 border-blue-primary rounded-full font-medium hover:bg-blue-primary hover:text-white transition-all duration-300">
              Adaptive Reuse
            </button>
          </div>
        </div>
      </section> */}

      {/* Portfolio Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="mb-16 loading">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Innovation Academy</h2>
                  <p className="text-gray-600 mb-4">Philadelphia, PA | Completed 2022</p>
                  <p className="text-gray-700 mb-4">
                    A 45,000 square foot renovation of a former office building into a state-of-the-art K-8 charter
                    school serving 450 students. The project included 18 classrooms, a science lab, art studio, music
                    room, gymnasium, and cafeteria.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Adaptive reuse of commercial building</li>
                    <li>LEED Silver certification</li>
                    <li>Completed on time and under budget</li>
                    <li>Flexible learning spaces for project-based curriculum</li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="/images/innovation-academy.png"
                    alt="Innovation Academy"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Image
                  src="/images/innovation-classroom.png"
                  alt="Classroom"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
                <Image
                  src="/images/innovation-lab.png"
                  alt="Science Lab"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
                <Image
                  src="/images/innovation-gym.png"
                  alt="Gymnasium"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="mb-16 loading">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="order-last md:order-first">
                  <Image
                    src="/images/horizon-school.png"
                    alt="Horizon Charter School"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Horizon Charter School</h2>
                  <p className="text-gray-600 mb-4">Atlanta, GA | Completed 2021</p>
                  <p className="text-gray-700 mb-4">
                    A 65,000 square foot new construction project for a high-performing high school serving 600
                    students. The building features specialized spaces for STEM education, performing arts, and
                    athletics.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Ground-up construction on urban site</li>
                    <li>Net-zero energy design</li>
                    <li>Community partnership spaces</li>
                    <li>Advanced technology infrastructure</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Image
                  src="/images/horizon-computer-lab.png"
                  alt="Computer Lab"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
                <Image
                  src="/images/horizon-auditorium.png"
                  alt="Auditorium"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
                <Image
                  src="/images/horizon-outdoor.png"
                  alt="Outdoor Space"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
              </div>
            </div>

            {/* Project 3 */}
            <div className="loading">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Riverside Elementary</h2>
                  <p className="text-gray-600 mb-4">Denver, CO | Completed 2020</p>
                  <p className="text-gray-700 mb-4">
                    A 35,000 square foot renovation and expansion of a historic school building, creating a modern
                    learning environment while preserving architectural heritage. The school serves 350 students in
                    grades K-5.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Historic preservation with modern additions</li>
                    <li>Outdoor learning environments</li>
                    <li>Community garden and kitchen</li>
                    <li>Flexible furniture and learning spaces</li>
                  </ul>
                </div>
                <div>
                  <Image
                    src="/images/riverside-elementary.png"
                    alt="Riverside Elementary"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Image
                  src="/images/riverside-classroom.png"
                  alt="Classroom"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
                <Image
                  src="/images/riverside-library.png"
                  alt="Library"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
                <Image
                  src="/images/riverside-garden.png"
                  alt="Garden"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-sm w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-card shadow-sm text-center">
              <div className="text-4xl font-bold text-orange-primary mb-2">25+</div>
              <div className="text-gray-700">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-card shadow-sm">
              <div className="text-4xl font-bold text-orange-primary mb-2">1M+</div>
              <div className="text-gray-700">Square Feet Developed</div>
            </div>
            <div className="bg-white p-6 rounded-card shadow-sm">
              <div className="text-4xl font-bold text-orange-primary mb-2">10K+</div>
              <div className="text-gray-700">Students Served</div>
            </div>
            <div className="bg-white p-6 rounded-card shadow-sm">
              <div className="text-4xl font-bold text-orange-primary mb-2">12</div>
              <div className="text-gray-700">States</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
