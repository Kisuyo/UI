import { JSXElement } from "solid-js"

interface Props {
  children: JSXElement
}

export default function PageCard(props: Props) {
  return (
    <>
      <div class="bg-neutral-950 w-full h-[400px] rounded-lg flex-center">
        {props.children}
      </div>
    </>
  )
}
