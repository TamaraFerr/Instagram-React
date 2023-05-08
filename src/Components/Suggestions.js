import Suggestion from "./Suggestion"

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

        {Suggestions.map(suggestion => (
          <Suggestion image={suggestion.image} name={suggestion.name} text={suggestion.text} />
        ))} 

      </div>
    )
}