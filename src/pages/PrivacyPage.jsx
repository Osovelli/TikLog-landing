import { Layout } from "@/components/Layout"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function PrivacyPage() {
  return (
    <Layout className="min-h-screen bg-gray-50">

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Having followed your brand and admired your specific aspect of your business or achievements, I believe
              there is great potential for a joint marketing campaign that could mutually benefit both our companies and
              capture the attention of our target audiences.
            </p>

            <p className="mb-6">
              At Tiklog, we specialize in SaaS design and development. With our expertise, we have successfully executed
              impactful marketing campaigns that have garnered significant attention and generated impressive results
              for our clients.
            </p>

            <p className="mb-6">
              I envision a collaborative marketing campaign that combines the strengths and unique offerings of both our
              businesses. By leveraging our collective resources, creativity, and networks, we can create a compelling
              campaign that not only boosts brand awareness but also drives engagement and conversions for both of us.
            </p>

            {/* Additional Privacy Policy Sections */}
            <h2 className="text-2xl font-bold mt-12 mb-4">Information Collection</h2>
            <p className="mb-6">
              We collect information that you provide directly to us, information we obtain automatically when you use
              our services, and information from other sources such as third-party services and organizations.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Use of Information</h2>
            <p className="mb-6">
              We use the information we collect to provide, maintain, and improve our services, to develop new ones, and
              to protect our company and our users.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Information Sharing</h2>
            <p className="mb-6">
              We do not share your personal information with companies, organizations, or individuals outside of our
              company except in the following cases: with your consent, with domain administrators, for external
              processing, or for legal reasons.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Data Security</h2>
            <p className="mb-6">
              We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure, or
              destruction of information we hold.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Changes to This Policy</h2>
            <p className="mb-6">
              Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page and,
              if the changes are significant, we will provide a more prominent notice.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Questions about our Privacy Policy?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a href="mailto:privacy@tiklog.com" className="text-[#4154BE] hover:underline">
              privacy@tiklog.com
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

