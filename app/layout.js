import './globals.css'

export const metadata = {
  title: 'In Loving Memory: Declan W. Colianna',
  description: 'Information about Declan for friends and family.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
