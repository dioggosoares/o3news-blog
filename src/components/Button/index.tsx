import { useEffect, useRef, useState } from 'react';

export function Button() {
  const inputRef = useRef(null);
  const [showCalender, setShowCalender] = useState(false)

  function handleShowCalendar() {
    setShowCalender(prevShowCalender => !prevShowCalender);
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [showCalender])

  return (
    <>
      <button type="button" className="inline-flex cursor-pointer items-center
              rounded-md bg-slime-500 px-4 py-2 text-sm font-semibold leading-6
              text-white shadow transition duration-500 ease-in-out hover:bg-slime-500/50
              disabled:opacity-75" onClick={handleShowCalendar}
      >
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25" cx="12" cy="12" r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Processando...
      </button>
      <input type="date" ref={inputRef} />
    </>
  )
}
