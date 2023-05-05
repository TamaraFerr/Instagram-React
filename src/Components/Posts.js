import { useState } from "react"

export default function Posts() {
    const [save, setSave] = useState("bookmark-outline")
    const [like, setLike] = useState("heart-outline")
    const [likes, setLikes] = useState(101523)
    const formatNumber = (number) => new Intl.NumberFormat("pt-BR").format(number) 
    

    function SavePost() {
        if(save === "bookmark-outline" ) {
        setSave("bookmark")
        } else {
        setSave("bookmark-outline")
        }
    } 

    function LikePost() {
        if(like === "heart-outline") {
        setLike("heart")
        setLikes(likes + 1)
        } else {
        setLike("heart-outline")
        setLikes(likes - 1)
        }
    }

    function LikeFoto() {
        if (like === "heart-outline") {
        setLike("heart")
        setLikes(likes + 1)
        } else {
        setLikes(likes)
        }
    }

    return(
        <div class="posts">
            <div class="post" data-test="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" alt="meowed"/>
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" alt="gato-telefone" data-test="post-image" onClick={LikeFoto}/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name={like} style={{color: like === "heart-outline" ? "black" : "red"}} data-test="like-post" onClick={LikePost}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name={save} data-test="save-post" onClick={SavePost}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" alt="respondeai"/>
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/barked.svg" alt="barked"/>
                        barked
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/dog.svg" alt="dog" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" alt="meowed"/>
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" alt="gato-telefone"/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" alt="respondeai"/>
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}