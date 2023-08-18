import React, { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
// import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

function App() {
  const [list,setlist] = useState('');
  const [newitem,setnewitem] = useState([])
  const [line,setline] = useState(false);


  const listEvent = (event) =>{ 
    setlist(event.target.value);
  }
  const Addlist = () =>{
    if(list === "")
    {
      alert("Please Enter your Todo")
    }
    else{
      setnewitem((prev)=>{
        return [...prev,list]
      })
      setlist('')
    }
  }

  const deleteitem = (index) => {
      const newTodoItem = [...newitem]
      newTodoItem.splice(index,1);
      setnewitem(newTodoItem);
  }

  const editItem = (index)=>{
    const newTodoItem = [...newitem]
    const item = newTodoItem[index];
    console.log(item)
    const updatedItem = prompt("Update Your Todo",item)
    newTodoItem.splice(index,1,updatedItem)

    if(updatedItem === null || updatedItem === "")
    return
    else{
      setnewitem(newTodoItem)
    }
  }
  
  return (
    <>
      <div className="main_div">

        <h1>ToDo List</h1>

        <div className="inputField">
        <input placeholder="Enter Your ToDo's" type="text" className="input" value={list} onChange={listEvent}/>
        
        {/* <Tooltip title="Add" arrow> */}
          <Button className="Add" onClick={Addlist}>
            <AddIcon />
          </Button>
        {/* </Tooltip> */}

        <hr />
        </div>
          
        <div className="todolist">
          <ul>
            {newitem.map((value)=>{
              return (
                <li className="item">
                 <span onClick={deleteitem}><DeleteIcon className="delete"/></span>
                 <span onClick={editItem}><EditNoteIcon className="delete"/></span>
                 <li style={{textDecoration : line ? "line-through" : "none"}}>{value}</li>
                 
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
