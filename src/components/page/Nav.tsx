import SlideHover from "../SlideHover"

export default function Nav() {
  return (
    <>
      <style>
        {`

      `}
      </style>
      <div class="fixed top-0 left-0 w-screen flex p-6 items-center justify-center gap-4">
        <div class="flex justify-between px-4 bg-neutral-800 overflow-hidden items-center w-1/3 rounded-lg">
          <div class="flex gap-2">
            <div class="p-4 text-[#656565] overflow-hidden">hi</div>
            <div class="p-4 text-[#656565] overflow-hidden transition-all duration-100">
              <SlideHover>hi</SlideHover>
            </div>
          </div>
          <div class="p-4">Sign In</div>
        </div>
      </div>
    </>
  )
}
