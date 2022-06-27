import { ChatTeardropDots } from 'phosphor-react';
import { Popover, Transition } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Feedget() {
  return (
    <Popover className="z-40 fixed bottom-24 right-3 1xl:bottom-4 lg:bottom-24 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="flex items-center bg-slime-500 rounded-full px-3 h-12 text-white group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-graycustom-900 focus:ring-slime-500">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
