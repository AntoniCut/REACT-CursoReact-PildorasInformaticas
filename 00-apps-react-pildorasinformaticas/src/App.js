//  ***********************************
//  **********  /src/App.js  **********
//  ***********************************



import logo from './logo.svg';
import './App.css';
import { Titulo } from './components/Titulo.jsx';
import { UseState } from './components/UseState.jsx';
import { UseRef } from './components/UseRef.jsx';
import { ConversorEuroDolar } from './components/ConversorEuroDolar.jsx';
import { Arrays } from './components/Arrays.jsx';
import { Contador } from './components/Contador.jsx';
import { Saludo } from './components/Saludo.jsx';
import { RenderizadoCondicional }from './components/RenderizadoCondicional.jsx';



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

         <header className="App-header">

            <div className='logo-link'>
               <img src={logo} className="App-logo" alt="logo" />
               <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> React </a>
            </div>

            <h1 className="titulo-proyecto">

               <span className='texto-blanco'> C </span>
               <span className='texto-azul'>   u </span>
               <span className='texto-blanco'> r </span>
               <span className='texto-azul'>   s </span>
               <span className='texto-blanco'> o </span>

               <span className='texto-azul'>   R </span>
               <span className='texto-blanco'> e </span>
               <span className='texto-azul'>   a </span>
               <span className='texto-blanco'> c </span>
               <span className='texto-azul'>   t </span>

               <span className='texto-blanco'> </span>
               <span className='texto-blanco'> - </span>
               <span className='texto-blanco'> </span>

               <span className='texto-azul'>   P </span>
               <span className='texto-blanco'> i </span>
               <span className='texto-blanco'> l </span>
               <span className='texto-azul'>   d </span>
               <span className='texto-blanco'> o </span>
               <span className='texto-azul'>   r </span>
               <span className='texto-blanco'> a </span>
               <span className='texto-azul'>   s </span>
               <span className='texto-blanco'> I </span>
               <span className='texto-azul'>   n </span>
               <span className='texto-blanco'> f </span>
               <span className='texto-azul'>   o </span>
               <span className='texto-blanco'> r </span>
               <span className='texto-azul'>   m </span>
               <span className='texto-blanco'> á </span>
               <span className='texto-azul'>   t </span>
               <span className='texto-blanco'> i </span>
               <span className='texto-azul'>   c </span>
               <span className='texto-blanco'> a </span>
               <span className='texto-azul'>   s </span>

            </h1>

         </header>


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

         </main>

      </div>
   );
}


export default App;
