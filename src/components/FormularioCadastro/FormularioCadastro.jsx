import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
  }

  criarTitulo(e) {
    this.titulo = e.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="formulario-cadastro">
        <input
          className="input-titulo"
          type="text"
          placeholder="Titulo"
          onChange={this.criarTitulo.bind(this)}
        />
        <textarea
          rows={15}
          className="input-nota"
          placeholder="Escreva sua nota..."
        />
        <button className="btn">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
