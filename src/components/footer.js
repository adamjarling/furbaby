import React from "react"
import {
  FaAmazon,
  FaApple,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaYoutube,
  FaGooglePlay,
  FaSpotify,
} from "react-icons/fa"
import styled from "styled-components"
import ExternalLink from "../components/ExternalLink"
import Obfuscate from "react-obfuscate"
import LogoInline from "../components/LogoInline"
import MailingListSignup from "./MailingListSignup"
import { useStaticQuery, graphql } from "gatsby"

const Icon = styled.a`
  display: inline-block;
  padding: 0.75rem 1rem 0.5rem;
  border-bottom: none !important;
`

export default function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            distributors {
              amazonMusic
              appleMusic
              facebook
              instagram
              spotify
              youTubeChannel
              youTubeMusic
            }
          }
        }
      }
    `
  )

  const { distributors } = site.siteMetadata

  var socialMedia = [
    {
      service: "Spotify",
      url: distributors.spotify,
      icon: <FaSpotify />,
    },
    {
      service: "Apple Music",
      url: distributors.appleMusic,
      icon: <FaApple />,
    },
    {
      service: "YouTube",
      url: distributors.youTubeChannel,
      icon: <FaYoutube />,
    },
    {
      service: "Instagram",
      url: distributors.instagram,
      icon: <FaInstagram />,
    },
    {
      service: "Facebook",
      url: distributors.facebook,
      icon: <FaFacebook />,
    },
    {
      service: "YouTube Music",
      url: distributors.youTubeMusic,
      icon: <FaGooglePlay />,
    },
    {
      service: "Amazon Music",
      url: distributors.amazonMusic,
      icon: <FaAmazon />,
    },
  ]

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <LogoInline /> <br />
        <MailingListSignup />
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
        <Obfuscate
          email="aarling@gmail.com"
          headers={{
            subject: "Email from Furbaby.rocks",
          }}
          style={{
            display: "inline-block",
            padding: "0.75rem 1rem 0.5rem",
            border: "none",
          }}
        >
          <span className="icon is-size-4">
            <FaEnvelope />
          </span>
        </Obfuscate>
        <p>© {new Date().getFullYear()}. Made in Chicago, USA</p>
      </div>
    </footer>
  )
}
