import { createEffect, onMount } from "solid-js"

interface Props {
  children?: any
}

function WrapText(element: HTMLElement) {
  const text = element.textContent

  element.innerHTML = ""

  for (var i = 0; i < text.length; i++) {
    var span = document.createElement("span")
    span.textContent = text[i]

    element.appendChild(span)
  }
}
function AddAnimationDelay(element: HTMLDivElement) {
  element.querySelectorAll("span").forEach((span, index) => {
    span.style.animationDelay = `${index * 0.03}s`
  })
}

export default function TextStream(props: Props) {
  onMount(() => {
    const myElement = document.getElementById("TextStream") as HTMLDivElement
    if (myElement) {
      WrapText(myElement)
      AddAnimationDelay(myElement)
    }
  })
  createEffect(() => {})
  return (
    <>
      <style>
        {`

       span {
        opacity: 0;

        display: inline-block;
        height: 1em;

        animation: 1s TextShow forwards ease;

       }
        @keyframes TextShow {


          95% {
            opacity: 0;
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
      <div id="TextStream" class="font-light">
        {props.children}
      </div>
    </>
  )
}
