import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { persons } from "../persons"


export default function DettailsPers() {

    const [post, setPost] = useState('')

    const [changeLang, setChangeLang] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const person = persons.find(p => p.id === parseInt(id))
        setPost(person)

    }, [id])

    function setLangITA() {
        setChangeLang(false)
    }

    function setLangEGN() {
        setChangeLang(true)
    }

    return (
        <>
            {post &&
                <div className="dettailsCard">
                    <img src={post.image} />
                    <div className="info">
                        <h1>{post.person}</h1>
                        {changeLang ?
                            <div>{post.quote}</div> :
                            <div>{post.quoteITA}</div>
                        }
                        <button type="button" onClick={changeLang ? () => setLangITA() : () => setLangEGN()} >{changeLang ? 'ITA' : 'ENG'}</button>
                    </div>
                </div>
            }

            {post.video &&
                <div className="containClip">
                    <h2>{changeLang ? 'Enjoy this clip' : 'Goditi questa clip'}</h2>

                    {changeLang &&
                        <div className={changeLang ? 'd-block' : 'd-none'}>
                            <video width="550px" controls>
                                <source src={post.videoEng} type="video/mp4" />
                                Il tuo browser non supporta il tag video.
                            </video>
                        </div>}
                    {!changeLang &&
                        <div className={changeLang ? 'd-none' : 'd-block'} >
                            <video width="550px" controls>
                                <source src={post.video} type="video/mp4" />
                                Il tuo browser non supporta il tag video.
                            </video>
                        </div>
                    }

                </div>}

        </>
    )
}
