import React, { useState } from "react";
import "./App.css";
import List from "./List";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const App=()=>{
  const [data,setdata]=useState();
  const [items,setitem]=useState([]);
  const inputevent=(event)=>setdata(event.target.value);
  const addlist=()=>{
      setitem((preval)=>{
        return[...preval,data];
      });
      setdata("");
    }




  return (
    <>
    <div className="content_center">
      <div className="card">
        <div className="title">
          <h1>TODO LIST</h1>
        </div>
        <div className="inputs">
          <input type="text" name="" onChange={inputevent} value={data} id="" placeholder="Please Enter Item"/>
          <Button onClick={addlist}><AddIcon/></Button>
        </div>
        <div className="items">
          {items.map((data,index)=>{
            return (
              <>
                <List
                id={index}
                data={data}
                />
              </>
            )
        })}
        </div>
      </div>
    </div>
   
    </>
  )
}

export default App;