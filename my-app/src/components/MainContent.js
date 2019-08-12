import React from 'react';
import '../App.css';
import JokeComponent from './JokeComponent';
import TodoItem from './TodoItem';
import ProdCompItem from './ProdCompItem';


import jokesData from './jokesData';
import products from './products';
import todosData from './todosData'



function MainContent () {

  const newProdList = products.map (oneProdItem => 
    <ProdCompItem name = {oneProdItem.name} description= {oneProdItem.description} price = {oneProdItem.price} />
  )

  const newJokes = jokesData.map (onejoke => 
    <JokeComponent question={onejoke.question} punchLine={onejoke.punchLine} />
  )

  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();

  const minstyles = {
    color: "blue"
  };

  const styles = {
    fontSize: 30
  }

  const todoes = todosData.map (item => 
    <TodoItem key={item.id} item={item} />

    )

  return (
    <main>
        <ul className="mainCont" style={styles} >
            <div className="firstBlock" style={minstyles} >its about {hours}:{min}</div>

            <div className="secondBlock">
              {todoes}
              {/* {newProdList} */}
              {newJokes}

            </div>
            <div className="thirdBlock">1</div>
        </ul>
    </main>
  );
}

export default MainContent;
