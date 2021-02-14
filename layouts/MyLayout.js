import Navbar from '../components/navbar';

export default function MyLayout({children}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}