import React, { useState } from "react";
import "./App.css";
import DeleteIcon from '@material-ui/icons/Delete';

const List=(props)=>{
    const [line,setline]=useState(false);
    const givestyle=()=>{
         setline(true)
    }

    const deco={
        textDecoration:"line-through",
        textDecorationColor:"red",
        color:"green"
    }
 
    return(
        <>
            <div className="lists">
                <button  onClick={givestyle}><DeleteIcon/></button>
                 <li style={line?deco:null}>{props.data}</li>
            </div>
        </>
    )
}

export default List;