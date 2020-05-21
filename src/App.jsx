import React from 'react'
import Primeiro from './componentes/basicos/Primeiro.jsx'
import ComParametro from './componentes/basicos/ComParametro.jsx'
import Fragmento from './componentes/basicos/Fragmento.jsx'
import Aleatorio from './componentes/basicos/Aleatorio.jsx'
import Card from './componentes/layout/Card.jsx'

//com default pode retornar uma funcao anonima
// function pode virar => (arrow function)
//por tem um unico parametro pode se tirar os parenteses
//pode usar _ para dizer q tem um unico parametro irrelevante
//posso tirar o return e retornar de forma implicida mas nao vale para uma funcao normal
export default _ => 
        <div id="app">
            <Card titulo="Desafio aleatório">
                <Aleatorio min={1} max={60}/>
            </Card>
            <Card titulo="Fragmento">
                <Fragmento/>
            </Card>
            {/* // nao pode alterar as propriedades depois que for passada pois
            // da erro mas pode atribuir  o valor para outra variavel
            //para poder usar pois servem somente para leitura}
                {/* nao precica tem <></> , com somente </> funciona*/}
            <Card titulo="Com parâmetro">
                <ComParametro titulo="Situacao" aluno="Renan" nota={9.3}/>
            </Card>
            <Card titulo="Primeiro componente">
                <Primeiro></Primeiro>
            </Card>
        </div>