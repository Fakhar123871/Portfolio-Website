import Topbar from "@/components/Topbar";
 import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}