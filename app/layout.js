import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import {Josefin_Sans} from "next/font/google"
import "@/app/_styles/globals.css"
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets : ['latin'],
  display : "swap",
})

console.log(josefin);

export const metadata = {
  title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-blue-400 text-gray-50 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl  mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
