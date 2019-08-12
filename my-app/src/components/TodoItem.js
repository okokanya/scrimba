import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
      this.setState(prevState => {
        return {
            count: prevState.count + 1
        }
    })
      console.log('fff')
    }
    render() {
        return (
            <div style={{padding:"90px"}}>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App
