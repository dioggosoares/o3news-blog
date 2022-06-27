import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

export function CloseButton() {
  return (
    <Popover.Button className="absolute top-5 right-5 text-graycustom-100 hover:text-zinc-500" title="Fechar formulário de feedback">
      <X weight="bold" className="w-4 h-4"/>
    </Popover.Button>
  )
}
