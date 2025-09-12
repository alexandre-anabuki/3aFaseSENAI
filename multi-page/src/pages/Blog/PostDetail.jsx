import { useEffect, useState }from "react"
import { useParams } from "react-router"

const PostDetail = () =>{
    const {id} = useParams()
    const[post, setPost] = useState("")

    useEffect(() =>{
        fetch(`http://localhost:3000/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [id])

    return(
        <div className="p-4">
            <img src={post.image} />
            <h1 className="text-xl font-bold"> {post.title} </h1>
            <p>{post.views}</p>
            <p>{post.description}</p>

        </div>
    )
}

export default PostDetail 