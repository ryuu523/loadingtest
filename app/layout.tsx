import "./globals.css";
import LoadingComponent from "@/components/loadingComponent";
import { LoadingProvider } from "@/context/loadingContext";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <LoadingProvider>
          <LoadingComponent />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
