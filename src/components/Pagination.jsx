import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import GlobalContext from "../context/GlobalContext"

export default function Pagination() {

    const { currentPage, setCurrentPage, startIndex, totalPages } = useContext(GlobalContext)
    const btnTop = document.documentElement.scrollTop = 0

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
            btnTop
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            btnTop
        }
    }

    return (
        <div className="pagination">
            <button type="button" onClick={handlePreviousPage} disabled={currentPage === 1}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
            <span>Page <span className={startIndex > 1 ? 'color' : 'opacity'}>{currentPage}</span>  of <span className={totalPages == currentPage ? 'opacity' : 'color'}>{totalPages}</span> </span>
            <button type="button" onClick={handleNextPage} disabled={currentPage === totalPages}><FontAwesomeIcon icon={faArrowRightLong} /></button>
        </div>
    )
}