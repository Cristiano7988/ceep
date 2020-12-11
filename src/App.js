import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: [],
    };
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  apagarNota(indice) {
    let ArrayNotas = this.state.notas;
    ArrayNotas.splice(indice, 1);
    this.setState({ notas: ArrayNotas });
  }

  render() {
    return (
      <section className="main-section">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas
          notas={this.state.notas}
          apagarNota={this.apagarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;
