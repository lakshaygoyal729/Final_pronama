'use client'

import * as React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { BackToTop } from '@/components/back-to-top'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster />
      <WhatsAppButton />
      <BackToTop />
    </ThemeProvider>
  )
}
