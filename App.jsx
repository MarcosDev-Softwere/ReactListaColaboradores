import React, { useState } from 'react';
import './App.css';

function gerarDiasTrabalhados(qtd) {
  const dias = [];
  for (let i = 1; i <= qtd; i++) {
    dias.push(`Dia ${i}`);
  }
  return dias;
}

const colaboradores = [
  { nome: 'Marcos', diasTrabalhados: gerarDiasTrabalhados(10) },
  { nome: 'Alice', diasTrabalhados: gerarDiasTrabalhados(15) },
  { nome: 'Bruno', diasTrabalhados: gerarDiasTrabalhados(20) },
  { nome: 'Carla', diasTrabalhados: gerarDiasTrabalhados(12) },
  { nome: 'Daniel', diasTrabalhados: gerarDiasTrabalhados(18) },
  { nome: 'Eduarda', diasTrabalhados: gerarDiasTrabalhados(14) },
  { nome: 'Felipe', diasTrabalhados: gerarDiasTrabalhados(16) },
  { nome: 'Gabriela', diasTrabalhados: gerarDiasTrabalhados(11) },
  { nome: 'Henrique', diasTrabalhados: gerarDiasTrabalhados(13) },
  { nome: 'Isabela', diasTrabalhados: gerarDiasTrabalhados(17) },
  { nome: 'João', diasTrabalhados: gerarDiasTrabalhados(10) },
  { nome: 'Karen', diasTrabalhados: gerarDiasTrabalhados(15) },
  { nome: 'Lucas', diasTrabalhados: gerarDiasTrabalhados(20) },
  { nome: 'Mariana', diasTrabalhados: gerarDiasTrabalhados(12) },
  { nome: 'Nicolas', diasTrabalhados: gerarDiasTrabalhados(18) },
  { nome: 'Olívia', diasTrabalhados: gerarDiasTrabalhados(14) },
  { nome: 'Pedro', diasTrabalhados: gerarDiasTrabalhados(16) },
  { nome: 'Quésia', diasTrabalhados: gerarDiasTrabalhados(11) },
  { nome: 'Rafael', diasTrabalhados: gerarDiasTrabalhados(13) },
  { nome: 'Sofia', diasTrabalhados: gerarDiasTrabalhados(17) },
];

function App() {
  const [busca, setBusca] = useState('');
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState(null);

  const colaboradoresFiltrados = colaboradores.filter(colab =>
    colab.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Colaboradores</h1>

      <input
        type="text"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={e => setBusca(e.target.value)}
      />

      <ul className="lista">
        {colaboradoresFiltrados.map((colab, index) => (
          <li key={index} onClick={() => setColaboradorSelecionado(colab)}>
            <strong>{colab.nome}</strong>
          </li>
        ))}
      </ul>

      {colaboradorSelecionado && (
        <div className="modal">
          <div className="modal-content">
            <h2>{colaboradorSelecionado.nome}</h2>
            <p>{colaboradorSelecionado.diasTrabalhados.length} dias trabalhados:</p>
            <ul>
              {colaboradorSelecionado.diasTrabalhados.map((dia, i) => (
                <li key={i}>{dia}</li>
              ))}
            </ul>
            <button onClick={() => setColaboradorSelecionado(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
