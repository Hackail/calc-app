// Importación de las librerías necesarias para el componente
//Siempre se debe importar la librería de react

/* eslint no-eval: 0 */ 
import React, {useState} from 'react';
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result';


import './App.css';


// Generación de la función del componente
// Arrow Function, función flecha
const App = () => {

    //Array Destructuring
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^/]+/g)

    //const arrayTextoFuncionModificaTexto = useState("")

    // arrayTextoFuncionModificaTexto => ["hola", funcion]

    //Primer posición: valor (que inicialmente es el valor por defecto)
    //const texto = arrayTextoFuncionModificaTexto[0]

    //Segunda posición: Función que va a permiti modificar el valor por defecto
    //const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

    //Los arrowFunctions con un solo parámetro pueden no tener los paréntesis
    // const clickHandlerFunction = (text) => {
    //     console.log("Button.clickHandler", text)
    // }
    // Cuerpo de la función

    const value = items.length > 0 ? items[items.length - 1] : "0"

    console.log("Renderización de la aplicación", items);
    return (<main className='react-calculator'>
        <Result value={value}></Result>
        <Numbers onClickNumber={number => {
            setStack(`${stack}${number}`)
        }}></Numbers>
        <Functions 
            onContentClear={() => {
                setStack('')
            }} 
            onDelete={() =>{
                if (stack.length >0 ) {
                    const newStack = stack.substring(0, stack.length - 1)
                    setStack(newStack)
                } 
            }}>
        </Functions>
        <MathOperations 
            onClickOperation={
                operation => {
                    setStack(`${stack}${operation}`)
            }}
            onClickEqual={
                equal => {
                    setStack(eval(stack).toString())
                    //setStack(`${stack}${equal}`)
                    //INTENTO PROPIO FALLIDO, NO QUERÍA USAR EL EVAL
                    // switch (stack) {
                    //     case stack.includes("+"):
                    //         let newStack = stack.split("+")
                    //         let result = parseInt(newStack[0], 10) +  parseInt(newStack[1], 10)
                    //         setStack(result)
                    //         break
                    //     case stack.includes("-"):
                    //         newStack = stack.split("-")
                    //         result = parseInt(newStack[0], 10) - parseInt(newStack[1], 10)
                    //         setStack(result)
                    //         break
                    //     case stack.includes("*"):
                    //         newStack = stack.split("*")
                    //         result = parseInt(newStack[0], 10) *  parseInt(newStack[1], 10)
                    //         setStack(result)
                    //         break
                    //     case stack.includes("/"):
                    //         newStack = stack.split("/")
                    //         result = parseInt(newStack[0], 10) /  parseInt(newStack[1], 10)
                    //         setStack(result)
                    //         break
                    //     default:
                    //         console.log('Lo lamentamos, por el momento no disponemos de ' + stack + '.')
                    // } 
            }}
        ></MathOperations>
    </main>);
}

// Exportación del componente para que sea utilizado por otros componentes, etc.
export default App
