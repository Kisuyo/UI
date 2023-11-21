import { JSXElement } from "solid-js"

interface Props {
  children: JSXElement
}
export default function ButtonSlide(props: Props) {
  return (
    <>
      <style>
        {`

      `}
      </style>
      <div class="relative w-[100px] h-[60px]">
        <div class="bg-red-500 absolute top-0 left-0 w-1/2 z-20 h-full"></div>

        <div class="w-full h-full  flex items-center bg-neutral-900 justify-center">
          {props.children}
          hi
        </div>
      </div>
    </>
  )
}
