import React, { Component } from "react";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";
import "./estilo.css";

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)} />
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
