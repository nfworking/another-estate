import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Modern Real Estate',
  description: 'Find your dream home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  properties: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children} </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}