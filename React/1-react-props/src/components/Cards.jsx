import React from 'react'
import "./Cards.css"
const Cards = (props) => {
  return (
    <div className="cards" style={{ overflow: "hidden" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtOgawZYf2ctWixV9vMNRwzhT5B5ilZ6yEA&s" alt=""
        width={195} height={150}
        style={{ backgroundColor: "black", border: "2px solid black", alignContent: 'center' }} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>

    </div>

  )
}

export default Cards
ra