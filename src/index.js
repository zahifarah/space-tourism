import React from "react"
import ReactDOM from "react-dom"

import "./CSS/index.css"

const Website = () => {
  return (
    <div class="container bg-dark text-white">
      <h1>Design system</h1>

      <section id="colors">
        <h2>
          <span>01</span> colors
        </h2>

        <div class="flex">
          <div style={{ flexGrow: "1" }}>
            <div
              class="bg-dark text-white"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>
              #0B0D17
            </div>
            <p>
              <span class="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span class="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>

          <div style={{ flexGrow: "1" }}>
            <div
              class="bg-accent text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>
              #D0D6F9
            </div>
            <p>
              <span class="text-accent">RGB</span> 208, 214, 249
            </p>
            <p>
              <span class="text-accent">HSL</span> 231°, 77%, 90%
            </p>
          </div>

          <div style={{ flexGrow: "1" }}>
            <div
              class="bg-white text-dark"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}>
              #FFFFFF
            </div>
            <p>
              <span class="text-accent">RGB</span> 255, 255, 255
            </p>
            <p>
              <span class="text-accent">HSL</span> 0°, 0%, 100%
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

ReactDOM.render(<Website />, document.querySelector("#root"))
