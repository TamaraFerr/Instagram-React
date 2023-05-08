import { useState } from "react"

export default function Post(props) {
    const [save, setSave] = useState("bookmark-outline")
    const [like, setLike] = useState("heart-outline")
    const [likes, setLikes] = useState(props.number)
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
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.photo} alt="meowed"/>
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.post} alt="gato-telefone" data-test="post-image" onClick={LikeFoto}/>
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
                    <img src={props.like} alt="respondeai"/>
                    <div class="texto">
                        Curtido por <strong>{props.name}</strong> e <strong data-test="likes-number">outras {formatNumber(likes)} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}