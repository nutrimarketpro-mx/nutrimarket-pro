export const metadata = {
  title: 'NutriMarket Pro',
  description: 'La mejor tienda de suplementos en México',
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
