import React from "react"

class Apptest extends React.Component {
    
    constructor() {
        super()
        this.state = {
            isLoggedIn: true,
            answer: "Yes",
            day: "monday"
        }
    }
    render () {
        return (
            <div>
                <Header username="Anya" />
                <h1>You are currently logged {this.state.isLoggedIn ? "444in" : "out"}</h1>
                <p>{this.state.answer}</p>
                <p>{this.state.day}!!!</p>
                <Greeting />
            </div>
        )
    }
}

// #2
class Header extends React.Component {
    render () {
        return (
            <header>
            Welcome, {this.props.username}!
            </header>
        )
    }
}


// #3
class Greeting extends React.Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return(
            <h1>Good {timeOfDay} to you, madam anylia!</h1>

        )
    }
}

export default Apptest;
