import React from 'react'
import { useRouteError } from "react-router-dom";


const RouterError = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>La pagina que estas buscando no existe</i>
        </p>
      </div>
    );
}

export default RouterError