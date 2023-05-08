export default function Suggestion(props){
    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={props.image} alt="smallcutecats"/>
              <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">{props.text}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}