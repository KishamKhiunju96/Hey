// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Un-Uniform Grid",
  description: "Responsive masonry-style grid with hover effects",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
