import './App.css';
import Form from './Components/Form/Form';
import TodoList from './Components/TodoList/TodoList'
import React,{useState,useEffect} from 'react';

function App() {

  const [currentInput, setCurrentInput] = useState("");
  const [currentList, setCurrentList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  console.log(currentInput)
    console.log(currentList)
      console.log(status)

      const filterHandler = () => {
        switch (status) {
          case 'Completed':
            setFilteredList(currentList.filter(item => item.completed === true))
            break;
          case 'Not Completed':
            setFilteredList(currentList.filter(item => item.completed === false))
            break;
          default:
            setFilteredList(currentList)
            break;
        }
      }

      useEffect(()=>{
        filterHandler();
      }, [currentList, status])

  return (
    <div className="App">
      <Form
      currentInput={currentInput}
      setCurrentInput={setCurrentInput}
      currentList={currentList}
      setCurrentList={setCurrentList}
      setStatus={setStatus} />

      <TodoList
      currentList={currentList}
      filteredList={filteredList}
      setCurrentList={setCurrentList}
      filteredList={filteredList}
      />
    </div>
  );
}

export default App;
