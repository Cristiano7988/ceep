import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.bind(this));
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <section className="lista-notas">
        <h1>Lista de Notas</h1>
        <ul className="unorder-list">
          {this.state.notas.map((nota, index) => {
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
