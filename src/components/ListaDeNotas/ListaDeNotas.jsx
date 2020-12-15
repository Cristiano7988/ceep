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
                <CardNota
                  indice={index}
                  apagarNota={this.props.apagarNota}
                  titulo={nota.titulo}
                  texto={nota.texto}
                  categoria={nota.categoria}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
