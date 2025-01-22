import { AboutSection } from '@/components/_HomeComponents/AboutSection'
import { DownloadSection } from '@/components/_HomeComponents/DownloadSection'
import { FeaturesSection } from '@/components/_HomeComponents/FeatureSection'
import { HeroSection } from '@/components/_HomeComponents/HeroSection'
import { HowItWorksSection } from '@/components/_HomeComponents/HowItWorksSection'
import { QuickAnswersSection } from '@/components/_HomeComponents/QuickAnswersSection'
import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import SEO from '@/components/SEO'
import React from 'react'

export const HomePage = () => {
  return (
    <Layout>
      <SEO
        title="Home | Tiklog.ng"
        description="Welcome to Your Tiklog.ng. We provide amazing services and products."
        name="Tiklog.ng"
        type="website"
      />
      <HeroSection />
      <AboutSection />
      <DownloadSection />
      <FeaturesSection />
      <QuickAnswersSection />
      <HowItWorksSection />
    </Layout>
  )
}
