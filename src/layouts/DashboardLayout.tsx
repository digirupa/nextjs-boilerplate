import React, { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import Loading from "@/components/app/layouts/Loading";
import HeadApplication from "@/components/app/layouts/HeadApplication";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type TProps = {
  children: ReactNode;
  title?: string;
};

const DashboardLayout = ({ children, title }: TProps) => {
  return (
    <React.Fragment>
      <HeadApplication title={title} />
      <Loading />
      <main
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        {children}
      </main>
      <Toaster />
    </React.Fragment>
  );
};

export default DashboardLayout;
