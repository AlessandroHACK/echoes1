"use client";

import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProviderProps> = ({
  children
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;