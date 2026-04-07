

import type { Metadata } from "next";

import "./globals.css";
import Provider from "@/Provider";
import StoreProvider from "@/redux/StoreProvider";




export const metadata: Metadata = {
  title: "SwiftPick | 10 minutes Fresh Food Delivery App",
  description: "10 minutes Fresh Food Delivery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-[200vh] bg-linear-to-b from-orange-100 to-white">
        <Provider>
          <StoreProvider>
            {children}
          </StoreProvider>
          
        </Provider>
      </body>
    </html>
  );
}
