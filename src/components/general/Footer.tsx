import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube
} from 'react-icons/bs'

import "../../style/general/Footer.scss"

function Footer() {
  return (
    <footer>
      <div className='contact'>
        <div className='contact__container container'>
          <div className='contact__content'>
            <div className='contact__content__item'>
              <h3>Client</h3>
              <p>We are always open to discuss your project and improve your online presence.</p>
            </div>
            <div className='contact__content__item'>
              <h2>Lets Talk!</h2>
              <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
              <div className='contact__content__item__icons'>
                <a href='#'><BsFacebook size={20} /></a>
                <a href='#'><BsTwitter size={20} /></a>
                <a href='#'> <BsInstagram size={20} /></a>
                <a href='#'> <BsYoutube size={20} /></a>
              </div>
            </div>
            <div className='contact__content__item'>
              <label>Email me at <br />
                <span>contact@website.com</span>
              </label>
              <label>Call us<br />
                <span>0927 6277 28525</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='author'>
        <label>Copyright ©2022</label>
      </div>
    </footer>
  )
}

export default Footer
