import Post from "./Post"

export default function Posts() {
    const Posts = [
        {user: "meowed", photo:"assets/img/meowed.svg", post:"assets/img/gato-telefone.svg", like:"assets/img/gato-telefone.svg", name:"respondeai", number: 101523},
        {user: "barked", photo:"assets/img/barked.svg", post:"assets/img/dog.svg", like:"assets/img/adorable_animals.svg", name:"adorable_animals", number: 99159},
        {user: "meowed", photo:"assets/img/meowed.svg", post:"assets/img/gato-telefone.svg", like:"assets/img/gato-telefone.svg", name:"respondeai", number: 101523}
    ]

    return(
        <div class="posts">
            {Posts.map( post => (
                <Post 
                user={post.user} 
                photo={post.photo} 
                post={post.post} 
                like={post.like} 
                name={post.name} 
                number={post.number} 
                />
            ))}
        </div>
    )
}