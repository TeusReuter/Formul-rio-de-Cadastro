import { Container, Typography } from '@material-ui/core';
import React, {Component} from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

import { validarCPF, validarSenha } from './models/cadastroCPF';

class App extends Component {
  render() {
  return (
    <Container component="article" maxWidth="sm">
      
      <Typography variant="h5" component="h1" align="center">
      Formulário de Cadastro para novos usuários
      </Typography>
      <ValidacoesCadastro.Provider
      value={{cpf:validarCPF, senha:validarSenha}}
      >
      <FormularioCadastro aoEnviar={aoEnviarForm}/>
      
      </ValidacoesCadastro.Provider>
    </ Container>
      
  );
}

}

function aoEnviarForm(dados){
  console.log(dados);
}

// function validarCPF(cpf) {
//   if (cpf.length !== 11) {
//     return { valido: false, texto: "CPF deve ter 11 dígitos." };
//   } else {
//     return { valido: true, texto: "" };
//   }
// }

// function validarCPF(cpf){
//   if(cpf.length !== 11){
//     return {valido:false, texto:"CPF deve ter 11 digitos."}
//   }else{
//     return {valido:true, texto:""}
//   }
// }

export default App;
