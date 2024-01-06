import { JSXElement, Show, createEffect, createSignal, onMount } from "solid-js"
import { getHighlighter } from "shikiji"
import * as prettier from "prettier"
import babel from "prettier/plugins/babel"
import css from "prettier/plugins/postcss"
import esTree from "prettier/plugins/estree"
import { renderToString } from "solid-js/web"

interface Props {
  children: JSXElement
  code: {
    css: string | undefined
    jsx: string
  }
}

export default function PageCard(props: Props) {
  const [JSXCode, setJSXCode] = createSignal<string | undefined>(undefined)
  const [CSSCode, setCSSCode] = createSignal<string | undefined>(undefined)
  const [language, setLanguage] = createSignal("jsx")

  onMount(async () => {
    if (props.code) {
      const formattedJSX = await prettier.format(props.code.jsx, {
        parser: "babel",
        plugins: [babel, esTree],
      })

      const formattedCSS = await prettier.format(props.code.css, {
        parser: "css",
        plugins: [css, esTree],
      })

      const highlighter = await getHighlighter({
        themes: ["nord"],
        langs: ["javascript"],
      })

      // optionally, load themes and languages after creation
      await highlighter.loadTheme("dark-plus")
      await highlighter.loadLanguage("css")
      await highlighter.loadLanguage("jsx")

      const cssCode = highlighter.codeToHtml(formattedCSS, {
        lang: "css",
        theme: "dark-plus",
      })
      const jsxCode = highlighter.codeToHtml(formattedJSX, {
        lang: "jsx",
        theme: "dark-plus",
      })
      setCSSCode(cssCode)
      setJSXCode(jsxCode)
    }
  })

  return (
    <>
      <div class="w-full flex gap-4 h-[400px]">
        <div class="bg-[#1E1E1E] border-dark w-2/3  rounded-lg flex-center">
          {props.children}
        </div>
        <Show when={props.code}>
          <div class="bg-[#1E1E1E] p-4 relative border-dark w-full h-full overflow-scroll text-[14px] rounded-lg flex-center">
            <Show when={language() === "jsx"}>
              <div class="w-full h-full rounded-lg" innerHTML={JSXCode()} />
            </Show>
            <Show when={props.code.css !== "" && language() === "css"}>
              <div class="w-full h-full rounded-lg" innerHTML={CSSCode()} />
            </Show>
            <div class="absolute top-2 right-2 rounded-[6px] font-[12px] p-[3px] border-dark bg-neutral-900 flex gap-[3px]">
              <div
                class="hover:button-hover px-3 p-0.5"
                onClick={() => {
                  setLanguage("css")
                }}
              >
                css
              </div>
              <div
                class="hover:button-hover px-3 p-0.5"
                onClick={() => {
                  setLanguage("jsx")
                }}
              >
                jsx
              </div>
            </div>
          </div>
        </Show>
      </div>
    </>
  )
}
