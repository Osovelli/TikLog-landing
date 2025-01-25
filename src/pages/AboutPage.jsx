import React from 'react';
import { Check } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { DownloadSection } from '@/components/_AboutComponent/DownloadSection';
import SEO from '@/components/SEO';

export const AboutPage = () => {
  const coreValues = [
    "Customer-Centric Excellence",
    "Reliable & Timely Delivery",
    "Innovation & Technology",
    "Trust & Transparency",
  ]

  return (
    <Layout>
      <SEO
        title="About | Tiklog.ng"
        description="Learn about Tiklog's amazing services and products."
        name="Tiklog.ng"
        type="website"
      />
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-24">
        <p className="text-indigo-600 font-medium mb-4">Nice to meet you</p>
        <div className='flex flex-col md:flex-row  justify-center'>
          <h1 className="text-5xl font-bold mb-8 max-w-2xl">
            Our mission is to <span className="text-indigo-600">revolutionize logistics in Africa</span>, making
            deliveries seamless and efficient.
          </h1>
            <p className="text-gray-600 max-w-2xl md:px-6">
              At Tiklog, we're committed to transforming the logistics landscape by leveraging technology to connect
              businesses, customers, and delivery partners. We believe in creating a platform that not only simplifies
              deliveries but also empowers local businesses and creates opportunities for riders while ensuring customer
              satisfaction remains at the heart of everything we do.
            </p>
        </div>
        </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Core Values</h2>
          <p className="text-gray-600 mb-8">
              Our values shape every decision we make and every service we provide. They're the foundation of our
              commitment to excellence in logistics and customer service.
            </p>
          <ul className="space-y-4">
            {coreValues.map((value, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-1">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-600">{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-gray-200 rounded-2xl w-full flex justify-center md:h-82 p-6 mx-auto'>
        <img src='/IPhone 13 Pro Max.png' className="object-cover w-72 " /> {/* Placeholder for image */}
        </div>
      </div>

      
        {/* Brief History Section */}
        <div>
          <p className="text-indigo-600 font-medium mb-4">Brief History</p>
          <h2 className="text-4xl font-bold mb-6">Our Journey to Transform Logistics</h2>
          <p className="text-gray-600 mb-12">From a simple idea to a comprehensive logistics solution</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-gray-600">
              <p>
                Founded in 2023, Tiklog emerged from a vision to address the growing challenges in Nigeria's logistics
                sector. We recognized the need for a more efficient, transparent, and technology-driven approach to
                deliveries.
              </p>
              <p>
                Our platform started with a simple mission: to connect local businesses with reliable delivery partners.
                As we grew, we expanded our services to include real-time tracking, instant pricing, and a robust
                network of verified riders, making deliveries more accessible and reliable than ever before.
              </p>
              <p>
                Today, Tiklog has evolved into a comprehensive logistics platform that serves thousands of customers,
                businesses, and delivery partners across Nigeria. Our commitment to innovation and customer satisfaction
                continues to drive our growth and development.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-gray-600">
                <p className="mb-8">
                  What sets Tiklog apart is our dedication to creating value for all stakeholders in the logistics
                  ecosystem. We've built a platform that not only solves delivery challenges but also creates
                  opportunities for economic growth and employment.
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Empowering local businesses with efficient delivery solutions</li>
                  <li>Creating flexible earning opportunities for delivery partners</li>
                  <li>Ensuring transparent and reliable service for all customers</li>
                </ul>
              </div>
              <p className="text-gray-600">
                As we look to the future, our goal remains clear: to continue innovating and expanding our services
                while maintaining our commitment to excellence in logistics and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

      {/*Download Section */}
      <DownloadSection />
    </div>
    </Layout>
  );
}


