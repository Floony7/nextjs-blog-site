import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({weight: "500", subsets: ['latin']} );

export const metadata: Metadata = {
  title: 'TypeScript, React, CSS tips and tricks',
  keywords: 'typescript, react, CSS tips, javascript, web development tricks, typescript tricks',
  description: 'TypeScript, React, CSS tips and tricks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="min-h-screen">
        {children}
        </main>
      </body>
    </html>
  )
}
