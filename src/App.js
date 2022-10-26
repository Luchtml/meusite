import React from "react";

const Bemvindo = (props) => {
    return(
         <div>
            <h2>Bem-vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} Anos</h3>
         </div>
    );
}

function App(){
    return(<div>
        <Bemvindo nome="Lucas" idade ="20"/>
        <Bemvindo nome="Thamires" idade ="26"/>
        <h1>Olá Mundo</h1>
    </div>)
}

export default App