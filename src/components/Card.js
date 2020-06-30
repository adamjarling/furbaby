import React from "react"

export default function Card({ image, name, url }) {
  return (
    <div className="card has-text-black">
      <div className="card-image fur-card-image">
        <figure className="image">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">{name}</div>
      </div>
      <footer className="card-footer is-family-secondary fur-card-footer">
        <a href={url} target="_blank" className="card-footer-item">
          Check it out
        </a>
      </footer>
    </div>
  )
}
