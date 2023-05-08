export default function Stories() {
    const Stories = [
        {user:"9gag", image:"assets/img/9gag.svg"},
        {user:"meowed", image:"assets/img/meowed.svg"},
        {user:"barked", image:"assets/img/barked.svg"},
        {user:"nathanwpylestrangeplanet", image:"assets/img/nathanwpylestrangeplanet.svg"},
        {user:"wawawicomics", image:"assets/img/wawawicomics.svg"},
        {user:"respondeai", image:"assets/img/respondeai.svg"},
        {user:"filomoderna", image:"assets/img/filomoderna.svg"},
        {user:"memeriagourmet", image:"assets/img/memeriagourmet.svg"},
    ]

    return(
        <div class="stories">
            {Stories.map(Story => (
                <div class="story">
                    <div class="imagem">
                        <img src={Story.image} alt="9gag"/>
                    </div>
                    <div class="usuario">
                        {Story.user}
                    </div>
                </div>
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}