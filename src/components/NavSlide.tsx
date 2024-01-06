import clsx from "clsx"
import { createSignal } from "solid-js"

export default function NavSlide() {
  const [hoveredElement, setHoveredElement] = createSignal()

  return (
    <>
      <div class="bg-neutral-900 w-2/3 h-[60px] relative items-center justify-between p-4 px-6 rounded-lg flex">
        <div>Home</div>
        <div>Log In</div>
        <div>Sign In</div>
      </div>
    </>
  )
}
