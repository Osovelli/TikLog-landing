import { Layout } from '@/components/Layout'
import React from 'react'

export const TermsPage = () => {
  return (
    <Layout>
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-5xl font-semibold text-center mb-2">Terms Page</h1>
            <p className="text-gray-600 text-center mb-12">Last Updated on May 15, 2024</p>

            <section className="space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <div className="space-y-4 text-gray-600">
                        <p>
                        By accessing and placing an order with Simpliy, you confirm that you are in agreement with and bound
                        by the terms and conditions contained in the Terms Of Use outlined below. These terms apply to the
                        entire website and any email or other type of communication between you and Simpliy.
                        </p>
                        <p>
                        Under no circumstances shall Simpliy team be liable for any direct, indirect, special, incidental or
                        consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or
                        the inability to use, the materials on this site, even if Simpliy team or an authorized representative has
                        been advised of the possibility of such damages.
                        </p>
                        <p>
                        If your use of materials from this site results in the need for servicing, repair or correction of
                        equipment or data, you assume any costs thereof. Simpliy will not be responsible for any outcome
                        that may occur during the course of usage of our resources. We reserve the rights to change prices
                        and revise the resources usage policy in any moment.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Products</h2>
                    <p className="text-gray-600">
                        All products are 100% digital and delivered through email & Lemon Squeezy dashboard.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">What you cannot do</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                        <li>You do not have the rights to redistribute, resell, lease, license, sub-license, transfer or offer the file downloaded.</li>
                        <li>You are not allowed to claim credit or ownership for any of the assets found on our website.</li>
                    </ol>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Security & Payments</h2>
                    <p className="text-gray-600">
                        All payments are processed securely through lemonsqueezy.com. Simpliy does not directly process
                        payments through the website. Feel free to contact us about our security policies.
                    </p>
                </div>

                <div>
                <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
                <div className="space-y-4 text-gray-600">
                    <p>
                    We have access to the email address of our users who are downloading or purchasing from us. This is
                    important to give future support to our customers.
                    </p>
                    <p>
                    Also, when a user is purchasing from us, that user will be automatically signed up on our email
                    subscriber list for future news, updates and promotions. If any user wants, he/she can unsubscribe
                    anytime using the unsubscribe link provided on the email.
                    </p>
                    <p>To know more about data collection, please read our Privacy Policy.</p>
                </div>
                </div>

                <div>
                <h2 className="text-2xl font-semibold mb-4">Support</h2>
                <p className="text-gray-600">
                    We, at Simpliy stand by our products and believe that they are the best possible solutions we deliver.
                    However, if you come across any issues or incompatibilities, you can open up a ticket at our support
                    center and allow us to help you resolve your issue. Dedicated support is promised to only those who
                    possess an active license. Free versions are not promised for instant support.
                </p>
                </div>

                <div>
                <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                <p className="text-gray-600">
                    We've included many of these terms to legally protect ourselves, but if you have an issue, always feel
                    free to email us at support@finestdevs.com and we'll do our best to resolve it in a fair and timely
                    fashion.
                </p>
                </div>
            </section>
        </div>
    </Layout>
  )
}
