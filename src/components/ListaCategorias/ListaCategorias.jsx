import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {

  _handleInput(e) {
    if (e.key == "Enter") {
      this.props.adicionarCategoria(e.target.value)
    }
  }

  render() {
    return (
      <section className="container-lista-categorias">
        <ul className="lista-categorias">
          {this.props.categorias.map((categoria, index) => {
            return <li key={index} className="categoria">{categoria}</li>;
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

export default ListaCategorias;
