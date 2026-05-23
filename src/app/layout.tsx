import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { getThemeCssBlock } from "@/color/theme";
import { getFontCssBlock } from "@/font/config";
import { appConfig } from "@/data/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // khớp fonts.sans.variable trong src/font/config.ts
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains", // khớp fonts.mono.variable trong src/font/config.ts
  display: "swap",
});

export const metadata: Metadata = {
  title: appConfig.title,
  description:
    "CV kỹ thuật — Software Engineer, DevOps, Cloud, AI/ML. Nội dung cấu hình trong src/data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `${getThemeCssBlock()}\n${getFontCssBlock()}`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
