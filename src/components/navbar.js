import React, { useState } from "react"
import { FaInstagram } from "react-icons/fa"

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState()

  const handleClick = () => {
    setBurgerOpen(!burgerOpen)
  }

  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          className="navbar-item is-family-secondary is-size-4"
          href="https://www.furbaby.rocks/"
        >
          Furbaby
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${burgerOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={`${burgerOpen ? "true" : "false"}`}
          data-target="navbarBasicExample"
          onClick={handleClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${burgerOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <a
              href="https://www.instagram.com/furbaby_rocks/"
              className="is-flex"
              target="_blank"
              style={{ alignItems: "center" }}
            >
              <span className="icon is-large is-size-4">
                <FaInstagram />
              </span>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
