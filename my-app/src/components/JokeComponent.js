import React from 'react';
import '../App.css';

// function JokeComponent (props) {
//     const jokecolor = {
//         color: "green"
//     }
//     if (!props.question) {
//         jokecolor.color = "yellow"
//     }
//   return (
//     <div className="allJoke" style={jokecolor}>
//         <p style={{display: !props.question && "none"}}>Q: {props.question}</p>
//         <p>A: {props.punchLine}</p>
//     </div>
//   );
// }

// export default JokeComponent;

class JokeComponent extends React.Component {
    

  
  render() {
    const jokecolor = {
      color: "green"
  }
  if (!this.props.question) {
      jokecolor.color = "yellow"
  }

      return (
    <div className="allJoke" style={jokecolor}>
        <p style={{display: !this.props.question && "none"}}>Q: {this.props.question}</p>
        <p>A: {this.props.punchLine}</p>
    </div>
      )
  }
}

export default JokeComponent
