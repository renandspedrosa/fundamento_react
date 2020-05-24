
import React from 'react'
import FamiliaMembro from './FamiliaMembro.jsx'


export default  props => {

    return(
        <div>
            {/* primeira maneira de passar para o componente filho */}
           <FamiliaMembro nome="Renan " sobrenome={props.sobrenome }/>
           {/* segunda maneira de passar para o componente filho */}
           <FamiliaMembro nome="Rodrigo " {...props}/>
           <FamiliaMembro nome="Susi " sobrenome="Santos "/>
        </div>
    )
}