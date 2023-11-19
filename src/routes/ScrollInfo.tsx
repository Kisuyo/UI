import { createEffect, createSignal, onCleanup, onMount } from "solid-js"
import TextStream from "~/components/TextStream"

export default function ScrollInfo() {
  const [isVisible, setIsVisible] = createSignal(false)
  const [shouldListenToScroll, setShouldListenToScroll] = createSignal(false)

  const intersectionCallback = (entries: any) => {
    entries.forEach((entry: any) => {
      setIsVisible(entry.isIntersecting)
    })
  }

  const options = {
    root: null,
    rootMargin: "0% 50% 0% 0%",

    threshold: 1,
  }

  const observer = new IntersectionObserver(intersectionCallback, options)

  onCleanup(() => {
    observer.disconnect()
  })

  let ref: any
  createEffect(() => {
    console.log(ref, "Wtf")
    if (ref) {
      observer.observe(ref)
    }
  })

  // createEffect(() => {
  //   const handleScroll = () => {
  //     const scrollValue = window.scrollY
  //     console.log("Scroll value:", scrollValue)
  //   }
  //   if (isVisible()) {
  //     window.addEventListener("scroll", handleScroll)
  //   } else {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // })

  return (
    <div class="w-full h-full bg-neutral-900 text-white">
      <div class="w-screen h-screen">
        <TextStream>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          vero non porro quisquam ea magni consequuntur sapiente labore
          praesentium. Dicta nobis quod officia cum rem delectus? Soluta vel
          earum quaerat.
        </TextStream>
      </div>
      <div class="flex h-[800vh]">
        <div class="w-[50vw] ">
          <div class="bg-red-500 w-full h-1/2 relative">
            <div
              class="h-screen w-full bg-white sticky top-0 left-0"
              // ref={(el) => (ref = el)}
            >
              hi
            </div>
          </div>
          <div class="bg-red-700 w-full h-1/2 relative">
            <div class="h-screen w-full bg-black sticky top-0 left-0">bye</div>
          </div>
        </div>
        <div class="w-[50vw] bg-green-500 relative">
          <div class="w-full flex flex-col gap-4 p-4 h-screen sticky top-0 left-0">
            <div class="rounded-lg h-[400px] w-full bg-gray-200"></div>
            <TextStream>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi vero non porro quisquam ea magni consequuntur sapiente
              labore praesentium. Dicta nobis quod officia cum rem delectus?
              Soluta vel earum quaerat.
            </TextStream>
          </div>
        </div>
      </div>
    </div>
  )
}
