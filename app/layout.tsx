import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Jpstock Trade Next Front Sample",
  description: "jpstock trade next front sample",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
