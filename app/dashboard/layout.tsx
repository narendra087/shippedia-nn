import '../globals.scss'
import { Inter } from 'next/font/google'
import PageHeader from '../components/layout/PageHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard | Shippedia',
  description: 'Shippedia-NN Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageHeader />
        {children}
      </body>
    </html>
  )
}
