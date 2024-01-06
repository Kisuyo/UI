import clsx from "clsx"
import { createSignal, onMount } from "solid-js"
import { renderToString } from "solid-js/web"

export default function ToggleSwitch() {
  const [toggleSwitch, setToggleSwitch] = createSignal(false)

  return (
    <div
      class={clsx(
        "w-[50px] p-0.5 bg-white hover:scale-[1.1] transition-all rounded-full flex items-center justify-start",
        toggleSwitch() && "[&>*]:translate-x-[25px]",
      )}
      onClick={() => {
        setToggleSwitch(!toggleSwitch())
      }}
    >
      <div class=" w-[20px] h-[20px] bg-blue-500 transition-all rounded-full"></div>
    </div>
  )
}
