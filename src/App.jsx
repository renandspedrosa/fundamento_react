import "./App.css"
import React from 'react'
import Primeiro from './componentes/basicos/Primeiro.jsx'
import ComParametro from './componentes/basicos/ComParametro.jsx'
import Fragmento from './componentes/basicos/Fragmento.jsx'
import Aleatorio from './componentes/basicos/Aleatorio.jsx'
import Card from './componentes/layout/Card.jsx'
import Familia from './componentes/basicos/Familia.jsx'
import FamiliaMembro from './componentes/basicos/FamiliaMembro.jsx'
import ListaAlunos from './componentes/repeticao/ListaAlunos.jsx'
import TabelaProdutos from './componentes/repeticao/TabelaProdutos.jsx'
import TabelaProdutosRes from './componentes/repeticao/TabelaProdutosRes.jsx'
import ParOuImpar from './componentes/condicional/ParOuImpar'
import UsuarioInfo from './componentes/condicional/UsuarioInfo'
import DiretaPai from  "./componentes/comunicacao/DiretaPai"
import IndiretaPai from "./componentes/comunicacao/IndiretaPai.jsx"
import Input from "./componentes/formulario/input.jsx"
//com default pode retornar uma funcao anonima
// function pode virar => (arrow function)
//por tem um unico parametro pode se tirar os parenteses
//pode usar _ para dizer q tem um unico parametro irrelevante
//posso tirar o return e retornar de forma implicida mas nao vale para uma funcao normal
export default _ => 
        <div id="app">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="Componente Controlado" color="#e45f56">
                    <Input/>
                </Card>
                <Card titulo="Comunicação Indireta" color="#8bad39">
                    <IndiretaPai/>
                </Card>
                <Card titulo="Comunicação Direta" color="#59323c">
                    <DiretaPai/>
                </Card>
                <Card titulo="Condicional" color="#982395">
                    {/* < UsuarioInfo usuario={{ email: 'renan@pedrosa.com'}}/>
                    < UsuarioInfo usuario={{}}/> */}
                    < UsuarioInfo usuario={{ nome: 'renan'}}/>
                    <ParOuImpar numero={20} />
                </Card>
                <Card titulo="Produtos Resposta" color="#3a9ad9">
                    <TabelaProdutosRes/>
                </Card>
                <Card titulo="Produtos" color="#ff4c">
                    <TabelaProdutos/>
                </Card>
                <Card titulo="Repetição" color="#ff4c65">
                    <ListaAlunos/>
                </Card>
                <Card titulo="Componentes com Filhos" color="#00c8f8">
                  <Familia sobrenome="Pedrosa">
                        {/* na primeira maneira dentro do familia fica vazio */}
                        <FamiliaMembro nome="Renan " />
                        <FamiliaMembro nome="Rodrigo " />
                        <FamiliaMembro nome="Susi " />
                  </Familia>
                </Card>
                <Card titulo="Desafio aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60}/>
                </Card>
                <Card titulo="Fragmento" color="#e94c6f">
                    <Fragmento/>
                </Card>
                {/* // nao pode alterar as propriedades depois que for passada pois
                // da erro mas pode atribuir  o valor para outra variavel
                //para poder usar pois servem somente para leitura}
                    {/* nao precica tem <></> , com somente </> funciona*/}
                <Card titulo="Com parâmetro" color="#e8b71a">
                    <ComParametro titulo="Situacao" aluno="Renan" nota={9.3}/>
                </Card>
                <Card titulo="Primeiro componente">
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>