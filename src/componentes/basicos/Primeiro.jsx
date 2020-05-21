//se tiver jsx, precisa ter o import do react
import React from 'react'


export default function Primeiro(){
    const msg = 'Seja bem vindo(a)!'
    //o parentese serve para poder iniciar na linha seguinte
    return (
        //apartir daqui começa o jsx
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    )
}