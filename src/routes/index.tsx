import { Match, Show, Switch, createSignal } from "solid-js"
import { useGlobal } from "~/Global/global"
import ButtonShine from "~/components/ButtonShine"
import ButtonSlide from "~/components/ButtonSlide"
import Nav from "~/components/page/Nav"

export default function Home() {
  const global = useGlobal()
  return (
    <>
      <div class="bg-neutral-900 w-screen text-white h-screen flex items-center justify-center">
        <Nav />
        <ButtonSlide>hi</ButtonSlide>
      </div>
    </>
  )
}
