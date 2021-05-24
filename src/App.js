import './App.css';
import Form from './Components/Form/Form';
import TodoList from './Components/TodoList/TodoList'
import React,{useState,useEffect} from 'react';

function App() {

  const [currentInput, setCurrentInput] = useState("");
  const [currentList, setCurrentList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  // console.log(currentInput)
    // console.log(currentList)
      // console.log(status)

      useEffect(()=>{
        getList();
      }, [])

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
        saveList();
      }, [currentList, status])

      const saveList = () => {
        localStorage.setItem("list", JSON.stringify(currentList));
      }

      // save to localstorage
      const getList = () => {
        if (localStorage.getItem("list") === null ){
          localStorage.setItem("list", JSON.stringify([]));
        }else{
          let curList =JSON.parse( localStorage.getItem("list"));
          console.log(curList);
          setCurrentList(curList);
        }
      }

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
