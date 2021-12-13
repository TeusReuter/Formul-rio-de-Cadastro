function validarCPF(cpf) {
    if (cpf.length !== 11) {
      return { valido: false, texto: "CPF deve ter 11 dígitos." };
    } else {
      return { valido: true, texto: "" };
    }
  }

  function validarSenha(senha){
    if(senha.length < 4){
      return {valido:false, texto: "Por favor, digite uma senha válida(Mínimo 4 dígitos)."}
    } else {
      return {valido:true, texto:""}
    }
  }

  export {validarCPF, validarSenha};