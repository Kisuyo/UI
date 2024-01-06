import { createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"
import * as prettier from "prettier"

type Global = {
  mode: Mode
  code: {
    [key: string]: {
      css: undefined | string
      jsx: string
    }
  }
}

type Mode =
  | "Default"
  | "Button"
  | "InfoModal"
  | "Modal"
  | "ButtonShine"
  | "PopupMenu"

// TODO: add router
// currently using this store to do things router should do
// like `showSignIn`

// global state of user
export function createGlobalState() {
  const [global, setGlobal] = createStore<Global>({
    mode: "Default",
    code: {
      buttonSlide: {
        css: `
        .container:hover .buttonSlideBackground {
          transform: translateX(0);
        }
        .buttonSlideBackground {
          transform: translateX(-200%);
        }`,
        jsx: `
      <div
      class={clsx(
              "container relative w-[100px] h-[60px] rounded-lg overflow-hidden"
            )}
      >
        <div
          class={clsx(
            "buttonSlideBackground bg-red-500 absolute top-0 left-0 transition-all duration-200 ease-out w-full z-20 rounded-lg h-full"
          )}
        ></div>

        <div class="absolute top-0 left-0 z-30 h-full w-full p-0.5">
          <div class="w-full h-full rounded-lg  flex items-center bg-[#111111] justify-center">
            {props.children}
          </div>
        </div>
      </div>
        `,
      },
      toggleSwitch: {
        css: ``,
        jsx: `
        <div
      class={clsx(
        "w-[50px] p-0.5 bg-white hover:scale-[1.1] transition-all rounded-full flex items-center justify-start",
        toggleSwitch() && "[&>*]:translate-x-[25px]"
      )}
      onClick={() => {
        setToggleSwitch(!toggleSwitch())
      }}
    >
      <div class=" w-[20px] h-[20px] bg-blue-500 transition-all rounded-full"></div>
    </div>`,
      },
    },
  })

  return {
    // state
    global,
    // actions
    // setShowCommandPalette: (state: boolean) => {
    //   return setUser({ showCommandPalette: state });
    // },

    setMode: (state: Mode) => {
      return setGlobal({ mode: state })
    },
  } as const
}

const GlobalCtx = createContext<ReturnType<typeof createGlobalState>>()

export const GlobalProvider = GlobalCtx.Provider

export const useGlobal = () => {
  const ctx = useContext(GlobalCtx)
  if (!ctx) throw new Error("useGlobal must be used within UserProvider")
  return ctx
}
