export function ShimmerPosts() {
  return (
    <div className="mb-8">
      <div className="flex flex-row items-center mb-6">
        <span className="mr-2.5 h-4 w-4 animate-pulse bg-slime-500"></span>
        <h2 className="animate-pulse h-4 w-1/4 bg-gray-400"></h2>
      </div>
      <h1 className="w-3/4 mb-4 h-6 animate-pulse bg-graycustom-100"></h1>
      <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
      <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
      <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
      <div className="flex items-center flex-wrap ">
        <span className="bg-graycustom-100 w-full h-1 animate-pulse mt-6 inline-flex items-center md:mb-2 lg:mb-0"></span>
      </div>
    </div>
  )
}

export function ShimmerLastPosts() {
  return (
    <div className="flex flex-row items-start gap-4 py-4">
      <div className="bg-graycustom-700 px-6 py-6 w-max h-max rounded-lg animate-pulse">
        <div className="w-14 h-14 flex items-center justify-center">
          <div className="w-[42px] h-[35px] bg-cyanis-500 animate-pulse" />
        </div>
      </div>
      <div className="mt-2 w-full flex flex-col">
        <h1 className="w-64/2 mb-4 h-4 animate-pulse bg-graycustom-100"></h1>
        <h1 className="w-60 h-4 animate-pulse bg-graycustom-100"></h1>
        <h1 className="w-28 mt-7 h-4 animate-pulse bg-graycustom-300"></h1>
      </div>
    </div>
  )
}

export function ShimmerAuthor() {
  return (
    <div className="w-full max-w-5/6 flex items-center justify-center mx-auto px-8 py-10">
      <div className="w-full flex items-center mx-auto">
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-row items-center gap-4">
            <div className="rounded-full w-24 h-24 bg-graycustom-100 animate-pulse"/>
            <h1 className="w-44 h-4 animate-pulse bg-graycustom-100"/>
            <div className="w-7 h-7 bg-cyanis-500 animate-pulse" />
            <div className="w-7 h-7 bg-cyanis-500 animate-pulse" />
          </div>
          <div className="w-full h-32">
            <h2 className="w-32 h-4 mb-4 animate-pulse bg-graycustom-100"></h2>
            <p className="w-full h-28 animate-pulse bg-graycustom-100/50"></p>
          </div>
        </div>
      </div>
    </div>
  )
}