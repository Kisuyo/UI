import clsx from "clsx"
import { JSXElement, createEffect, createSignal } from "solid-js"

interface Props {
  children: JSXElement
}
export default function ButtonSlide(props: Props) {
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
          "container relative w-[100px] h-[60px] bg-slate-400 rounded-lg overflow-hidden",
        )}
      >
        <div
          class={clsx(
            "buttonSlideBackground bg-red-500 absolute top-0 left-0 transition-all duration-200 ease-out w-full z-20 rounded-lg h-full",
          )}
        ></div>

        <div class="absolute top-0 left-0 z-30 h-full w-full p-0.5">
          <div class="w-full h-full rounded-lg  flex items-center bg-[#1E1E1E] justify-center">
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}
