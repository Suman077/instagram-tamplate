"use client"
import "@/app/styles/globals.css";
import { ThemeProvider } from "../providers/theme-provider";
import { Provider } from "react-redux";
import { store } from "../store/store";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
