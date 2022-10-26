import React from "react"

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
            <Social fb={props.facebook} />
        </div>
    )
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
            <Social />
            <hr></hr>
        </div>
    )
}

const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Linkedin </a>
            <a> Github </a>
            <a> Instagram</a>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome='Lucas' cargo='Programador' idade='20' facebook='https://google.com'/>
            <Equipe nome='Thamires' cargo='Vendedora' idade='26'/>
            <Equipe nome='Joana ela/dela' cargo='Dona de casa' idade='5'/>
            <Equipe nome='E-lis-angela' cargo='Dona de tudo' idade='10'/>
        </div>
    )
}

export default App