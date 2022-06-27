import { MdKeyboardArrowDown } from 'react-icons/md'
import { HiDotsHorizontal } from 'react-icons/hi'

export function FetchMore({ onClick }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <HiDotsHorizontal size={15} />
      <button onClick={() => onClick()} className="text-lg font-medium text-gold-500 hover:text-graycustom-100 border-0 bg-transparent">
        Carregar mais posts
      </button>
      <MdKeyboardArrowDown size={15} />
    </div>
  )
}