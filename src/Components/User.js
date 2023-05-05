import { useState } from "react"

export default function User() {
    const [fotoDoUsuario, setFotoDoUsuario] = useState("assets/img/catanacomics.svg")
    const [nomeUsuario, setNomeUsuario] = useState("catanacomics")
  
    function TrocaFoto() {
        let novaFoto = prompt('Insira o link da nova foto!')
        if(!novaFoto) {
            novaFoto = fotoDoUsuario
        } else {
            setFotoDoUsuario(novaFoto)
        }
    }
    function TrocaNome() {
        let novoUsuario = prompt('Insira o novo nome!')
        if(!novoUsuario) {
            novoUsuario = nomeUsuario
        } else {
            setNomeUsuario(novoUsuario)
        }
    }


    return(
        <div class="usuario">
                <img src={fotoDoUsuario} alt="imagem de perfil" data-test="profile-image" onClick={TrocaFoto}/>
                <div class="texto">
                    <span>
                        <strong data-test="name">{nomeUsuario}</strong>
                        <ion-icon name="pencil" data-test="edit-name" onClick={TrocaNome}></ion-icon>
                    </span>
                </div>
        </div>
    )
}