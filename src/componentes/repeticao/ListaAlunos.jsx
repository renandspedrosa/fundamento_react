import React from 'react'
import alunos from '../../data/alunos.js'

export default props => {
    // const lil = (
    //         <li>
    //             {alunos[0].id}) {alunos[0].nome} -> {alunos[0].nota}
    //         </li>
    // )

    const lis = alunos.map(aluno => {
        return (
                <li key={aluno.id}>
                    {aluno.id}) {aluno.nome} -> {aluno.nota}
                </li>
        )
    })
    return(
        <div>
            <ul style={{ listStyle:'none' }}>
                {/* {lil} */}
                {lis}
                {/* <li>Calos - 7.7</li>
                <li>Daniel - 6.5</li> */}
            </ul>

        </div>
    )   
}