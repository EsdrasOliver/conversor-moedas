import { Container } from "./styles"

import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Resposta } from "./components/Resposta"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="container">
      <div className="App">
        <Container>
          <div>
            <Header></Header>
            <Form></Form>
            <Resposta></Resposta>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
