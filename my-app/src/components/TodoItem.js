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
    width: "40%",
    backgroundColor: "rgba(251,255,210,0.7)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottom: "2px solid blue",
    height: "5vh"
}



function TodoItem() {
  return (
    <div style={todoitemStyle}>
        <div style={oneitemStyle}>
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    </div>
  );
}

export default TodoItem;
