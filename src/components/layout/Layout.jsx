import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      {!isHome && <Navbar />}
      <main className={!isHome ? 'main-content' : ''}>{children}</main>
      <Footer />
    </>
  )
}
