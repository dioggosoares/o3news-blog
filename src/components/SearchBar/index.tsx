import { ChangeEvent } from 'react'
import { MdOutlineSearch } from 'react-icons/md'

export function SearchBar({ value, onChange }) {

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    onChange(e.target.value)
  }

  return (
    <div className="w-full h-20 flex items-center justify-center bg-graycustom-950 border-y border-graycustom-800 sticky top-[4.875rem]">
      <div className="w-full max-w-5/6 flex items-center justify-center px-8">
        <div className="flex w-full max-w-2/3 rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-graycustom-800 bg-transparent text-graycustom-100 text-sm">
            <MdOutlineSearch size={20} />
          </span>
          <input
            type="search"
            name="search"
            className="relative block w-full flex-1 rounded-none rounded-r-md px-3 py-2 sm:text-sm bg-graycustom-850/50
            border border-[#24222A] placeholder-gray-500 text-white focus:outline-0 focus:ring-[#76757B] focus:border-[#76757B]
            hover:border-[#9e9ea0] transition-all duration-500 ease-in-out"
            placeholder="Buscar..."
            autoCapitalize="none"
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}
