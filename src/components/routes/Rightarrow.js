import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
function Rightarrow(props) {
    const {onClick}= props
    return (
        <div>
            <AiOutlineRight 
            style={{height:"30px",
            width:"30px",
            color:"white",
            background:"#38354B",
            borderRadius:"50%",
            padding:"5px",
            position:'relative',
            left:'97%',
            bottom:'100',
            cursor:"pointer"}} 
            onClick={onClick}/>
        </div>
    )
}

export default Rightarrow
