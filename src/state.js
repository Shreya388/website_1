import React, {useState} from "react";

const Used = () => {
    const [text, setText] = useState("");
    
    function add(){
        setText(text + 't');
    }

    function sub(){
        setText(text - 1);
    }

    return (   
        <div>
            <button onClick={add}>+</button>
            {text}
            <button onClick={sub}>-</button>
        </div>
        
     );
}
 
export default Used;