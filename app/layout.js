import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Héctor Penedo",
  description: "Mi portafolio virtual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="night">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
