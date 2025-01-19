import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { persons } from "../persons"
import GlobalContext from "../context/GlobalContext"
import HandIcon from "../components/HandIcon"
import Video from "../components/Video"
import BtnTop from "../components/BtnTop"

export default function DettailsPers() {

    const { post, setPost, changeLang } = useContext(GlobalContext)

    const { id } = useParams()

    useEffect(() => {
        const person = persons.find(p => p.id === parseInt(id))
        setPost(person)

    }, [id])

    return (
        <main className="main">
            <section>
                {post &&
                    <div className="dettailsCard">
                        <img src={post.image} />
                        <div className="info">
                            <h1>{post.person}</h1>
                            {changeLang ?
                                <div>{post.quoteENG}</div> :
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
                                        <Video video={post.videoEng} /> :
                                        <>
                                            <HandIcon first={post.video} second={post.videoEng} />
                                            'Try to change language for view clip'
                                        </>}
                                </div>}
                            {!changeLang &&
                                <div className={changeLang ? 'd-none' : 'd-block'} >
                                    {post.video ?
                                        <Video video={post.video} /> :
                                        <>
                                            <HandIcon first={post.videoEng} second={post.video} />
                                            'Prova a cambiare lingua per vedere la clip'
                                        </>}
                                </div>}
                        </div>}
                </div>
            </section>
        </main>
    )
}
