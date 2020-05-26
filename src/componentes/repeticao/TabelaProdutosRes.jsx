import './TabelaProdutoRes.css'
import React from 'react'
import produtosRes from '../../data/produtosRes.js'

export default props => {
    function getLinhas(){
        return produtosRes.map((produto, i) =>{
            return(
                    <tr key={produto.id} className={i % 2 == 0 ? 'Par':''}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R$ {produto.preco}</td>
                    </tr>
            )
        })
    }
    return(
        <div className='TabelaProdutoRes'>
           <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
           </table>
        </div>
    )   
}