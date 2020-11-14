import React from "react"

export default function MusicButtonsWrapper({ children }) {
  return (
    <div className="pt-3 is-flex is-justify-content-space-between">
      {children}
    </div>
  )
}
