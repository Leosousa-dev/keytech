import './styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="text-zinc-600">{children}</body>
    </html>
  )
}
