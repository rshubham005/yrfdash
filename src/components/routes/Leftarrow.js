import React from 'react'
import { AiOutlineLeft } from "react-icons/ai";
function Leftarrow(props) {
    const {onClick}=props
    return (
        <div>
           <AiOutlineLeft 
           style={{height:"30px",
           width:"30px",
           zIndex:"9",
           color:"white",
           background:"#38354B",
           borderRadius:"50%",
           padding:"5px",
           position:'relative', 
           top:'100',
           cursor:"pointer"}} 
           onClick={onClick} />
        </div>
    )
}

export default Leftarrow
