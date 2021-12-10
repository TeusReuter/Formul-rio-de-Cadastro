import { Container, Typography } from '@material-ui/core';
import React, {Component} from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';


class App extends Component {
  render() {
  return (
    <Container component="article" maxWidth="sm">
      
      <Typography variant="h5" component="h1" align="center">
      Formulário de Cadastro para novos usuários
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm}/>

    </ Container>
      
  );
}

}

function aoEnviarForm(dados){
  console.log(dados);
}

// function validarCPF(cpf){
//   if(cpf.length !== 11){
//     return {valido:false, texto:"CPF deve ter 11 digitos."}
//   }else{
//     return {valido:true, texto:""}
//   }
// }

export default App;
