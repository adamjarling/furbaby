import React from "react"
import VideoResponsive from "../../components/VideoResponsive"
import * as musicManifest from "../../music-release-manifest"

export default function PressKitVideos() {
  return (
    <>
      <h2 className="title">Videos</h2>
      <div className="columns is-multiline">
        <div className="column content is-half">
          <VideoResponsive
            url={`https://www.youtube.com/embed/${musicManifest.waiting.youTubeId}`}
            title="Waiting by FURBABY and the Tight Spaces"
          />
        </div>
        <div className="column content is-half">
          <VideoResponsive
            url={`https://www.youtube.com/embed/${musicManifest.iCanOnlyGiveYouEverything.youTubeId}`}
            title="I Can Only Give You Everything by FURBABY and the Tight Spaces"
          />
        </div>
        <div className="column content is-half">
          <VideoResponsive
            url={`https://www.youtube.com/embed/${musicManifest.reachingOut.youTubeId}`}
            title="Reaching Out (for Higher Ground) by FURBABY and the Tight Spaces"
          />
        </div>
        <div className="column content is-half">
          <VideoResponsive
            url={`https://www.youtube.com/embed/${musicManifest.behindTheDoor.youTubeId}`}
            title="Behind the Door by FURBABY and the Tight Spaces"
          />
        </div>
        <div className="column content is-half">
          <VideoResponsive
            url="https://www.youtube.com/embed/5bRFZN4X_3g"
            title="Cocoa by FURBABY and the Tight Spaces"
          />
        </div>
        <div className="column content is-half">
          <VideoResponsive
            url="https://www.youtube.com/embed/piCdPUIlJlw"
            title="Boxed In by FURBABY and the Tight Spaces"
          />
        </div>
      </div>
    </>
  )
}
