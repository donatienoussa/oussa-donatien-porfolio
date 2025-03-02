import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header";
import "./globals.css";


export const metadata: Metadata = {
  title: "OUSSA Donatien",
  description: "Mobile Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`hide-scrollbar antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>  
      </body>
    </html>
  );
}
