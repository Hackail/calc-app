import React from 'react';
import PropTypes from 'prop-types';

const Result = ({value}) => (
        <div className="result">
            {value}
        </div>
    )

    //debugger - Se utiliza para hacer un break point en el código y así hacer el debug en busca de errores

export default Result;

//Es una librería que se utiliza para que se tenga presente los alores que se 
//esperan y de qué tipo se esperane n la utilización de este componente
Result.propTypes = {
    value: PropTypes.string.isRequired
}

//La misma librería, pero es utilizada para dar valores por defecto
Result.defaultProps = {
    value: "0"
}