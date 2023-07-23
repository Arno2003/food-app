import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return (
        <div className="footer container">
            <div className="footer-section">
                <p className="title">FoodiesHub.com</p>
                <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisines. And our services is absolutely free.</p>
                <p>&copy; 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>foodieshub@gmail.com</p>
                <p>+91 9488325685</p>
                <p>2nd Lane MG Road, Kolkata</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p><FontAwesomeIcon icon={faFacebook}/> Facebook</p>
                <p><FontAwesomeIcon icon={faTwitter} /> Twitter</p>
                <p><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
            </div>
        </div>
    )
}