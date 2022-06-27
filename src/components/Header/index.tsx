import { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'

// IMPORT ICONS
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

// IMPORT COMPONENTS
import { SignInButton } from '../'
import { ActiveLink } from '../';

// IMPORT IMAGES
import logo from '../../assets/svg/logo.svg'

export function Header() {
  const router = useRouter()
  const { slug } = router.query

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header id="header" className="z-50 fixed top-0 left-0 right-0 h-20 bg-graycustom-900/50 border-b-graycustom-800 border-b gray-glassmorphism">
      <div className="flex flex-row items-center justify-between w-full max-w-5/6 h-20 my-0 mx-auto py-0 px-8">
        <Image src={logo} alt="O3.news" />
        {/* toogle menu mobile - começo */}
        <div className="z-50 relative flex flex-col md:hidden mt-2">
          {toggleMenu
            ?
            <MdOutlineClose fontSize={28} className="text-gold-500 md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            :
            <svg width="48" height="48" className="text-neutral-200 md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="20" width="24" height="2" fill="#eba417"></rect>
              <rect x="20" y="26" width="16" height="2" fill="#eba417"></rect>
            </svg>
          }
          {toggleMenu && (
            <div className="z-50 fixed top-20 -right-2 w-full h-[calc(100vh-5rem)] md:hidden flex flex-col
              items-start justify-start py-3 px-3 shadow-2xl bg-graycustom-900 rounded-md text-neutral-200">
              <nav id="mobileNavbar" className="flex flex-col w-full mb-8 py-2">
                <ActiveLink activeClassName="active" href="/">
                  <a>Home</a>
                </ActiveLink>
                {slug ?
                  <ActiveLink activeClassName="active" href={`/posts/${slug}`}>
                    <a>Posts</a>
                  </ActiveLink>
                  :
                  <ActiveLink activeClassName="active" href="/posts">
                    <a>Posts</a>
                  </ActiveLink>
                }
              </nav>
              <div className="flex">
                <SignInButton />
              </div>
            </div>
          )
          }
        </div>
        {/* toogle menu mobile - fim */}
        <nav id="navbar" className="hidden md:flex h-20">
          <ul id="list" className="md:flex md:flex-row">
            <li className="mr-8">
              <ActiveLink activeClassName="active" href="/">
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              {slug ?
                <ActiveLink activeClassName="active" href={`/posts/${slug}`}>
                  <a>Posts</a>
                </ActiveLink>
                :
                <ActiveLink activeClassName="active" href="/posts">
                  <a>Posts</a>
                </ActiveLink>
              }
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <SignInButton />
        </div>
      </div>
    </header>
  )
}
