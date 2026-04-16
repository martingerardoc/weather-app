export const metadata = {
  title: "Weather App",
  description: "App de clima con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}