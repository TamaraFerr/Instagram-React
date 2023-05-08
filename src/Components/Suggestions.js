export default function Suggestions() {
  const Suggestions = [
    {image:"assets/img/bad.vibes.memes.svg", name:"bad.vibes.memes", text:"Segue você"},
    {image:"assets/img/chibirdart.svg", name:"chibirdart", text:"Segue você"},
    {image:"assets/img/razoesparaacreditar.svg", name:"razoesparaacreditar", text:"Novo no Instagram"},
    {image:"assets/img/adorable_animals.svg", name:"adorable_animals", text:"Segue você"},
    {image:"assets/img/smallcutecats.svg", name:"smallcutecats", text:"Segue você"}
  ]

    return(
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {Suggestions.map(Suggestion => (
          <div class="sugestao">
            <div class="usuario">
              <img src={Suggestion.image} alt="smallcutecats"/>
              <div class="texto">
                <div class="nome">{Suggestion.name}</div>
                <div class="razao">{Suggestion.text}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
            </div>
        ))}  
      </div>
    )
}