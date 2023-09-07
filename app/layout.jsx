import '@styles/globals.css'

export const metada = {
  title: 'Nextjs Lession',
  description: 'Discover & Learn Nextjs'
}
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
