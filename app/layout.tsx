import './globals.css'
export const metadata = {
  title: 'BioCore | Suplementación de Alto Rendimiento',
  description: 'Tienda oficial de BioCore en México. Elevamos tu potencial con suplementos de pureza garantizada y resultados reales.',
  openGraph: {
    title: 'BioCore | Suplementos de Élite',
    description: 'Transforma tu físico con BioCore. Calidad premium en cada servicio.',
    url: 'https://astrion.com.mx/',
    siteName: 'BioCore',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
