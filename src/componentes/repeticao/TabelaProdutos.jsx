import React from 'react'
import produtos from '../../data/produtos.js'
import { prototype } from 'events'

export default props => {

    const lis = produtos.map(produto => {
        return (
            <tr key={produto.id} style={{ border:'solid' }}>
                <td style={{ border:'solid' }}>
                    {produto.id}
                </td>
                <td style={{ border:'solid' }}>
                    {produto.nome}
                </td>

                <td style={{ border:'solid' }}>
                    {produto.nota}
                </td>
            </tr>     
        )
    })
    return(
        <div>
           <table style={{ border:'solid'}}>
            <thead>
                <tr style={{ border:'solid' }}>
                        <th style={{ border:'solid' }}>
                            ID
                        </th>
                        <th style={{ border:'solid' }}>
                            NOME
                        </th>
                        <th style={{ border:'solid' }}>
                        PREÇO
                        </th>
                    </tr> 
               </thead>
               <tbody>
                   {lis}
                </tbody>       
           </table>
        </div>
    )   
}