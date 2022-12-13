import { Link } from "react-router-dom"
import "../../style/work/WorkContact.scss"

function WorkContact() {
    return (
        <section className="work__contact">
            <div className="container">
                <h2>Let's build something great together</h2>
                <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
            </div>
            <Link to="" className="btn btn-yellow">Contact Us</Link>
        </section>
    )
}

export default WorkContact