//Importar React
import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

//Componente funcional

const Button = ({type, text, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>)


// PropTypes en el componente
Button.propTypes = {
    type: PropTypes.string, 
    text: PropTypes.string.isRequired, 
    clickHandler: PropTypes.func.isRequired
}

//Exportación del componente
export default Button