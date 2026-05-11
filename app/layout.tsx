// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

// Definimos los metadatos oficiales de la marca Astrion
export const metadata: Metadata = {
  title: 'Astrion | Optimize YOUR Potential | Suplementos Premium',
  description: 'Tienda oficial de Astrion en México. Eleva tu rendimiento con suplementos que transforman, diseñados para la élite.',
  openGraph: {
    title: 'Astrion | Suplementos de Alto Rendimiento',
    description: 'Transforma tu físico con Astrion. Pureza garantizada, resultados reales.',
    url: 'https://astrion.com.mx/', // URL final de Astrion
    siteName: 'Astrion',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://astrion.com.mx/og-image.jpg', // Imagen para compartir en redes (deberás subir tu logo aquí)
        width: 1200,
        height: 630,
        alt: 'Astrion Labs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astrion | Suplementos de Élite',
    description: 'Optimize YOUR Potential. Suplementos que transforman.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      {/* Usamos fondo negro puro y texto plata/gris muy claro */}
      <body className="bg-black text-slate-100 antialiased">{children}</body>
    </html>
  )
}