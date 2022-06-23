
import { useState } from "react"
import { Container } from "./styles"

import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin  from '../assets/linkedin.svg'

const API = 'https://economia.awesomeapi.com.br/json/last/'

function App() {

  const [moedaSelected, setMoedaSelected] = useState()
  const [valor, setValor] = useState('')

  function handleSumbit(e) {
    e.preventDefault()

    let moneySelected = document.getElementById("nomeMoeda")
    let valorConvertido = document.getElementById("valorConvertido")

    fetch(API + `${moedaSelected}-BRL`)
      .then(res => res.json())
      .then(data => {
        let cotacion
        let nome = ""

        if(moedaSelected === "USD") {
          cotacion = data.USDBRL.ask
          nome = "Dolar americano"
        } 
        if(moedaSelected === "EUR") {
          cotacion = data.EURBRL.ask
          nome = "Euro"
        }
        if(moedaSelected === "BTC") {
          cotacion = data.BTCBRL.ask
          nome = "Bitcoin"
        }

        let response = Number(valor * cotacion).toFixed(2)

        moneySelected.innerHTML = nome
        valorConvertido.innerHTML = response

      })
      .catch(e => console.log(e))

  }

  return (
    <div className="container">

      <div className="App">
        <Container>
          <div>
            <h1>Conversor de moedas</h1>
            <p>Converte de Real para Dolar americano, Euro e Bitcoin</p>
            <form onSubmit={handleSumbit}>

              <label 
                htmlFor="moeda"
              >
                Escolha a moeda: 
              </label> <br/>
              <select 
                name="moeda" 
                id="moeda" 
                required 
                onChange={(e) => setMoedaSelected(e.target.value)}
              > 
                <option disabled value="Selecione a moeda">Selecione a moeda</option>
                <option selected value="USD">Dolar americano</option> 
                <option value="EUR">Euro</option>  
                <option value="BTC">Bitcoin</option>  
              </select> <br/>

              <label htmlFor="valor">Valor:</label> <br/>
              <input 
                type="number" 
                name="valor" 
                id="valor" 
                placeholder="Digite o valor em R$" 
                onChange={(e) => setValor((e.target.value))}
              /> <br/>

              <input type="submit" id="calcular" value="Calcular" />
            </form>

          
            <div>
              <p>
                Converteu de R$ para: <span id="nomeMoeda"></span> 
              </p>
              <p>
                Valor: R$ <span id="valorConvertido"></span>
              </p>
            </div>

          </div>
        </Container>
      </div>

      <footer>
          <h2>Feito por Esdras Oliveira</h2>
          
          <a href="https://github.com/EsdrasOliver" target="_blank">
            <img src={github} alt="Logo do github" />
          </a>
          <a href="https://www.instagram.com/esdras_odj/" target="_blank">
            <img src={instagram} alt="Logo do instagram" />
          </a>
          <a href="https://www.linkedin.com/in/esdras-oliveira-446b261a3/" target="_blank">
            <img src={linkedin} alt="Logo do linkedin" />
          </a>
      </footer>
    </div>
  )
}

export default App
