import { useState } from "react"

const Cronometro = () =>{

    const [counter,setCounter] = useState(0);

    const add = () =>{
        setCounter(counter + 1);
    }
    
    const sub = () =>{
        setCounter(counter - 1);
    }

    return (
        <>
            <div>
            <button onClick={add}>Sumar</button>
            <button onClick={sub}>Restar</button>
            </div>
            <h2>Saltos del Contador : </h2>
            <input id = "number" type="number" defaultValue="0"/>
            <h1>Contador : #{counter}</h1>
        </>
    )

}

export default Cronometro;