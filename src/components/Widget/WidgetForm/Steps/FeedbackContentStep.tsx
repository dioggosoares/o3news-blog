import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, Camera } from 'phosphor-react';

// IMPORT API
import { api } from '../../../../services/feedgetApi';

// IMPORT COMPONENTS
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from '../ScreenshotButton';
import { Loading } from '../../Loading';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const feedbackTypeInfo = feedbackTypes[feedbackType];
  
  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    })

    setIsSendingFeedback(false);
    onFeedbackSent()
  }
  
  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-graycustom-100 hover:text-zinc-500" title="Voltar para os tipos de feedback"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="flex items-center gap-2 text-xl leading-6 text-graycustom-100">
          <Image src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} width={24} height={24} />
          {feedbackTypeInfo.title} 
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="w-full my-4">
        <textarea
          className="w-full min-w-[19rem] min-h-[7rem] text-sm placeholder-graycustom-100/50 text-graycustom-100 border border-graycustom-100
          bg-transparent rounded-md focus:border-slime-500 focus:ring-slime-500 focus:ring-1 focus:outline-none resize-none
          scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenShotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="flex p-2 bg-slime-500 rounded-smd border-transparent flex-1 justify-center items-center text-white text-sm
            hover:bg-slime-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-graycustom-850 focus:ring-slime-500 transition-colors duration-200 ease-linear
            disabled:opacity-50 disabled:hover:bg-slime-500"
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}
