import React from 'react';
import '../App.css';

const todoitemStyle = {
    backgroundColor: "rgba(251,255,210,0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}
const oneitemStyle = {
    margin: "1%",
    width: "40%",
    boxShadow: "0px 10px 28px -4px rgba(166,255,158,1)",
    backgroundColor: "rgba(251,255,210,0.7)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-around",
    padding: "2%",
    height: "5vh"
}

function TodoItem(props) {
  return (
    <div style={todoitemStyle}>
        <div style={oneitemStyle}>
            <input type="checkbox" checked={props.item.completed} />
            <p style={{padding:"10px"}}>{props.text}, !+ {props.completed === true ? 1 : 2}</p>
        </div>
    </div>
  );
}

export default TodoItem;

