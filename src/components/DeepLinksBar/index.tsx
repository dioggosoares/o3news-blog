import Link from 'next/link'
import { ArrowCircleLeft } from 'phosphor-react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export function DeepLinksBar({ category, subject }) {
  return (
    <div className="w-full h-20 flex items-center justify-center bg-graycustom-950 border-y border-graycustom-800 sticky top-[4.875rem]">
      <div className="w-full max-w-5/6 flex items-center justify-between px-8">
        <div className="flex flex-wrap w-auto items-center">
          <span>{category}</span>
          <MdKeyboardArrowRight className="mx-2"/>
          <span>{subject}</span>
        </div>
        <Link href={`/posts`}>
          <a href="/posts" className="flex items-center justify-center text-slime-500 hover:text-slime-300 transition-all duration-150 ease-linear">
            <ArrowCircleLeft size={28} className="mr-2.5" />
            <span className="text-graycustom-100">Voltar</span>
          </a>
        </Link>
      </div>
    </div>
  )
}