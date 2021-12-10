import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DadosConclusao from "./DadosConclusao";
import DadosGerais from "./DadosGerais";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosGerais aoEnviar={coletarDados} />,
    <DadosConclusao aoEnviar={coletarDados} />,
    <Typography variant="h4">Cadastro concluído com sucesso!</Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Dados Gerais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados de Cadastro</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalizar Cadastro</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
