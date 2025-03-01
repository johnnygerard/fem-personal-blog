import { loadTheme } from "@/app/actions";
import AppRouterProvider from "@/component/app-router-provider";
import BackgroundPattern from "@/component/background-pattern";
import Footer from "@/component/footer";
import Header from "@/component/header";
import ThemeProvider from "@/component/theme-provider";
import VerticalLine from "@/component/vertical-line";
import { THEME } from "@/type/theme";
import { cn } from "@/util/cn";
import type { Metadata } from "next";
import { DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const firaCode = Fira_Code({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: "400",
});

const APP_NAME = "Personal blog";
const DESCRIPTION = `Frontend Mentor challenge: ${APP_NAME}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com/placeholder"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: DESCRIPTION,
  icons: [
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "/asset/image/favicon.png",
    },
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: APP_NAME,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = async ({ children }: Props) => {
  const theme = await loadTheme();

  return (
    <html
      className={cn(dmSans.variable, firaCode.variable)}
      data-theme={theme === THEME.SYSTEM ? null : theme}
      lang="en-US"
    >
      <body
        className={cn(
          "font-sans text-[1.125rem]/[1.5] font-normal not-italic antialiased",
          "-tracking-[0.0125rem] text-neutral-600 dark:text-neutral-400",
          "bg-neutral-100 dark:bg-neutral-900",
          "justify-center tb:flex dt:overflow-x-hidden",
        )}
      >
        <AppRouterProvider>
          <ThemeProvider initialTheme={theme}>
            <BackgroundPattern className="top-0 right-0 translate-x-1/2" />
            <BackgroundPattern className="top-56.75 left-0 -translate-x-1/2" />
            <div
              className={cn(
                "relative flex min-h-screen min-w-min flex-col tb:w-[40rem]",
                "py-200 tb:py-250 dt:pb-400",
              )}
            >
              <VerticalLine side="left" />
              <VerticalLine side="right" />
              <Header className="max-tb:px-200" />
              <div
                className={cn(
                  "mt-400 dt:mt-600",
                  "flex flex-1 flex-col px-7.75 tb:px-5",
                )}
              >
                <main className="relative flex-1">{children}</main>
                <Footer className="mt-400 dt:mt-600" />
              </div>
            </div>
          </ThemeProvider>
        </AppRouterProvider>
        <noscript>
          <div
            style={{
              position: "fixed",
              zIndex: 1000,
              top: 0,
              left: 0,
              right: 0,
              padding: "1rem",
              backgroundColor: "#fff4f4",
              color: "#d32f2f",
              borderBottom: "2px solid currentColor",
              textAlign: "center",
              lineHeight: 1.5,
            }}
            role="alert"
          >
            <p>
              JavaScript is required for this website to function properly.
              Please ensure that it is supported and enabled in your browser
              settings.
              <br />
              To learn more, check out{" "}
              <a
                style={{ textDecorationLine: "underline", color: "LinkText" }}
                href="https://enable-javascript.com/"
              >
                How to enable JavaScript in your browser
              </a>
              .
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
};

export default memo(RootLayout);
