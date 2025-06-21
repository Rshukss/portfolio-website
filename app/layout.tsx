import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rahul Shukla | Research Portfolio',
  description: "Rahul Shukla's research, publications, and projects in AI and healthcare.",
  generator: 'v0.dev',
  // No favicon specified, so no "N" icon will appear
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* No <link rel="icon" ... /> tag here */}
      <body>{children}</body>
    </html>
  )
}