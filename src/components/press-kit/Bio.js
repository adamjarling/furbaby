import React from "react"
import ExternalLink from "../../components/ExternalLink"
import Obfuscate from "react-obfuscate"
import FandTS from "../FandTS"

function PressKitBio(props) {
  return (
    <>
      <h2 className="title">Bio</h2>
      <div className="content">
        <p>
          <FandTS /> records demos, reads, does yoga, drinks wine and takes long
          walks on the beach in Chicago USA.
        </p>
        <p>
          <FandTS /> is an alt/garage/psych art project hatched for the 2020s.
          The band experiments with music, videos, photography and reflects
          what's going on in a world that just got fast-forwarded into the
          future.
        </p>
        {/* <p className="is-italic">
          "There once was a year where everyone had a lot of time on their
          hands. For all the musicians out there, why not finish up old demos
          and write a lot of new stuff? Total no pressure way to try different
          tones, textures, lyrics and saying "why not?" a lot."
        </p> */}

        <p>
          In past and current lives <FandTS /> have toured and/or recorded with{" "}
          <ExternalLink url="https://thelastvegas.com">
            The Last Vegas
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://urgeoverkill.com/">
            Urge Overkill
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.gethip.com/site/artists/cynics/">
            The Cynics
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.warriorsoulofficial.com/">
            Warrior Soul
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.abbarama.com/">ABBARAMA</ExternalLink>,{" "}
          <ExternalLink url="https://en.wikipedia.org/wiki/The_Dogs_D%27Amour">
            Tyla and Dogs 'D Amour
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.blackangusrock.com/">
            Black Angus
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.facebook.com/EarlySound">
            Early Sound
          </ExternalLink>
          ,{" "}
          <ExternalLink url="https://www.keithscottblues.com/">
            Keith Scott Blues Band
          </ExternalLink>
          , <ExternalLink url="#">The Electric Blues Junkies</ExternalLink>, and
          others.
        </p>
        <p>
          <FandTS /> may or may not play live, but if so it'd be nice to do a
          little tour of Spain.{" "}
          <Obfuscate
            email="aarling@gmail.com"
            headers={{
              subject: "Email from Furbaby.rocks",
            }}
          >
            Interested?
          </Obfuscate>
        </p>
        <p>
          Coming up...10 singles &amp; accompanying videos over the next few
          months.
        </p>
      </div>
    </>
  )
}

PressKitBio.propTypes = {}

export default PressKitBio
