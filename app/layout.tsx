import { NavSidebar } from "@/components/nav-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { ConvexClientProvider } from "./ConvexClientProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "me.",
    template: "me. — %s",
  },
  description: "A personal dashboard for tracking my activities, goals, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const sidebarCookie = cookieStore.get("sidebar_state")?.value;
  const defaultSidebarOpen = sidebarCookie ? sidebarCookie === "true" : true;

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-sidebar">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <SidebarProvider className="p-2" defaultOpen={defaultSidebarOpen}>
              <NavSidebar />
              <div className="content-bloom relative w-full overflow-hidden rounded-lg bg-background">
                {children}
              </div>
            </SidebarProvider>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
