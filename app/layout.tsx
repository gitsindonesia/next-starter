// Styles
import '@/app/_assets/styles/global.scss'

// React
import { ReactNode } from 'react'

// Next
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'

// Meta Data
export const metadata: Metadata = {
  title: 'GITS Next Starter',
  description: 'Welcome to GITS Next Starter'
}

// Poppins
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: ReactNode
}) => {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

export default RootLayout
