//  ***************************************************
//  **********  /src/Components/Contador.js  **********
//  ***************************************************

import React, {useState} from "react"


//  **********  Componente 'Contador'  **********
export const Contador = () => {

    const [cuenta, setContador] = useState(1)
  
    const incrementar = () => {
      setContador(cuenta + 1)
    }
  
    const decrementar = () => {
      setContador(cuenta - 1)
    }

    const handleChange = (e) => {
      setContador(Number(e.target.value));
    };
  
    return(
      <div>
        <button onClick={decrementar}> - </button>
        <input type="text" value={cuenta} size="2" style={{textAlign: "center"}} onChange={handleChange} />
        <button onClick={incrementar}> + </button>
      </div>
    )
  
  }

  