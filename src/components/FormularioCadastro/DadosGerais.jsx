import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";


function DadosGerais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  
  
  
  console.log(nome, sobrenome, nomeUsuario);
  


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        
          aoEnviar({nome, sobrenome, nomeUsuario})
        
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        name="nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        name="sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

<TextField
        value={nomeUsuario}
        onChange={(event) => {
          setNomeUsuario(event.target.value);
        }}
        id="nomeUsuario"
        label="Nome de Usuario"
        name="nomeUsuario"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Avançar
      </Button>
    </form>
  );
}

export default DadosGerais;
