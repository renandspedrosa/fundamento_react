//nao precisou de apelido pq queria apenas carregar o arquivo e nao acessar um componente especifico
import './index.css'
//o nome que vc coloca aqui é o nome que tem que usar no .render()
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const el = document.getElementById('root')

const tag = <strong>Olá, React</strong>

//react com jsx e precisa de import react pq usa jsx
ReactDOM.render(
    <App/>,
    el
)


//react com string e nao precisa import react
// ReactDOM.render(
//     'Olá React!!!',
//     el
// )
