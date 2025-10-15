import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-ui" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "La Brise Pâtisserie",
  description: "A pastel carnival-themed cake shop by TownesDev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} bg-background text-foreground`}>
        <ThemeProvider>
          <div className="min-h-dvh">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
