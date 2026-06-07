import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Bias Scanner — Fairer Hiring Starts Here',
  description: 'AI-powered tool that scans interview questions and job descriptions for unconscious bias and suggests neutral alternatives to improve hiring diversity.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e377faaf-e77a-4f8e-bffe-74c3151e1326"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
