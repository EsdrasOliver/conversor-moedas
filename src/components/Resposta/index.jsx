import './index.css'

export function Resposta() {
    return (
        <div>
            <p>
                Converteu de R$ para: <span id="nomeMoeda"></span> 
            </p>
            <p>
                Valor: R$ <span id="valorConvertido"></span>
            </p>
        </div>
    )
}