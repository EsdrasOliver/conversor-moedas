import "./index.css"
import { useState } from "react"

const API = 'https://economia.awesomeapi.com.br/json/last/'

export function Form() {
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
    
            let response = parseFloat(valor * cotacion).toFixed(2)
    
            moneySelected.innerHTML = nome
            valorConvertido.innerHTML = response
    
          })
          .catch(e => console.log(e))
      }
    
    return (
        <>
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
                  defaultValue={"Selecione a moeda"}
                  onChange={(e) => setMoedaSelected(e.target.value)}
                > 
                  <option disabled value="Selecione a moeda">Selecione a moeda</option>
                  <option value="USD">Dolar americano</option> 
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
        </>
    )
}