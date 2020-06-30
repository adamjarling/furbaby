import React from "react"
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaYoutube,
  FaGooglePlay,
  FaSpotify,
} from "react-icons/fa"
import styled from "styled-components"

const Icon = styled.a`
  display: inline-block;
  padding: 0.75rem 1rem 0.5rem;
  border-bottom: none !important;
`

var socialMedia = [
  {
    service: "Spotify",
    url:
      "https://open.spotify.com/artist/1hpsUJGJST9u6Qf8KWn8CR?si=Faiv2grEQX6vwJ9z_4sMQQ",
    icon: <FaSpotify />,
  },
  {
    service: "Instagram",
    url: "https://www.instagram.com/furbaby_rocks/",
    icon: <FaInstagram />,
  },
  {
    service: "YouTube",
    url: "https://www.youtube.com/channel/UCSoulFKYB6zGzHhbV-rkPzg",
    icon: <FaYoutube />,
  },
  {
    service: "Facebook",
    url: "https://www.facebook.com/adam.arling",
    icon: <FaFacebook />,
  },
  {
    service: "Google Play",
    url:
      "https://play.google.com/store/music/album/Furbaby_Boxed_In?id=Bfzfwy4277nj3eer6wsleaj2zce",
    icon: <FaGooglePlay />,
  },
  {
    service: "Email",
    url: "mailto:aarling@gmail.com",
    icon: <FaEnvelope />,
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        © {new Date().getFullYear()}, <span className="fur-font">Furbaby</span>.{" "}
        <br />
        {socialMedia.map(sm => (
          <Icon
            key={sm.service}
            href={sm.url}
            target="_blank"
            title={sm.service}
          >
            <span className="icon is-size-4">{sm.icon}</span>
          </Icon>
        ))}
        <br />
        Made in Chicago, USA
      </div>
    </footer>
  )
}
