import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VAPIX Echo ACAP',
  description: 'ACAP app of VAPIX testing tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
