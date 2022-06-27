import { InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function Author({ name, image, alt, content, instagram, linkedin }) {

  return (
    <div className="w-full flex items-center justify-center bg-graycustom-900">
      <div className="w-full max-w-5/6 flex items-center justify-center px-8 py-10">
        <div className="w-full flex items-center mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
              <img src={image} alt={alt} className="rounded-full w-24 h-24" />
              <h1 className="text-2xl text-graycustom-100 font-bold">
                {name}
              </h1>
              <a href={instagram} target="_blank"
                className="block bg-graycustom-850 rounded-lg p-0 text-cyanis-500 hover:text-graycustom-100 transition-colors duration-150 ease-linear">
                <InstagramLogo size={28} />
              </a>
              <a href={linkedin} target="_blank"
                className="block bg-graycustom-850 rounded-sm p-0 text-cyanis-500 hover:text-graycustom-100 transition-colors duration-150 ease-linear">
                <LinkedinLogo size={28} />
              </a>
            </div>
            <div className="text-base text-graycustom-100">
              <h2 className="text-lg font-bold mb-2">Sobre a autora:</h2>
              <p className="text-base text-graycustom-100">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
