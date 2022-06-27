import { CloseButton } from "../../CloseButton";
import Image from 'next/image';

// IMPORT IMAGES
import successImageUrl from '../../../../assets/svg/Success.svg';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[19rem]">
        <Image src={successImageUrl} alt="Imagem de um ícone de visto" />

        <span className="text-xl mt-2 text-graycustom-100">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-100 rounded-smd border-transparent text-graycustom-800 text-sm leading-6 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-graycustom-850 focus:ring-slime-500 transition-colors duration-200 ease-linear"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
