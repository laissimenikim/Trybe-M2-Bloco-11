import React from "react";
import './App.css';

const List = () => {
  return (
  <div>
    <li>{"arroz"}</li>
    <li>{"arroz"}</li>
    <li>{"arroz"}</li>
  </div>
  );
}

const compromisso = ["passear", "ficar rica"]

const Task = (value) => {
    return (
      <div>
        <List/>
        {compromisso.map((element) => <li>{element}</li>)}
            {/*Quando se retorna a List, ele entende como um elemento HTML, e em compromisso, como tem um JS criado, é necessário engloba-lo dentro de chaves para lee entender que é uma função JS.*/}
      </div>
    )    
  }


export default Task;