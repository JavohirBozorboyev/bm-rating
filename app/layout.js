import MouseMoveEffect from "@/components/Mouse_move_effect";
import "./globals.css";
import AppFooter from "@/components/nav/AppFooter";
import AppNavbar from "@/components/nav/AppNavbar";
import SWRProvider from "@/utils/SWRProvider";

export const metadata = {
  title: "Boborahim Mashrab Maktabi",
  description: `Boborahim Mashrab xususiy maktabi zamonaviy sharoitlar bilan
              ta'minlangan ixtisoslashtirilgan maktab`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        <MouseMoveEffect />
        <SWRProvider>
          <AppNavbar />
          {children}
          {/* <AppFooter /> */}
        </SWRProvider>
      </body>
    </html>
  );
}
