
import { inter } from "@/ui/Fonts";
export const metadata = {
  title: "Sauti Chat",
  description: "Created for anonymous messaging",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
