//  *************************************************
//  **********  /src/components/09-styled.js  **********
//  *************************************************


import styled from "styled-components";


//  *****  Componente Estilo  --  MiCaja  -----  div  -----
const MiCaja = styled.div`

    width: 300px;
    height: 200px;
    line-height: 200px;
    font-size: 48px;
    font-weight: bold;
    /* margin: 150px; */
    color: white;
    background-color: blue;
    transition: All 600ms ease-in-out;
    &:hover {
        background-color: red;
    }
`;


//  *****  Componente Estilo  --  Boton  -----  button  -----
const Boton = styled.button`

    width: 120px;
    height: 50px;
    margin: 20px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2), 
                -4px -4px 10px rgba(255, 255, 255, 0.3);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
        box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.2),
                    inset -4px -4px 10px rgba(255, 255, 255, 0.3);
        transform: translateY(2px);
    }

    &:active {
        box-shadow: inset 6px 6px 15px rgba(0, 0, 0, 0.3),
                    inset -6px -6px 15px rgba(255, 255, 255, 0.4);
        transform: translateY(4px);
    }
`;


export {
    MiCaja,
    Boton
}