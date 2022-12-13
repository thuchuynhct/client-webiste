import { createPortal } from 'react-dom'
import { RiArrowUpSLine } from "react-icons/ri"
import "../../style/general/ScrollToTop.scss"

function ScrollToTop() {
    return createPortal(
        <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='scroll__to__top' >
            <RiArrowUpSLine size={30} />
        </div >
        , document.querySelector("#root") as HTMLElement
    )
}

export default ScrollToTop