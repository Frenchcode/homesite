import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Ephraim Bokuma",
  description: "Full Stack Developper",
  applicationName: "Ephraim Bokuma"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
