export default function ButtonShine() {
  return (
    <>
      <style>
        {`
        #ButtonShine {
          background-image:
            linear-gradient(
              124deg in hsl,
              hsl(0 0% 20%) 35% 35%, hsl(253 0% 31%) 50%, hsl(0 0% 20%) 65% 65%
            );
          background-size: 200% 100%;
          background-position: 100% 0%;

        }
        #ButtonShine:hover {
          background-position: 0% 0%;
          background-repeat: no-repeat;
        }
        `}
      </style>
      <div class="">
        <div
          class="rounded-full w-full transition-all h-full p-0.5 text-white"
          id="ButtonShine"
        >
          <div class="px-8 p-2 w-full h-full bg-neutral-900 rounded-full font-light transition-all">
            Click me!
          </div>
        </div>
      </div>
    </>
  )
}
