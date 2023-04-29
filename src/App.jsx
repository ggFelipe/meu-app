import './App.css'
import ButtonFatec from './components/ButtonFatec'
import TextField from './components/TextField'

function App() { 

  return (
    <>
      <p>
        <h2>Entre em Contato</h2>
        <hr color='gray'/>
        <TextField type="Text" placeholder="Nome"/><br/>
        <TextField type="Text" placeholder="E-mail"/><br/>
        <TextField type="Text" placeholder="Telefone"/><br/>
        <hr color='gray'/>
      </p>
      <ButtonFatec type="button" label="Enviar"/>
      
    </>
  )
}

export default App
