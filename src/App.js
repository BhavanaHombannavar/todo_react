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
      currentInput={currentInput}
      setCurrentInput={setCurrentInput}
      currentList={currentList}
      setCurrentList={setCurrentList}/>

      <TodoList
      currentList={currentList}
      setCurrentList={setCurrentList}/>
    </div>
  );
}

export default App;
