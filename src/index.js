import React from "react"
import ReactDOM from "react-dom"

import "./CSS/index.css"

const Website = () => {
  return (
    <div class="container bg-dark">
      <h1>Design system</h1>

      <div class="bg-light text-dark">light blue bg, with dark text</div>

      <div class="bg-white text-dark">white bg, with dark text</div>

      <div class="example-component bg-light text-white">
        light blue bg with a 20% alpha and white text
      </div>
    </div>
  )
}

ReactDOM.render(<Website />, document.querySelector("#root"))
