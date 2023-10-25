import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({weight: "500", subsets: ['latin']} );

export const metadata: Metadata = {
  title: 'TypeScript, React, CSS tips and tricks',
  keywords: 'typescript, react, CSS tips, javascript, web development tricks, typescript tricks',
  description: 'TypeScript, React, CSS tips and tricks',
  authors: {url: 'http://floony.dev', name: 'Fred Lunjevich'}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="min-h-screen p-0">
        {children}
        </main>
      </body>
    </html>
  )
}
