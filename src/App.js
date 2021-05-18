import './App.css';
import Form from './Components/Form/Form';
import TodoList from './Components/TodoList/TodoList'
import React,{useState,useEffect} from 'react';

function App() {

  const [currentInput, setCurrentInput] = useState("");
  const [currentList, setCurrentList] = useState([]);

  console.log(currentInput)
    console.log(currentList)
  return (
    <div className="App">
      <Form
      setCurrentInput={setCurrentInput}
      currentList={currentList}
      setCurrentList={setCurrentList}/>

      <TodoList />
    </div>
  );
}

export default App;
