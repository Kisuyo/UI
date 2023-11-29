import { JSXElement, createSignal, onCleanup } from "solid-js"

interface Props {
  children: JSXElement
}

export default function ButtonConic(props: Props) {
  function useRotation() {
    const [rotation, setRotation] = createSignal(0)

    let requestId: any

    function animate() {
      setRotation((prevRotation) => (prevRotation + 1) % 360)
      requestId = requestAnimationFrame(animate)
    }

    // Start the animation loop when the component is mounted
    onCleanup(() => cancelAnimationFrame(requestId))

    // Kick off the animation loop
    animate()

    return rotation
  }
  return (
    <>
      <style>
        {`

      .background {
        animation: 5s ConicBackground infinite linear;
        background-image:
          conic-gradient(
            from 90deg at 50% 50% in hsl,
            hsl(0 0% 14%) 36% 36%, hsl(263 88% 50%) 50%, hsl(0 0% 14%) 65% 65%
          );
      }

      @keyframes ConicBackground {
        0% {
          --rotate: 0deg;
        }
        100% {
          --rotate: 360deg;
        }
      }
        `}
      </style>
      <div class="background w-[150px] h-[60px] rounded-lg">
        {props.children}
      </div>
    </>
  )
}
