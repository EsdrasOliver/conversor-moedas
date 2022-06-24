import './index.css'

import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'
import linkedin  from '../../assets/linkedin.svg'

export function Footer() {
    return (
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
    )
}