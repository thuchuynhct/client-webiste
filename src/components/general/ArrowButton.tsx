import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import "../../style/general/ArrowButton.scss"

function ArrowButton({ to, text, color, className }: { to: string, text: string, color: string, className?: string }) {
    return (
        <div className={`arrow__button ${className ?? ""}`}>
            <Link onClick={() => window.scrollTo(0, 0)} className='arrow__button__link' to={to} style={{ color: color }}>
                <label>{text}</label>
                <HiOutlineArrowNarrowRight />
            </Link>
        </div>
    )
}

export default ArrowButton