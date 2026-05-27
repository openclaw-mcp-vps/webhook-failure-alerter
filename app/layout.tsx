import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Webhook Failure Alerter — Monitor Webhook Deliveries",
  description: "Monitor webhook endpoints and get instant alerts when deliveries fail. Retry analytics, downtime tracking, and Slack/email notifications for SaaS developers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cc3a27b2-0cb9-46ed-89d4-58b0e614a43e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
