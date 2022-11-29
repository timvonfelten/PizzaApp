import React from "react";
import Todo from "./Todo";
import { useState, useEffect } from "react";

var doneCount = 0;

const ShoppingList = (props) => {
  const checkList = [
    {
      category: "Einkaufsliste",
      description: "Mehl",
      text: props.ingredients.mehl,
      done: false,
    },
    {
      category: "Einkaufsliste",
      description: "Hefe",
      text: props.ingredients.hefe,
      done: false,
    },
    {
      category: "Einkaufsliste",
      description: "Honig",
      text: props.ingredients.honig,
      done: false,
    },
    {
      category: "Einkaufsliste",
      description: "Mozarella",
      text: props.ingredients.mozarella,
      done: false,
    },
    {
      category: "Einkaufsliste",
      description: "Tomatensauce",
      text: props.ingredients.tomatensauce,
      done: false,
    },
  ];

  useEffect(() => {
    setTodos(checkList);
  }, [props.ingredients]);

  // Zählen wie lange alle Elementet sind
  const CountCloseTodos = useState(0);
  const [opencount, CountOpenTodos] = useState(0);

  const progress = (100 / checkList.length) * (doneCount + 1);

  // Checks Filter, damit nur jene verwendet werden, welche der aktuellen Kategorie angehören.
  const todosfilterd = checkList.filter(
    (todo) => todo.category === props.category
  );

  //todos.filter(todo => todo.category === props.category).map((item, index) => {        return blblal
  const [todos, setTodos] = useState(todosfilterd);

  // Unerledigte Aufgaben zählen
  const countOpen = () => {
    const donetodos = todos.filter((item) => {
      return !item.done;
    });
    CountOpenTodos(donetodos.length);
  };

  //State abfragen und verändern, State sollte nie direkt verändert werden.
  const changeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].done) {
      newTodos[index].done = false;
      doneCount--;
    } else {
      newTodos[index].done = true;
      doneCount++;
    }
    setTodos(newTodos);
    updateProgress();
  };

  // Nur unerledigte Check ausführen wenn todos geändert wird mittels useEffect
  useEffect(() => {
    countOpen();
  }, [todos]);

  const updateProgress = () => {
    console.log("update progress:", { doneCount }, "übergebener % value:", {
      progress,
    });
    console.log("");
    const data = (100 / checkList.length) * doneCount;
    // Daten an Parent zurückgebgen für ProgressBar
    //props.childToParent(data)
  };

  return (
    <div className="bg-gray-100 mt-10">
      <div className="">
        <h1 className="text-3xl bg-white text-black-800 p-5 pb-1 pl-0 underline underline-offset-8 mt-5 font-semibold tracking-wider">
          {props.category}
        </h1>
        <h2 className="pb-6 pl-0 pt-2 text-s font-semibold tracking-wide bg-white">
          Unerledigte Einkäufe: {opencount}
        </h2>
      </div>
      <div className="m-0 pb-0">
        {todos.map((item, index) => {
          return (
            <Todo
              proprequiered={props.category}
              category={item.category}
              description={item.description}
              text={item.text}
              website={item.website}
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