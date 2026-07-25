import { Fragment } from "react"

/** Renders a translation string, emphasising any `**wrapped**` spans. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*([\s\S]+?)\*\*/g).map((part, i) =>
        i % 2 === 1
          ? <strong key={i} className="font-semibold text-slate-700">{part}</strong>
          : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  )
}
