
import React, {cloneElement} from 'react'
import FamiliaMembro from './FamiliaMembro.jsx'


export default  props => {

    return(
        <div>
            {/*2 maneira de passar os membros*/}
            {/* {React.cloneElement(props.childrens)} */}
            {/* serve apenas para 1 unico elemento */}
            {/* {cloneElement(props.children, props)} */}

            {/* mais de 1 elemento */}
           { 
             React.Children.map(props.children, children=>{
                 return cloneElement(children ,props)
             })
           }
            {/* outra maneira */}
            {/* {props.Children.map((child, i) => {
                 return cloneElement(child, { ...props, key: i });
             })} */}


            {/* 1 maneira de passar o membro */}
            {/* primeira maneira de passar para o componente filho
           <FamiliaMembro nome="Renan " sobrenome={props.sobrenome }/>
           segunda maneira de passar para o componente filho com operador spread -- passa todos de uma vez
           <FamiliaMembro nome="Rodrigo " {...props}/>
           <FamiliaMembro nome="Susi " sobrenome="Santos "/> */}
        </div>
    )
}