import React from "react"
import PropTypes from "prop-types"
import { FaFileDownload } from "react-icons/fa"

export default function DownloadAudioButton({ fileStr }) {
  return (
    <a className="button is-fullwidth my-2 is-black" href={fileStr} download>
      <span className="icon">
        <FaFileDownload />
      </span>
      <span>Download Hi-Res Photo</span>
    </a>
  )
}

DownloadAudioButton.propTypes = {
  fileStr: PropTypes.string,
}
