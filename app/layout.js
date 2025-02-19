import { Montserrat } from "next/font/google";
import "./globals.css";
import MouseMoveEffect from "@/components/Mouse_move_effect";
import AppFooter from "@/components/nav/AppFooter";
import AppNavbar from "@/components/nav/AppNavbar";
import CircularText from "@/components/bits/CircularText";

export const metadata = {
  title: "Bm Rating",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {/* <MouseMoveEffect /> */}

        <AppNavbar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
