import { Match, Show, Switch, createSignal } from "solid-js"
import { useGlobal } from "~/Global/global"
import ButtonConic from "~/components/ButtonConic"
import ButtonShine from "~/components/ButtonShine"
import ButtonSlide from "~/components/ButtonSlide"
import NavSlide from "~/components/NavSlide"
import Nav from "~/components/page/Nav"
import PageCard from "~/components/page/PageCard"

export default function Home() {
  const global = useGlobal()
  return (
    <>
      <div class="bg-neutral-900 overflow-scroll w-screen pt-[104px] text-white h-full">
        <Nav />
        <div class="p-4 gap-4 grid grid-cols-2 grid-rows-auto w-full h-fit">
          <PageCard>
            <ButtonSlide>hi</ButtonSlide>
          </PageCard>
          <PageCard>
            <ButtonSlide>hi</ButtonSlide>
          </PageCard>
          <PageCard>
            <NavSlide></NavSlide>
          </PageCard>
        </div>
      </div>
    </>
  )
}
