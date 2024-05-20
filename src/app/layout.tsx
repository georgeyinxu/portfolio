import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from '@/providers';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "George's Portfolio",
  description:
    "George's portfolio demonstrating his skills, projects and experience crafting websites and mobile apps pixel by pixel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 ${poppins.className}`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
