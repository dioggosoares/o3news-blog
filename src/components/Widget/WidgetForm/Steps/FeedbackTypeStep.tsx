import Image from 'next/image';

import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  
  return (
    <>
      <header>
        <span className="text-xl leading-6 text-graycustom-100">Deixe seu feeedback</span>

        <CloseButton />
      </header>

      <div className="w-full flex py-8 gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="flex-1 flex flex-col bg-graycustom-870 rounded-lg py-5 w-24 items-center gap-2 border-2
              border-transparent hover:border-slime-500 focus:border-slime-500 focus:outline-none"
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
            >
              <Image src={value.image.source} alt={value.image.alt} />
              <span className="text-graycustom-100">{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  )
}
