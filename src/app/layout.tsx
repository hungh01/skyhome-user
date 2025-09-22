
import "./globals.css";
import { Header } from "@/components/layout/header";
import { ViewportProvider } from "@/providers/viewport-provider";
import { SkyHomeFont } from "@/config/font/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SkyHome",
    template: `%s - SkyHome`,
  },
  description: "SkyHome - Tiện ích cho tiêu chuẩn sống mới",
  icons: {
    icon: "/favicon.ico",
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
        className={`min-h-screen antialiased  ${SkyHomeFont.className}`}>
        <ViewportProvider>
          <Header />
          <div >
            {children}
          </div>
        </ViewportProvider>
      </body>
    </html>
  );
}
