import { Match, Show, Switch, createSignal } from "solid-js"
import { useGlobal } from "~/Global/global"
import ButtonShine from "~/components/ButtonShine"

export default function Home() {
  const global = useGlobal()
  return (
    <>
      <div class="bg-neutral-900 w-screen h-screen flex items-center justify-center">
        <ButtonShine />
      </div>
    </>
  )
}
