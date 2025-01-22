import { ActionCards } from '@/components/_ContactComponent/ActionCards'
import { ContactForm } from '@/components/_ContactComponent/ContactForm'
import { ContactHeader } from '@/components/_ContactComponent/ContactHeader'
import { DownloadSection } from '@/components/_ContactComponent/DownloadSection'
import { FaqSection } from '@/components/_ContactComponent/FaqSection'
import { Layout } from '@/components/Layout'
import SEO from '@/components/SEO'
import React from 'react'

export const ContactPage = () => {
  return (
    <Layout>
        <SEO
        title="Contact us | Tiklog.ng"
        description="Contact us for more information."
        name="Tiklog.ng"
        type="website"
        />
        <ContactHeader />
        <ActionCards />
        <ContactForm />
        <FaqSection />
        <DownloadSection />
    </Layout>
  )
}
