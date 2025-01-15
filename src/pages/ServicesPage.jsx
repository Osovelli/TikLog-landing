import React from 'react';
import { Check, CreditCard, DollarSign, MapPin } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const ServicesPage = () => {
  return (
    <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Services</h1>
        <p className="text-gray-600">Your All-In-One Delivery Solution</p>
      </div>

      {/* Customers Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="space-y-6">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Customers</h2>
          <p className="text-xl font-semibold text-gray-900">Seamless Deliveries at Your Fingertips</p>
          <p className="text-gray-600">Enjoy fast, reliable deliveries with real-time tracking and easy management for a hassle-free experience.</p>
          <ul className="space-y-4">
            {[
              'Real-time tracking for peace of mind.',
              'Simple and intuitive interface.',
              'Reliable service for all your delivery needs.'
            ].map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img 
            src="/customers services.png"
            alt="Customer Dashboard"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>

      {/* Vendors Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="order-2 lg:order-1">
          <img 
            src="/vendor services.png"
            alt="Vendor Dashboard"
            className="rounded-lg w-full"
          />
        </div>
        <div className="space-y-6 order-1 lg:order-2">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3h18v18H3V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Vendors</h2>
          <p className="text-xl font-semibold text-gray-900">Efficient Solutions for Your Business</p>
          <p className="text-gray-600">Streamline orders and deliveries, track transactions, and grow your business effortlessly with Tiklog.</p>
          <ul className="space-y-4">
            {[
              'Bulk delivery management for large shipments.',
              'Real-time insights and reporting for better decision-making.',
              'Seamless integration with your sales channels.'
            ].map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Riders Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="space-y-6">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Riders</h2>
          <p className="text-xl font-semibold text-gray-900">Join a Network of Trusted Riders</p>
          <p className="text-gray-600">Manage deliveries, track progress, and earn flexibly while providing top-notch service.</p>
          <ul className="space-y-4">
            {[
              'Flexible working hours to suit your schedule.',
              'Competitive earnings with each delivery.',
              'Real-time tracking for efficient and timely deliveries.'
            ].map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img 
            src="/rider services.png"
            alt="Rider App"
            className="rounded-lg  w-full"
          />
        </div>
      </div>

      {/* Discover Section */}
      <div className="text-center mb-16 pt-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover the Power of Tiklog</h2>
        <p className="text-gray-600 mb-16">Open a full-featured account in with virtual cards in less than 5 minutes.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Real-Time Tracking */}

          {/* <div className="relative bg-gray-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-indigo-900 text-white rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Tracking</h3>
            <p className="text-gray-600">Know exactly where your delivery is, from pick-up to drop-off. With our real-time tracking, you can monitor progress and stay updated at every step.</p>
            <img 
              src="/Iphone 14.2.png"
              alt="Tracking Interface"
              className="absolute mt-3 -top-3 left-6 w-82 rounded-lg bg-none"
            />
          </div> */}

          {/* Fast & Reliable Deliveries */}

          {/* <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-indigo-900 text-white rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15L17 21H7L12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast & Reliable Deliveries</h3>
            <p className="text-gray-600">Whether you're sending a small package or bulk goods, Tiklog ensures your deliveries are handled with speed and care, reaching their destination safely every time.</p>
            <img 
              src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000"
              alt="Delivery Person"
              className="mt-6 rounded-lg shadow-lg w-full"
            />
          </div> */}
        </div>

        {/* Additional Features */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-2">
          {/* Customer & Merchant Portal */}

          {/* <div className="bg-gray-50 p-8 rounded-xl col-span-3">
            <div className="w-12 h-12 bg-indigo-900 text-white rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Customer & Merchant Portal</h3>
            <p className="text-gray-600">Gain full control over your orders through our easy-to-use portal. Track, manage, and review your deliveries, whether you're a customer or a merchant.</p>
          </div>
 */}
          {/* Flexible Payment Options */}
          
          {/* <div className="bg-gray-50 p-8 rounded-xl col-span-2">
            <div className="w-12 h-12 bg-indigo-900 text-white rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Payment Options</h3>
            <p className="text-gray-600">Choose from a range of payment options that suit your needs—credit cards, mobile wallets, or online transfers—all secure and fast.</p>
          </div> */}

          {/* Cost-Effective Solutions */}

          {/* <div className="bg-gray-50 p-8 rounded-xl col-span-1">
            <div className="w-12 h-12 bg-indigo-900 text-white rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cost-Effective Delivery Solutions</h3>
            <p className="text-gray-600">Get transparent and competitive pricing on all deliveries. Our flexible pricing structure helps you save money without compromising on service quality.</p>
          </div> */}
        </div>

        {/* Download Section */}

        {/* <div className="bg-indigo-900 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Signup or Download the app today!</h2>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10" />
          </div>
        </div> */}

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {/* Real-Time Tracking */}
          <Card className="border rounded-2xl overflow-hidden">
            <CardContent className="p-6 ">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600 mb-6">
                Know exactly where your delivery is, from pick-up to drop-off. With our real-time tracking, you can monitor progress and stay updated at every step.
              </p>
              <div className="rounded-xl overflow-hidden p-0 m-0">
                <img
                  src="/Iphone 14 pic.png"
                  alt="Real-time tracking interface"
                  className=" w-full md:h-80  object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Fast & Reliable Deliveries */}
          <Card className="border rounded-2xl overflow-hidden bg-[#F6F7F9]">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast & Reliable Deliveries</h3>
              <p className="text-gray-600 mb-6">
                Whether you're sending a small package or bulk goods, Tiklog ensures your deliveries are handled with speed and care, reaching their destination safely every time.
              </p>
              <div className="rounded-xl">
                <img
                  src="/delivery man.png"
                  alt="Delivery person with package"
                  className="md:w-[482px] h-auto object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Seamless Customer & Merchant Portal */}
          <Card className="border rounded-2xl overflow-hidden md:col-span-2 bg-[#F6F7F9]">
            <CardContent className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Seamless Customer & Merchant Portal</h3>
              <p className="text-gray-600 mb-6">
                Gain full control over your orders through our easy-to-use portal. Track, manage, and review your deliveries, whether you're a customer or a merchant.
              </p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/screen mockup.png"
                  alt="Merchant portal interface"
                  className="w-[482px] h-auto"
                />
              </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mt-4 space-y-3">
            {/* Flexible Payment Options */}
          <Card className="border rounded-2xl overflow-hidden max-w-md bg-[#F6F7F9]">
            <CardContent className="px-6 pt-6 pb-0">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Flexible Payment Options</h3>
              <p className="text-gray-600 mb-6">
                Choose from a range of payment options that suit your needs—credit cards, mobile wallets, or online transfers—all secure and fast.
              </p>
              <div className="rounded-xl -mx-6">
                <img src="/colors.png"/>
              </div>
            </CardContent>
          </Card>

          {/* Cost-Effective Delivery Solutions */}
          <Card className="border rounded-2xl bg-[#F6F7F9]">
            <CardContent className="p-6 flex flex-col md:flex-row gap-4">
            <div className="">
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cost-Effective Delivery Solutions</h3>
              <p className="text-gray-600 mb-6">
                Get transparent and competitive pricing on all deliveries. Our flexible pricing structure helps you save money without compromising on service quality.
              </p>
            </div>
            </CardContent>
          </Card>

          {/* Download CTA */}
          <div className="border-0 rounded-2xl col-span-2 md:col-span-1 overflow-hidden bg-[#1e1b4b] text-white">
            <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                <h3 className="text-2xl font-bold mb-4">
                    Signup or Download the app today!
                </h3>
                <Button variant="secondary" className="mb-6">
                    Get Started
                </Button>
                <div className="flex flex-wrap justify-center gap-4">
                    <img
                        src="/App store badge.png"
                        alt="Download on the App Store"
                        className="h-[40px]"
                    />
                    <img
                        src="/Google play badge.png"
                        alt="Get it on Google Play"
                        className="h-[40px]"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}