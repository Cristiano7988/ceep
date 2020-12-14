import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
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

  adicionarCategoria(categoria) {
    const novoArray = [...this.state.categorias, categoria];
    const novoEstado = {...this.state, categorias: novoArray};
    this.setState( novoEstado );
  }

  render() {
    return (
      <section className="main-section">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main>
          <ListaCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.apagarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
