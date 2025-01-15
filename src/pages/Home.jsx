// import css from './Home.module.css'
import griffin from '../assets/griffin.jpg'

export default function Home() {

    return (
        <>
            <div className="flexItem">
                <h1 className='titleHome'>The Family Guy</h1>
                <img src={griffin} className='imgHome' />
            </div>

        </>
    )
}