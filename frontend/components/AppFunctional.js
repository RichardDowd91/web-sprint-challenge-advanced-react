import React, { useState } from 'react'

export default function AppFunctional(props) {
  const [grid, setGrid] = useState({ 'x': 2, 'y': 2 })
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  const moveUp = () => {
    if (grid.y > 1) {
      setGrid({ ...grid, 'y': grid.y - 1 })
      setCounter(counter + 1)
      setMessage('')
    }
    else {
      setMessage("You can't go up")
    }
  }

  const moveDown = () => {
    if (grid.y < 3) {
      setGrid({ ...grid, 'y': grid.y + 1 })
      setCounter(counter + 1)
      setMessage('')
    }
    else {
      setMessage("You can't go down")
    }
  }

  const moveLeft = () => {
    if (grid.x > 1) {
      setGrid({ ...grid, 'x': grid.x - 1 })
      setCounter(counter + 1)
      setMessage('')
    }
    else {
      setMessage("You can't go left")
    }
  }

  const moveRight = () => {
    if (grid.x < 3) {
      setGrid({ ...grid, 'x': grid.x + 1 })
      setCounter(counter + 1)
      setMessage('')
    }
    else {
      setMessage("You can't go right")
    }
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({grid.x}, {grid.y})</h3>
        <h3 id="steps">You moved {counter} times</h3>
      </div>
      <div id="grid">
        <div className={`${grid.x == 1 && grid.y == 1 ? 'square active' : 'square'}`}>{grid.x === 1 && grid.y === 1 ? 'B' : ''}</div>
        <div className={`${grid.x == 2 && grid.y == 1 ? 'square active' : 'square'}`}>{grid.x === 2 && grid.y === 1 ? 'B' : ''}</div>
        <div className={`${grid.x == 3 && grid.y == 1 ? 'square active' : 'square'}`}>{grid.x === 3 && grid.y === 1 ? 'B' : ''}</div>
        <div className={`${grid.x == 1 && grid.y == 2 ? 'square active' : 'square'}`}>{grid.x === 1 && grid.y === 2 ? 'B' : ''}</div>
        <div className={`${grid.x == 2 && grid.y == 2 ? 'square active' : 'square'}`}>{grid.x === 2 && grid.y === 2 ? 'B' : ''}</div>
        <div className={`${grid.x == 3 && grid.y == 2 ? 'square active' : 'square'}`}>{grid.x === 3 && grid.y === 2 ? 'B' : ''}</div>
        <div className={`${grid.x == 1 && grid.y == 3 ? 'square active' : 'square'}`}>{grid.x === 1 && grid.y === 3 ? 'B' : ''}</div>
        <div className={`${grid.x == 2 && grid.y == 3 ? 'square active' : 'square'}`}>{grid.x === 2 && grid.y === 3 ? 'B' : ''}</div>
        <div className={`${grid.x == 3 && grid.y == 3 ? 'square active' : 'square'}`}>{grid.x === 3 && grid.y === 3 ? 'B' : ''}</div>
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button onClick={moveLeft} id="left">LEFT</button>
        <button onClick={moveUp} id="up">UP</button>
        <button onClick={moveRight} id="right">RIGHT</button>
        <button onClick={moveDown} id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
