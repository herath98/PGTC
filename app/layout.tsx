

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const lato = localFont({
  src: [
    {
      path: './font/Lato/Lato-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/Lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Lato/lato.medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/Lato/lato.semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/Lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "PGTC",
  description: "Paradise Golf Tours Ceylon",
  icons: {
    icon: '/logo.png', // Use the logo as a favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased font-sans`}
      >
     <ToastContainer />
        <SiteHeader />
        {children}
        <Footer/>
      </body>
    </html>
  );
}