import React from "react"
import PropTypes from "prop-types"

function MusicButton({ label, url, icon }) {
  return (
    <a href={url} target="_blank" className="button is-large is-flex-grow-1">
      <span className="icon is-size-1">{icon}</span>
      {/* <span>{label}</span> */}
    </a>
  )
}

MusicButton.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.node,
}

export default MusicButton
