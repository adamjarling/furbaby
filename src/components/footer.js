import React from "react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        © {new Date().getFullYear()}, <span className="fur-font">Furbaby</span>.{" "}
        <br />
        Made in Chicago, USA
      </div>
    </footer>
  )
}
