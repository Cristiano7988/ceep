import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <section className="main-section">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
