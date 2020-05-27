

export default props =>{

    //expressao com else if
    const elseChild = props.children.filter(child =>{
        return child.type && child.type.name === 'Else'
    })[0]
    const ifChild = props.children.filter(child =>{
        return child !== elseChild
    })
    if(props.test){
        return ifChild
    }else if(elseChild){
        return elseChild
    }else{
        return false
    }

    //expressao apenas com if
    // if(props.test){
    //     return props.children
    // }else{
    //     return false
    // }
}
//usado apenas com else
export const Else = props => props.children 