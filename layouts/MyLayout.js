import Contact from '../components/contact';
import Navbar from '../components/navbar';

export default function MyLayout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Contact />
    </>
  )
}