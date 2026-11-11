import "./globals.css";

export const metadata = {
  title: "API a DB",
  description: "Ejemplo de conexión a base d edatos Neon postgres",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
