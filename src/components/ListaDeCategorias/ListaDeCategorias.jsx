import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleInput(e) {
    if (e.key === "Enter") {
      this.props.adicionarCategoria(e.target.value);
    }
  }

  render() {
    return (
      <section className="container-lista-categorias">
        <ul className="lista-categorias">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="categoria">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          onKeyUp={this._handleInput.bind(this)}
          placeholder="Adicionar categoria"
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
