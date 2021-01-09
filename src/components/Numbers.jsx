import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = onClickNumber => {
    // var number = 0
    // Iterar desde el botón 1 al 0
    // <Button text={number.toString()} clickHandler={onClickNumber}></Button>
    const renderButton = (number) => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber}></Button>
    )
    return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers