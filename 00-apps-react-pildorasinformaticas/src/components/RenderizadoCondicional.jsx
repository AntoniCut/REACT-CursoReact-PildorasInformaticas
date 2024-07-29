//  *************************************************
//  **********  /src/Components/Saludo.js  **********
//  *************************************************


//import PropTypes from "prop-types";



/**
 * -----  Componente Saludo  -----
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.usuario2 - Objeto que contiene la información del usuario.
 * @param {string} props.usuario2.nombre - Nombre del usuario.
 * @param {string} props.usuario2.apellido - Apellido del usuario.
 * @param {number} props.usuario2.edad - Edad del usuario.
 * @param {string} props.usuario2.genero - Género del usuario.
 * @returns {JSX.Element} Elemento JSX que representa el saludo.
 */

export const RenderizadoCondicional = (props) => {


   // ----------  Desestructuracion de Objetos  ----------
   const { nombre, apellido, edad, genero } = props.usuario2;

   return (

      <div>

         {/* *****  Renderizado Condicional  ***** */}

         {
            nombre && apellido ?
               (<>
                  <h1> Hola {nombre} {apellido} !!! </h1>
                  <p> Tienes {edad} años </p>
                  <p> y de genero <strong> {genero} </strong> </p>
               </>)

               :

               <h1> No se ha proporcionado el nombre del usuario </h1>

         }

      </div>
   )


}

