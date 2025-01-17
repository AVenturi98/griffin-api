import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

export default function HandIcon({ first, second }) {

    return (
        <>
            <div id="iconHand">
                <FontAwesomeIcon icon={faHandPointUp} className={first && !second ? "iconHandUp" : 'd-none'} />
            </div>
        </>
    )
}