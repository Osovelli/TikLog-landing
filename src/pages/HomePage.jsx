import { AboutSection } from '@/components/_HomeOVerviewComponents/AboutSection'
import { DownloadSection } from '@/components/_HomeOVerviewComponents/DownloadSection'
import { FeaturesSection } from '@/components/_HomeOVerviewComponents/FeatureSection'
import { HeroSection } from '@/components/_HomeOVerviewComponents/HeroSection'
import { HowItWorksSection } from '@/components/_HomeOVerviewComponents/HowItWorksSection'
import { QuickAnswersSection } from '@/components/_HomeOVerviewComponents/QuickAnswersSection'
import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import React from 'react'

export const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <DownloadSection />
      <FeaturesSection />
      <QuickAnswersSection />
      <HowItWorksSection />
    </Layout>
  )
}
