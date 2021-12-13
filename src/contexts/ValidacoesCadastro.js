import React from "react";

const ValidacoesCadastro = React.createContext({
    email: semValidacao,
    senha: semValidacao,
    nomeUsuario: semValidacao,
});

function semValidacao(dados){
    console.log(dados);
    return {valido:true, texto: ""};
}

export default ValidacoesCadastro;