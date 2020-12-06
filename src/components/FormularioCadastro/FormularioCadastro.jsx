import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _criarTitulo(e) {
    e.stopPropagation();
    this.titulo = e.target.value;
  }

  _criarTexto(e) {
    e.stopPropagation();
    this.texto = e.target.value;
  }

  _criarNota(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form
        className="formulario-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input
          className="input-titulo"
          type="text"
          placeholder="Titulo"
          onChange={this._criarTitulo.bind(this)}
        />
        <textarea
          rows={15}
          className="input-nota"
          placeholder="Escreva sua nota..."
          onChange={this._criarTexto.bind(this)}
        />
        <button className="btn">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
