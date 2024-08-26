//  ************************************
//  **********  /src/App.jsx  **********
//  ************************************


import './App.css';
import { HeaderComponent } from './HeaderComponent/jsx/HeaderComponent.jsx';
import { Titulo } from './components/00-Titulo.jsx';
import { UseState } from './components/01-UseState.jsx';
import { UseRef } from './components/02-UseRef.jsx';
import { ConversorEuroDolar } from './components/03-ConversorEuroDolar.jsx';
import { Arrays } from './components/04-Arrays.jsx';
import { Contador } from './components/05-Contador.jsx';
import { Saludo } from './components/06-Saludo.jsx';
import { RenderizadoCondicional } from './components/07-RenderizadoCondicional.jsx';
import { EjercicioPractico1 } from './components/08-EjercicioPractico1.jsx';
import { Boton, MiCaja } from './components/09-styled.js';



//  ----------  Definición de Objetos  ----------
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


//  **********  Documentación  **********
/**
 * **********  Componente Principal App()  **********
 * @returns {JSX.Element}
 */

//  **********  Componente Padre App()  **********
export const App = () => {


    return (

        <div className="App">

            {/* **********  Cabecera del Proyecto  ********** */}
            <HeaderComponent />


            {/* **********  Contenido Principal de la Aplicación  ********** */}
            <main className="App-main">


                {/* **********  1. Use State  ********** */}
                <Titulo nameTitulo="----------  1. Use State  ----------" />
                <UseState />
                


                {/* **********  2. Use Ref  ********** */}
                <Titulo nameTitulo="----------  2. Use Ref  ----------" />
                <UseRef />
                


                {/* **********  3. Conversor Euro Dolar  ********** */}
                <Titulo nameTitulo="----------  3. Conversor Euro Dolar  ----------" />
                <ConversorEuroDolar />
                


                {/* **********  4. Arrays  ********** */}
                <Titulo nameTitulo="----------  4. Arrays  ----------" />
                <Arrays />
                


                {/* **********  5. Trabajo con Componentes I  ********** */}
                <Titulo nameTitulo="----------  5. Trabajo con Componentes I  ----------" />
                <Contador />
                


                {/* **********  6. Trabajo con Componentes II  ********** Utilizando Props  **********/}
                <Titulo nameTitulo="----------  6. Trabajo con Componentes II - Props  ----------" />
                <Saludo usuario={usuario} />
                


                {/* **********  7. Renderizado Condicional  **********/}
                <Titulo nameTitulo="----------  7. Renderizado Condicional  ----------" />
                <RenderizadoCondicional usuario2={usuario2} />
                


                {/* **********  8. Ejercicio Practico 1  **********/}
                <Titulo nameTitulo="----------  8. Ejercicio Practico 1  ----------" />
                <EjercicioPractico1 />
                


                {/* **********  9. Styled Components  **********/}
                <Titulo nameTitulo="----------  9. Styled Components  ----------" />
                <div className='styled-components'>
                    <MiCaja> Mi Caja </MiCaja>
                    <Boton> Entrar </Boton>
                </div>

                

            </main>

        </div>
    );
}


