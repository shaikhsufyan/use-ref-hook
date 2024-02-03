// useRef hook create a mutable vriable which can not re-render component
// useRef directly acces dom element
// useRef hook return object in this we have key current in this have current data

import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    const [num, setNum] = useState();
    const [text,setText] = useState("");

    const track = (e) =>{
        setText(e.target.value)
         
    }
    const useref = useRef("");
    console.log(useref.current);
    useref.current.style.background="pink"
     const count = useRef(0);

     useEffect(()=>{
        count.current=count.current+1
     })
     console.log(count);
  return (
    <>
        <div style={{width:"500px",margin:"auto", background:"black", color:"white", textAlign:"center",padding:"22px"}}>
            <input style={{padding:"8px", fontSize:"18px",width:"90%"}} ref={useref} type='text' value={text} onChange={track} />
            <p>Number of Text {count.current}</p>
        </div>
    </>

  )
}

export default Ref