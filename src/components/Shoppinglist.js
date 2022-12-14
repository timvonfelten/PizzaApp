import React from "react";
import Todo from "./Todo";
import { useState, useEffect } from "react";

const ShoppingList = (props) => {
  const checkList = [
    {
      key: 1,
      category: "Einkaufsliste",
      description: "Mehl",
      text: props.ingredients.mehl,
      done: false,
    },
    {
      key: 2,
      category: "Einkaufsliste",
      description: "Hefe",
      text: props.ingredients.hefe,
      done: false,
    },
    {
      key: 3,
      category: "Einkaufsliste",
      description: "Honig",
      text: props.ingredients.honig,
      done: false,
    },
    {
      key: 4,
      category: "Einkaufsliste",
      description: "Mozarella",
      text: props.ingredients.mozarella,
      done: false,
    },
    {
      key: 5,
      category: "Einkaufsliste",
      description: "Tomatensauce",
      text: props.ingredients.tomatensauce,
      done: false,
    },
    {
      key: 6,
      category: "Einkaufsliste",
      description: "Basilikum",
      text: props.ingredients.basilikum,
      done: false,
    },
    {
      key: 7,
      category: "Einkaufsliste",
      description: "Ruccola",
      text: props.ingredients.ruccola,
      done: false,
    },
    {
      key: 8,
      category: "Einkaufsliste",
      description: "Pilze",
      text: props.ingredients.pilze,
      done: false,
    },
    {
      key: 9,
      category: "Einkaufsliste",
      description: "Artischocken",
      text: props.ingredients.artischocken,
      done: false,
    },
    {
      key: 10,
      category: "Einkaufsliste",
      description: "Gemüse",
      text: props.ingredients.gemuese,
      done: false,
    },
  ];



  useEffect(() => {
    setTodos(checkList);
  }, [props.ingredients]);   // 

  // Zählen wie lange alle Elementet sind
  const [opencount, CountOpenTodos] = useState(0);


  //todos.filter(todo => todo.category === props.category).map((item, index) => {        return blblal
  const [todos, setTodos] = useState(checkList);

  // Unerledigte Aufgaben zählen
  const countOpen = () => {
    const donetodos = todos.filter((item) => {
      if (item.text !== 0) {
        return !item.done;
      }
      else{
        return item.done;
      }
    });
    CountOpenTodos(donetodos.length);
  };

  //State abfragen und verändern, State sollte nie direkt verändert werden.
  const changeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].done) {
      newTodos[index].done = false;
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  };

  // Nur unerledigte Check ausführen wenn todos geändert wird mittels useEffect
  useEffect(() => {
    countOpen();
  }, [todos]);
  
  return (
    <div className= "mt-10">
      <div className="">
        <h1 className="text-3xl bg-white text-black-800 p-5 pb-1 pl-0 mt-5 font-semibold tracking-wider">
          {props.category}
        </h1>
        <h2 className="pb-8 pl-0 pt-2 text-s font-semibold tracking-wide bg-white">
          Unerledigte Einkäufe: {opencount}
        </h2>
      </div>
      <div className="m-0 pb-0">
        {todos.map((item, index) => {
          return (
            <Todo
              category={item.category}
              description={item.description}
              text={item.text}
              done={item.done}
              key={index}
              index={index}
              onChangeTodo={changeTodo}
            ></Todo>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingList;