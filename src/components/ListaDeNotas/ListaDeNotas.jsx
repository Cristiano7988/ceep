import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <section className="lista-notas">
        <h1>Lista de Notas</h1>
        <ul className="unorder-list">
          {this.props.notas.map((nota, index) => {
            return (
              <li key={index} className="list-item">
                <CardNota titulo={nota.titulo} texto={nota.texto} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
