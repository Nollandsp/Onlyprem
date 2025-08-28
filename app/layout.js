import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={spaceGrotesk.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
