import React from "react"
import Card from "./Card"
import fThis from "../images/hoofprint-f-this-no.jpg"
import raceTech from "../images/race-after-technology.jpg"
import nebula from "../images/nebula.jpeg"

export default function InspiredBy() {
  return (
    <section className="hero is-black">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">Inspired By</h2>
          <h3 className="subtitle">It's time for a change</h3>
          <div className="columns">
            <div className="column">
              <Card
                image={fThis}
                name="Hoofprint Chicago Nicole Marroquin F* This Series"
                url="https://www.hoofprintchicago.com/"
              />
            </div>
            <div className="column">
              <Card
                image={raceTech}
                name="Ruha Benjamin's book Race After Technology"
                url="https://www.ruhabenjamin.com/"
              />
            </div>
            <div className="column">
              <Card
                image={nebula}
                name="Nebula - Get out of your mind!"
                url="https://www.heavypsychsounds.com/bands/nebula.htm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
