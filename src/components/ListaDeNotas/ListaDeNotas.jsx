import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <section className="lista-notas">
        <h1>Lista de Notas</h1>
        <ul className="unorder-list">
          {Array.of("Trabalho", "Trabalho", "Estudos").map(
            (categoria, index) => {
              return (
                <li key={index} className="list-item">
                  <div>{categoria}</div>
                  <CardNota />
                </li>
              );
            }
          )}
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
