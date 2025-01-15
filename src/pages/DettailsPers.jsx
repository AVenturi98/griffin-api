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
                    <img src={post.image} alt="" />
                    <div>{post.person}</div>
                </div>

            }

        </>
    )
}
