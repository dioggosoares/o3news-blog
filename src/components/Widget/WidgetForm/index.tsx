import { useState } from 'react';

// IMPORT COMPONENTS
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

// IMPORT IMAGES
import bugImageUrl from '../../../assets/svg/Bug.svg';
import ideaImageUrl from '../../../assets/svg/Idea.svg';
import thoughtImageUrl from '../../../assets/svg/Thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  PROBLEMA: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEIA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OUTROS: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null);
  }
  
  return (
    <div className="flex flex-col bg-graycustom-850 p-4 relative rounded-2xl mb-6 items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto font-inter text-zinc-800 tooltip-pop-over-up">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-zinc-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="#">Dashcode</a>
      </footer>
    </div>
  )
}
