import type { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Anand Singh - Full Stack Developer',
  description: 'Portfolio of Anand Singh - Full Stack Developer specializing in Spring Boot, React, and Next.js',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Spring Boot', 'Java', 'TypeScript'],
  authors: [{ name: 'Anand Singh' }],
  openGraph: {
    title: 'Anand Singh - Full Stack Developer',
    description: 'Full Stack Developer specializing in Spring Boot, React, and Next.js',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
