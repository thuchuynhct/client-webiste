import { useNavigate } from "react-router-dom"
import "../../style/contact/ContactForm.scss"

function ContactForm() {
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate("/faq");
    }
    return (
        <section className="contact__form">
            <div className="max__w__1050">
                <div className="contact__form__heading">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">
                        <span>Name</span><br />
                        <input type="text" required id="name" placeholder="Enter your name" />
                    </label>
                    <label htmlFor="email">
                        <span>Email</span><br />
                        <input type="text" required id="email" placeholder="Enter your email" />
                    </label>
                    <label htmlFor="provide">
                        <span>Subject</span><br />
                        <input type="text" required id="provide" placeholder="Provide context" />
                    </label>
                    <label htmlFor="subject">
                        <span>Subject</span><br />
                        <input type="text" required id="subject" placeholder="Select Subject" />
                    </label>
                    <label htmlFor="message">
                        <span>Message</span><br />
                        <textarea required id="message" placeholder="Write your  question here" />
                    </label>
                    <div className="contact__form__button">
                        <button type="submit" className="btn btn-black">Send Messege</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm