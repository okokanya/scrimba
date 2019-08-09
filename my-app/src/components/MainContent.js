import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

function MainContent () {
  let date = new Date();
  let hours = date.getDay();

  const styles = {
    fontSize: 30
  }

  if (hours > 12) {
    styles.color = "red";
  }

  return (
    <main>
        <ul className="mainCont" style={styles} >
            <div className="firstBlock">its abo!!ut {hours}</div>

            <div className="secondBlock">
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />

            </div>
            <div className="thirdBlock">1</div>
        </ul>
    </main>
  );
}

export default MainContent;
