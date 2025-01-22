import { Layout } from "@/components/Layout"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function DeliveryPolicyPage() {
  return (
    <Layout className="min-h-screen bg-gray-50">
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Delivery & Return Policy</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-12 mb-4">Delivery Information</h2>
            <p className="mb-6">
              We strive to provide fast and reliable delivery services across our service areas. Our delivery times and
              costs vary depending on your location and the type of delivery service you choose.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">Standard Delivery</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Within city limits: 2-4 hours</li>
              <li>Suburban areas: 4-6 hours</li>
              <li>Inter-city: 1-2 business days</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">Express Delivery</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Within city limits: 1-2 hours</li>
              <li>Suburban areas: 2-3 hours</li>
              <li>Inter-city: Same day delivery (for orders placed before 10 AM)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Return Policy</h2>
            <p className="mb-6">
              At Tiklog, we are committed to ensuring customer satisfaction with our delivery services. If you
              experience any issues with your delivery, please follow our return process:
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">Return Process</h3>
            <ol className="list-decimal pl-6 mb-6">
              <li className="mb-4">Contact our customer service within 24 hours of delivery</li>
              <li className="mb-4">Provide your order number and details of the issue</li>
              <li className="mb-4">Our team will review your case and provide a resolution within 48 hours</li>
              <li className="mb-4">If approved, we will arrange for return pickup at no additional cost</li>
            </ol>

            <h2 className="text-2xl font-bold mt-12 mb-4">Refund Policy</h2>
            <p className="mb-6">
              Refunds will be processed within 5-7 business days after the return is confirmed by our team. The refund
              amount will include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Full delivery fee refund for failed deliveries</li>
              <li>Partial refund for delayed deliveries (as per our compensation policy)</li>
              <li>Additional compensation for damaged items (subject to investigation)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Exceptions</h2>
            <p className="mb-6">
              Please note that certain items and circumstances may not be eligible for returns or refunds:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Perishable goods</li>
              <li>Custom or personalized items</li>
              <li>Cases where the recipient was not available at the delivery address</li>
              <li>Force majeure circumstances</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Need Help with Your Delivery?</h3>
            <p className="text-gray-600 mb-4">
              Our customer service team is available 24/7 to assist you with any delivery-related queries:
            </p>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Email: </span>
                <a href="mailto:support@tiklog.com" className="text-[#4154BE] hover:underline">
                  support@tiklog.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone: </span>
                <a href="tel:+1234567890" className="text-[#4154BE] hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

