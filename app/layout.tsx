import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({weight: "500", subsets: ['latin']} );

export const metadata: Metadata = {
  title: 'Higher Mind - Science-Based Psychology',
  keywords: 'psychology, cognitive psychology, self-help nonsense, self-help book reviews, popular psych, popular psychology',
  description: 'Science-based psychology, cognitive therapy and reviews of popular self-help and psychology books and media.',
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
