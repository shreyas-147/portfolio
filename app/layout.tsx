import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { CursorGlow } from "@/components/cursor-glow";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreyas Kolte - Personal Portfolio",
  description: "Software Developer & Tech Enthusiast",
  icons: {
    icon: [
      {
        url: "/portfolio/favicon.ico",
        sizes: "any",
      },
      {
        url: "/portfolio/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/portfolio/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    apple: [
      {
        url: "/portfolio/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5722SQHC');`
          }}
        />
      </head>
      <body className={inter.className}>
      <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5722SQHC"
height="0" width="0" style={{display:"none",visibility:"hidden"}}/>
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <CursorGlow />
        </ThemeProvider>
      </body>
    </html>
  );
}