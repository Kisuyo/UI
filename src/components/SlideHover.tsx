import { JSXElement } from "solid-js"

interface Props {
  children: JSXElement
}

export default function SlideHover(props: Props) {
  return (
    <>
      <style>
        {`

        .container:hover .active {
          transform: translateY(0);

        }
        .container:hover .deactive {
          transform: translateY(20px);

        }

      `}
      </style>
      <div class="container group hover:active:translate-y-0 overflow-hidden w-fit cursor-pointer h-fit relative">
        <div class="active text-white translate-y-[-22px] transition-all ease-out duration-200">
          {props.children}
        </div>
        <div class="deactive  absolute top-0 left-0 ease-out transition-all duration-200">
          {props.children}
        </div>
      </div>
    </>
  )
}
