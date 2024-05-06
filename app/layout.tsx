import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope, Space_Grotesk } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';

const inter = Inter({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });
const manrope = Manrope({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });
// const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/cloudinary-core/2.3.0/cloudinary-core-shrinkwrap.min.js" async />
      </body>
    </html>
  );
}
