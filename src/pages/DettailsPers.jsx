import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { persons } from "../persons"


export default function DettailsPers() {

    const [post, setPost] = useState('')

    const { id } = useParams()

    useEffect(() => {
        const person = persons.find(p => p.id === parseInt(id))
        setPost(person)

    }, [id])

    return (
        <>
            {post &&
                <div className="dettailsCard">
                    <img src={post.image} />
                    <div className="info">
                        <h1>{post.person}</h1>
                        <div>{post.quote}</div>
                    </div>
                </div>
            }

            {post.video &&
                <div className="containClip">
                    <h2>Enjoy this clip</h2>
                    <video width="550px" controls>
                        <source src={post.video} type="video/mp4" />
                        Il tuo browser non supporta il tag video.
                    </video>
                </div>}

        </>
    )
}
