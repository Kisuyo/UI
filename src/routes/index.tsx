import { Match, Show, Switch, createSignal, onMount } from "solid-js"
import { useGlobal } from "~/Global/global"
import ButtonConic from "~/components/ButtonConic"
import ButtonShine from "~/components/ButtonShine"
import ButtonSlide from "~/components/ButtonSlide"
import { renderToString } from "solid-js/web"
import NavSlide from "~/components/NavSlide"
import Nav from "~/components/page/Nav"
import PageCard from "~/components/page/PageCard"
import ToggleSwitch from "~/components/ToggleSwitch"

export default function Home() {
  const global = useGlobal()
  const element = <ButtonSlide>hi</ButtonSlide>
  console.log(element.outerHTML, element)
  return (
    <>
      <div class="bg-[#151515] overflow-scroll w-screen pt-[104px] text-white h-full">
        <Nav />
        <div class="p-4 col-gap-[16px] h-fit">
          <PageCard code={global.global.code.buttonSlide}>
            <ButtonSlide>Hover Me!</ButtonSlide>
          </PageCard>
          <PageCard code={global.global.code.toggleSwitch}>
            <ToggleSwitch />
          </PageCard>
          <PageCard>
            <NavSlide></NavSlide>
          </PageCard>
        </div>
      </div>
    </>
  )
}
