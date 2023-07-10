import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { APP_DOMAIN_URL } from "@/lib/constants";

export const metadata = {
  title: "Route Editor",
  description:
    "Editor app is an application for editing and managing track route",
  metadataBase: APP_DOMAIN_URL,
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        {/* FIXME: error TypeError: (0 , import_react.useEffect) is not a function */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}