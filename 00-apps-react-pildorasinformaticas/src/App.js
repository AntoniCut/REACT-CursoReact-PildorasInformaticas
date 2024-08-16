//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************


import './App.css';
import { HeaderComponent } from '././HeaderComponent/jsx/HeaderComponent.jsx';
import { Titulo } from './components/Titulo.jsx';
import { UseState } from './components/UseState.jsx';
import { UseRef } from './components/UseRef.jsx';
import { ConversorEuroDolar } from './components/ConversorEuroDolar.jsx';
import { Arrays } from './components/Arrays.jsx';
import { Contador } from './components/Contador.jsx';
import { Saludo } from './components/Saludo.jsx';
import { RenderizadoCondicional } from './components/RenderizadoCondicional.jsx';
import { EjercicioPractico1 } from './components/EjercicioPractico1.jsx';


/**
 * 
 * @returns {JSX.Element}
 */
const App = () => {


   const usuario = {
      nombre: "Antonio",
      apellido: "Cutillas",
      edad: 48,
      genero: "masculino"
   }

   const usuario2 = {
      nombre: "Antonio",
      apellido: "Cutillas",
      edad: 48,
      genero: "masculino"
   }


   



   return (

      <div className="App">

         {/* **********  Cabecera del Proyecto  ********** */}
         <HeaderComponent />


         {/* **********  Contenido Principal de la Aplicación  ********** */}
         <main className="App-main">


            {/* **********  1. Use State  ********** */}
            <Titulo nameTitulo="----------  1. Use State  ----------" />
            <UseState />
            <hr style={{ marginTop: "50px" }} />


            {/* **********  2. Use Ref  ********** */}
            <Titulo nameTitulo="----------  2. Use Ref  ----------" />
            <UseRef />
            <hr style={{ marginTop: "50px" }} />


            {/* **********  3. Conversor Euro Dolar  ********** */}
            <Titulo nameTitulo="----------  3. Conversor Euro Dolar  ----------" />
            <ConversorEuroDolar />
            <hr style={{ marginTop: "50px" }} />


            {/* **********  4. Arrays  ********** */}
            <Titulo nameTitulo="----------  4. Arrays  ----------" />
            <Arrays />
            <hr style={{ marginTop: "50px" }} />


            {/* **********  5. Trabajo con Componentes I  ********** */}
            <Titulo nameTitulo="----------  5. Trabajo con Componentes I  ----------" />
            <Contador />
            <hr style={{ marginTop: "50px" }} />


            {/* **********  6. Trabajo con Componentes II  ********** Utilizando Props  **********/}
            <Titulo nameTitulo="----------  6. Trabajo con Componentes II - Props  ----------" />
            <Saludo usuario={usuario} />
            <hr style={{ marginTop: "50px" }} />


            {/* **********  7. Renderizado Condicional  **********/}
            <Titulo nameTitulo="----------  7. Renderizado Condicional  ----------" />
            <RenderizadoCondicional usuario2={usuario2} />
            <hr style={{ marginTop: "50px" }} />


            {/* **********  8. Ejercicio Practico 1  **********/}
            <Titulo nameTitulo="----------  8. Ejercicio Practico 1  ----------" />
            <EjercicioPractico1 />
            <hr style={{ marginTop: "50px" }} />

         </main>

      </div>
   );
}


export default App;
