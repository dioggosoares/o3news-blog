import { signOut } from 'next-auth/react'
import { AiOutlinePoweroff } from 'react-icons/ai'

export function SignOutButton() {
  return (
    <div className="hidden md:inline">
      <button
        type="button"
        className="relative bg-graycustom-850 text-base font-medium rounded-full text-slime-500 hover:text-graycustom-100 transition-all duration-150 ease-linear"
        onClick={() => signOut()}
      >
        <AiOutlinePoweroff size={20} />
      </button>
    </div>
  )
}