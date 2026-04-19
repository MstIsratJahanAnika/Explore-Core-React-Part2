import { useState } from "react"

export default function Counter(){
    const state = useState; // useState react theke ashbe jokhon variable ei nam e declare kora hobe
    const [count, setCount] = useState(0); //setState er syntax, variable er nam er shamne set likhe dao, and useState a initial value diye dao  

    // event handling function
    const handleAdd = ()=>{
        // console.log('Add button clicked'); //success
        // setCount(5);  //argument joto pass korbe count er man same hobe 

        // click er shathe shathe count barbe 
        const newCount = count + 1;
        setCount(newCount);
    }
    // css
    const CounterStyle = {
        border: '2px solid red'
    }
    return (
        <div style={CounterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}