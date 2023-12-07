import "./globals.css";
import { openSans } from "./ui/font";

export const metadata = {
  title: "Coffee Pinpoint",
  description: "Find where to drink a good coffee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
