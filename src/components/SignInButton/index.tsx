import { signIn, signOut, useSession } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const { data } = useSession();

  return data ? (
    <button
      type="button"
      className="flex items-center justify-center h-12 rounded-4xl border-0 py-0 px-4 font-bold text-white bg-graycustom-850 hover:bg-graycustom-800
          group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-graycustom-900 focus:ring-slime-500 transition-all duration-150 ease-linear"
      onClick={() => signOut()}
    >
      <FaGoogle color="#04D361" size={20} className="w-5 h-5 mr-4" />
      {data.user.name}
      <FiX size={18} className="ml-4 text-graycustom-730" />
    </button>
  ) : (
    <button
      type="button"
      className="flex items-center justify-center h-12 rounded-4xl border-0 py-0 px-4 font-bold text-white bg-graycustom-850 hover:bg-graycustom-870
      group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-graycustom-900 focus:ring-gold-500 transition-all duration-150 ease-linear"
      onClick={() => signIn('google')}
    >
      <FaGoogle color="#eba417" className="w-5 h-5 mr-4" />
      Entrar com Google
    </button>
  )
}
