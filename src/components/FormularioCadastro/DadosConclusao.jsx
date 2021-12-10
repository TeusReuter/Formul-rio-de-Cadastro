import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosConclusao({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha, nomeUsuario });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        name="email"
        variant="outlined"
        margin="normal"
        type="email"
        required
        fullWidth
      />

      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="Senha"
        name="senha"
        variant="outlined"
        margin="normal"
        type="password"
        required
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
        Concluir cadastro
      </Button>
    </form>
  );
}

export default DadosConclusao;
