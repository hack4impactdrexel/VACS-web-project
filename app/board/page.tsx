import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Board of Directors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Our Board of Directors</h1>
            <h2 className="text-xl text-gray-700 mb-12 text-center">
              The driving force behind our mission—leaders whose expertise and vision shape the future of equitable
              education.
            </h2>

            <div className="flex justify-center mb-8">
              <Image
                src="/placeholder.svg?height=200&width=400&query=three business people icons"
                alt="Board members"
                width={400}
                height={200}
              />
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
              <p className="text-gray-700 mb-6">
                The strength of Dream Schools, Inc. lies in the expertise, passion, and dedication of its Board of
                Directors. Our board comprises professionals from diverse backgrounds and professions, united by a
                shared commitment to educational equity and community development.
              </p>
              <p className="text-gray-700 mb-6">
                Representing fields such as education, finance, law, real estate, construction, public policy, and
                nonprofit leadership, our board brings various perspectives and skill sets to guide our strategic
                direction and ensure strong governance. Their collective experience allows Dream Schools to navigate
                complex challenges and remain innovative in our approach to supporting public charter schools.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <p className="text-gray-700 text-lg">
                Together, our board members serve as stewards of our mission—to provide affordable, sustainable, and
                high-quality learning environments for students—ensuring that every decision supports the long-term
                success of the schools and communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
