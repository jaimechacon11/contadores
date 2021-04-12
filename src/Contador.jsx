import { useState } from "react";
import "./index.css";

const Contador = () =>{

    const [counter,setCounter] = useState(0);

    const add = () =>{
        setCounter(counter + Number(number));
    }
    
    const sub = () =>{
        setCounter(counter - Number(number));
    }
    
    const reiniciar = () =>{
        setCounter(0);
    }

    const [number, setNumber] = useState(1);

    const handleNumberChange = (number) => {
        setNumber(number.target.value);
    }

    return (
        <div className="container">
            <h2 className="saltos">Intervalos del Contador : </h2>
            <input className = "number" type="number" defaultValue="1" onChange={handleNumberChange}/>
            <div className= "botones">
                <button className="b1" onClick={sub}>Restar</button>
                <button className="br" onClick={reiniciar}>Reiniciar</button>
                <button className="b2" onClick={add}>Sumar</button>
            </div>
            <h1 className="contador">Contador : {counter}</h1>
        </div>
    )

}

export default Contador;