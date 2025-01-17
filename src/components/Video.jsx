export default function Video({ video }) {

    return (
        <>
            <video width="650px" controls>
                <source src={video} type="video/mp4" />
                Il tuo browser non supporta il tag video.
            </video>
        </>
    )
}