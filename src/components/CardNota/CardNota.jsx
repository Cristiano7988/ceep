import React, { Component } from "react";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";
import "./estilo.css";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>{this.props.titulo}</h3>
          <DeleteSVG />
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
