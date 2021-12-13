import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import useErros from "../../hooks/useErros";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";



function DadosConclusao({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha, cpf });
        }
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
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
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
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        name="cpf"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Concluir cadastro
      </Button>
    </form>
  );
}

export default DadosConclusao;
