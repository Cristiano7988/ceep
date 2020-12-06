import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="formulario-cadastro">
        <input className="input-titulo" type="text" placeholder="Titulo" />
        <textarea className="input-nota" placeholder="Escreva sua nota..." />
        <button className="btn">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;