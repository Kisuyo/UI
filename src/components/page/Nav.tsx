import SlideHover from "../SlideHover"

export default function Nav() {
  return (
    <>
      <style>
        {`

      `}
      </style>
      <div class="fixed top-0 left-0 w-screen flex-center p-6 gap-4">
        <div class="flex-between p-2 border-dark bg-[#151515] shadow overflow-hidden w-1/2 rounded-lg">
          <div class="flex font-light gap-3">
            <div class="p-1 text-[#656565] overflow-hidden">
              <SlideHover>UI</SlideHover>
            </div>
            <div class="p-1 text-[#656565] overflow-hidden transition-all duration-100">
              <SlideHover>Fancy</SlideHover>
            </div>
          </div>
          <div class="px-4 p-1">Sign In</div>
        </div>
      </div>
    </>
  )
}
