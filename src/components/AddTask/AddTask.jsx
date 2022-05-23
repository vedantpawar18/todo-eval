import React, {useState} from "react";
import Tasks from "../Tasks/Tasks";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos, setTodos] =useState("");
  const [value, setValue]=useState([]);

  const onDelete=(id)=>{
    let newTodos=todos.filter((todo) =>todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value={value} type="text" onChange={(e)=> {setValue(e.target.value);}}  />
      <button data-cy="add-task-button" onClick={() => {
        setTodos([
          ...todos, {id:Date.now(),value:value}
        ]);
        setValue("");
      }} >+</button>

      {todos.map((todo)=>{
        <Tasks key={todo.id} todo={todo} onDelete={onDelete} />
      })}
    </div>
  );
};

export default AddTask;
