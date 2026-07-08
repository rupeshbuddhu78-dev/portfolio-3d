import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import './globals.css';

const title = 'Rupesh Kumar | MERN Full Stack Developer';
const description =
  'Ultra-premium portfolio of Rupesh Kumar - Enterprise MERN Full Stack Developer specializing in scalable web applications, college ERPs, food delivery platforms, and AI integration.';
const url = 'https://rupesh-portfolio.vercel.app';
const ogImage = 'https://rupesh-portfolio.vercel.app/og-image.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'MERN Stack',
    'Full Stack Developer',
    'React',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Web Development',
    'Enterprise Applications',
    'College ERP',
    'Food Delivery',
    'Rupesh Kumar',
  ],
  authors: [{ name: 'Rupesh Kumar' }],
  creator: 'Rupesh Kumar',
  publisher: 'Rupesh Kumar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    siteName: title,
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0e27',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
