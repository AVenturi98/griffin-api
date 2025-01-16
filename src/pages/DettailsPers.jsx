import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { persons } from "../persons"
import GlobalContext from "../context/GlobalContext"


export default function DettailsPers() {

    const [post, setPost] = useState('')

    const { changeLang } = useContext(GlobalContext)

    const { id } = useParams()

    useEffect(() => {
        const person = persons.find(p => p.id === parseInt(id))
        setPost(person)

    }, [id])

    return (
        <main>
            <section>
                {post &&
                    <div className="dettailsCard">
                        <img src={post.image} />
                        <div className="info">
                            <h1>{post.person}</h1>
                            {changeLang ?
                                <div>{post.quote}</div> :
                                <div>{post.quoteITA}</div>
                            }
                        </div>
                    </div>
                }
            </section>

            <section>
                <div className="containClip">
                    {!post.video && !post.videoEng ?
                        '' :
                        <div>
                            <h2>{changeLang ? 'Enjoy this clip' : 'Goditi questa clip'}</h2>

                            {changeLang &&
                                <div className={changeLang ? 'd-block' : 'd-none'}>
                                    {post.videoEng ?
                                        <video width="550px" controls>
                                            <source src={post.videoEng} type="video/mp4" />
                                            Il tuo browser non supporta il tag video.
                                        </video> :
                                        'Try to change language for view clip'}
                                </div>}
                            {!changeLang &&
                                <div className={changeLang ? 'd-none' : 'd-block'} >
                                    {post.video ?
                                        <video width="550px" controls>
                                            <source src={post.video} type="video/mp4" />
                                            Il tuo browser non supporta il tag video.
                                        </video> :
                                        'Try to change language for view clip'}
                                </div>
                            }
                        </div>}
                </div>
            </section>
        </main>
    )
}
