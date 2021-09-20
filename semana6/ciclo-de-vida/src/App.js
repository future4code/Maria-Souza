import React from 'react'
import styled from 'styled-components'
import Logo from '../src/img/logo.png'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: 1,
        texto: 'Pular corda',
        completa: false
      },
    {
      id: Date.now(),
        texto: 'Comer bolo',
        completa: true
    }
    ],
      inputValue: '',
      filtro: ''
    }



  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas")
    if (tarefas) {
      this.setState({ tarefas: JSON.parse(tarefas)})
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const copiaDoEstado = [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas: copiaDoEstado})
  }
  

  selectTarefa = (id) => {
    const selecionaTarefa = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const tarefaSelecionada = {
          ...tarefa,
          completa: !tarefa.completa
        } 
        return tarefaSelecionada
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: selecionaTarefa})

  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <img src={Logo} alt="Logotipo" /><br/>
        <h4>Adicione uma nova tarefa a sua lista:</h4>
        <InputsContainer>
          <input
          value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
