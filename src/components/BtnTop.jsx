import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

export default function BtnTop() {

    function top() {
        document.documentElement.scrollTop = 0
    }

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.documentElement.scrollTop > 500) {
            btn_top.style.display = "block";
        } else {
            btn_top.style.display = "none";
        }
    }

    return (
        <button id="btn_top" onClick={top}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button >
    )
}