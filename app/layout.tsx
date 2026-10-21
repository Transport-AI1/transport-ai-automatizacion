import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Automatización de Procesos | Transport AI",
  description:
    "Descubre cómo Transport AI conecta aplicaciones, automatiza tareas y mejora el seguimiento de procesos empresariales mediante inteligencia artificial.",
  applicationName: "Transport AI",
  keywords: [
    "automatización de procesos",
    "inteligencia artificial",
    "integraciones",
    "automatización empresarial",
    "Transport AI",
  ],
  openGraph: {
    title: "Automatización de Procesos | Transport AI",
    description:
      "Menos tareas repetitivas. Más control. Descubre las automatizaciones para tu empresa.",
    type: "website",
    siteName: "Transport AI",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
