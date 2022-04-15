import React from 'react'


export default class AppClass extends React.Component {

  state = {
    grid: { 'x': 2, 'y': 2 }
  }

  moveUp = () => {
    if(this.state.grid.y > 1) {
      this.setState({ ...this.state,
        grid: { ...this.state.grid, y: this.state.grid.y - 1 }
      })
    }
  }

  moveDown = () => {
    if(this.state.grid.y < 3) {
      this.setState({ ...this.state,
        grid: { ...this.state.grid, y: this.state.grid.y + 1 }
      })
    }
  }
  
  moveLeft = () => {
    if(this.state.grid.x > 1) {
      this.setState({ ...this.state,
        grid: { ...this.state.grid, x: this.state.grid.x - 1 }
      })
    }
  }
  
  moveRight = () => {
    if(this.state.grid.x < 3) {
      this.setState({ ...this.state,
        grid: { ...this.state.grid, x: this.state.grid.x + 1 }
      })
    }
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates (${this.state.grid.x}, ${this.state.grid.y})`}</h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <div id="grid">
          <div className={`${this.state.grid.x == 1 && this.state.grid.y == 1 ? 'square active' : 'square'}`}>{this.state.grid.x === 1 && this.state.grid.y === 1 ? 'B' : ''}</div>
          <div className={`${this.state.grid.x == 2 && this.state.grid.y == 1 ? 'square active' : 'square'}`}>{this.state.grid.x === 2 && this.state.grid.y === 1 ? 'B' : ''}</div>
          <div className={`${this.state.grid.x == 3 && this.state.grid.y == 1 ? 'square active' : 'square'}`}>{this.state.grid.x === 3 && this.state.grid.y === 1 ? 'B' : ''}</div>
          <div className={`${this.state.grid.x == 1 && this.state.grid.y == 2 ? 'square active' : 'square'}`}>{this.state.grid.x === 1 && this.state.grid.y === 2 ? 'B' : ''}</div>
          <div className={`${this.state.grid.x == 2 && this.state.grid.y == 2 ? 'square active' : 'square'}`}>{this.state.grid.x === 2 && this.state.grid.y === 2 ? 'B' : ''}</div>
          <div className={`${this.state.grid.x == 3 && this.state.grid.y == 2 ? 'square active' : 'square'}`}>{this.state.grid.x === 3 && this.state.grid.y === 2 ? 'B' : ''}</div>
          <div className={`${this.state.grid.x == 1 && this.state.grid.y == 3 ? 'square active' : 'square'}`}>{this.state.grid.x === 1 && this.state.grid.y === 3 ? 'B' : ''}</div>
          <div className={`${this.state.grid.x == 2 && this.state.grid.y == 3 ? 'square active' : 'square'}`}>{this.state.grid.x === 2 && this.state.grid.y === 3 ? 'B' : ''}</div>
          <div className={`${this.state.grid.x == 3 && this.state.grid.y == 3 ? 'square active' : 'square'}`}>{this.state.grid.x === 3 && this.state.grid.y === 3 ? 'B' : ''}</div>
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button onClick={this.moveLeft} id="left">LEFT</button>
          <button onClick={this.moveUp} id="up">UP</button>
          <button onClick={this.moveRight} id="right">RIGHT</button>
          <button  onClick={this.moveDown} id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
