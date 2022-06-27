import Image from 'next/image'
import { InstagramLogo } from 'phosphor-react'

// IMPORT IMAGES
import logo from '../../assets/svg/logo.svg'

export function Footer() {

  return (
    <footer id="footer" className="flex items-center justify-center w-full min-h-[5rem] bg-graycustom-900 border-t-graycustom-800 border-t">
      <div className="flex items-center justify-between max-w-5/6 w-full h-20 my-0 mx-3 py-6 px-0">
        <Image src={logo} alt="O3.news" />
        <span className="flex flex-wrap max-w-x w-full items-center justify-center text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022<a href="#" className="hover:underline ml-2">DashCode™</a>Todos os direitos reservados.
        </span>
        <a href="https://www.instagram.com/naturebenesserebsb/" target="_blank"
        className="block bg-graycustom-850 rounded-lg p-2 text-cyanis-500 hover:text-graycustom-100 ring-2 ring-offset-2 ring-offset-graycustom-900 ring-graycustom-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-graycustom-100 focus:ring-cyanis-500 transition-colors duration-150 ease-linear">
          <InstagramLogo size={28} />
        </a>
      </div>
      {/* <hr className="my-6 border-graycustom-800 sm:mx-auto dark:border-graycustom-800 lg:my-8" /> */}
    </footer>
  )
}
