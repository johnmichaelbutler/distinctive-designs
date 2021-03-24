import  {useState} from 'react';
import Link from 'next/link';
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="fixed z-50 w-full top-0 bg-default-background-opaque">
      <div className="relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button onClick={handleOpenMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {/* <!-- Icon when menu is closed. --> */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open. */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Bar */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo Goes here */}
              <div className="font-extralight text-lg block">
                <Link href='/'>
                  <a>
                    <img src='logo_white.svg' alt='logo' className="h-14 mt-2"/>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex sm:ml-6 justify-center items-center text-center">
              <div className="flex space-x-4">
                <Link href="/Services">
                  <a className="text-gray-300 hover:underline hover:text-white px-3 py-2 rounded-md text-sm lg:text-base uppercase my-auto">Services</a>
                </Link>
                <Link href="/OurProcess">
                  <a className="text-gray-300 hover:underline hover:text-white px-3 py-2 rounded-md text-sm lg:text-base uppercase">Our Process</a>
                </Link>
                <Link href="/OurWork">
                  <a className="text-gray-300 hover:underline hover:text-white px-3 py-2 rounded-md text-sm lg:text-base  uppercase">Our Work</a>
                </Link>
                <Link href="/AboutUs">
                  <a className="text-gray-300 hover:underline hover:text-white px-3 py-2 rounded-md text-sm lg:text-base uppercase">About Us</a>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="/#contact" scroll={false}>
              <button className="text-gray-300 hover:underline hover:text-white px-3 py-2 rounded-md text-sm lg:text-md  uppercase">
                <a>Contact Us</a>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classNamees based on menu state. */}
      <div className={`${openMenu ? '' : 'hidden'} sm:hidden h-2/5 w-full fixed z-10 bg-mobile-nav-bg text-md`}>
        {/* Removed 'px-2 pt-2 pb-3 space-y-1 ' */}
        <div className="w-full h-full grid grid-rows-4 text-center items-center">
          <div className="row-span-1 hover:underline hover:text-white">
            <Link href="/Services">
              <a  onClick={handleOpenMenu} className="text-gray-200   uppercase">Services</a>
            </Link>
          </div>
          <div className="row-span-1">
            <Link href="/OurProcess">
              <a  onClick={handleOpenMenu} className="text-gray-200 hover:underline hover:text-white uppercase">Our Process</a>
            </Link>
          </div>
          <div className="row-span-1">
            <Link href="/OurWork">
              <a  onClick={handleOpenMenu} className="text-gray-200 hover:underline hover:text-white  uppercase">Our Work</a>
            </Link>
          </div>
          <div className="row-span-1">
            <Link href="/AboutUs">
              <a  onClick={handleOpenMenu} className="text-gray-200 hover:underline hover:text-white uppercase">About Us</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    )
  };