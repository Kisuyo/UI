import clsx from "clsx"
import { JSXElement, createEffect, createSignal } from "solid-js"

interface Props {
  children: JSXElement
}
export default function ButtonSlide(props: Props) {
  const [active, setActive] = createSignal(false)
  createEffect(() => {
    console.log(active())
  })
  return (
    <>
      <style>
        {`
      .container:hover .buttonSlideBackground {
        transform: translateX(0);
      }
      .buttonSlideBackground {
        transform: translateX(-200%);
      }
      `}
      </style>
      <div
        class={clsx(
          "container relative w-[100px] h-[60px] rounded-lg overflow-hidden",
          active() && "w-[500px]"
        )}
      >
        <div
          class={clsx(
            "buttonSlideBackground bg-red-500 absolute top-0 left-0 transition-all duration-200 ease-out w-full z-20 rounded-lg h-full",
            active() && "bg-green-500"
          )}
        ></div>

        <div
          onClick={() => {
            setActive(!active())
          }}
          class="absolute top-0 left-0 z-30 h-full w-full p-0.5"
        >
          <div class="w-full h-full rounded-lg  flex items-center bg-neutral-950 justify-center">
            hi
          </div>
        </div>
      </div>
    </>
  )
}
