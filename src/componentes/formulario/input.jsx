import React, {useState} from 'react'

export default props => {

    const [valor, setValor] = useState('inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }
    return(
        <div className="Input">
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/*componente controlado*/}
                <input value={valor} onChange={quandoMudar} />
                {/*se  nao quiser mudar vc deixa readOnly*/}
                <input value={valor} readOnly />
                {/*undefined componente nao controlado*/}
                <input value={undefined} />
            </div>
        </div>
    )
}