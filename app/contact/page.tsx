import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Contact Information */}
      <section className="py-24 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Phone</h2>
                <p className="text-gray-700">(717)-666-7099</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Email</h2>
                <p className="text-gray-700">info@dreamschoolsinc.org</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm md:col-span-2">
                <h2 className="text-xl font-bold mb-4">Address</h2>
                <p className="text-gray-700">
                  1530 Westerly Pkwy.
                  <br />
                  State College, PA 16801
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
