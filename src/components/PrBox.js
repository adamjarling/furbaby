import React from "react"

function PrBox({ children }) {
  return (
    <div className="columns is-centered">
      <div className="column is-8">
        <div className="content notification is-black mt-4 has-text-justified is-size-7-mobile">
          {children}
        </div>
      </div>
    </div>
  )
}

export default PrBox
