import React, { useState } from "react";
import "./index.css"; 
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Listcom from "./Listcom";

const ToDoList = () => {
    const [ items,setItems] = useState("")
    const [newItems,newsetItems]= useState([]) 
    // create empty arrey

  const itemEvent = (event) =>
    {
      setItems(event.target.value);
    // btarget=  return the element that triggred the element
    }
    // click karne pe list mai item add ho jaye
const listItems = () =>
{
    newsetItems((prevValue) =>
      // prevvalue can ascess all the data of usestate arrey
    {
        return [...prevValue,items]
    //  here prevvalue add all the items in this using spred operator and store it in new itmes  
    }
    );
    setItems("");
}
    return (
        <>
            <div className="main_div">
                <div className="card_div">
                    <h1>ToDo List</h1>
                    <input type="text" value={items} placeholder="Add List itmes" onChange={itemEvent}  />
                    <Button className="newtn" onClick={listItems}>
                    <AddIcon />
                    </Button>
                    <ul className="list">
                            {newItems.map((val)=>
                            {
                                return <Listcom text={val} />
                            })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ToDoList;