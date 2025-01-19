import { NavLink, Link } from "react-router-dom";
import css from './Card.module.css'
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

export default function Card({ item }) {

    const { person, image, quoteENG, quoteITA, id } = item

    const { changeLang } = useContext(GlobalContext)

    return (
        <>
            <div className={css.card}>
                <Link to={`/person/${id}`} id={css.link}>
                    <div className={css.cardTitle}>
                        <p>{person}</p>
                    </div>
                    <div className={css.cardBody}>
                        <figure>
                            <img src={image} className={css.image} alt="" />
                        </figure>
                        <div className={css.cardContent}>
                            <p className="listItem">{changeLang ? quoteENG : quoteITA}</p>
                        </div>
                    </div>
                </Link>
                <div className={css.styleBtnRead}>
                    <span>Read more about.. </span><br />
                    <NavLink to={`/person/${id}`} className={css.linkBtn}>{person}</NavLink>
                </div>
            </div>
        </>
    )
}