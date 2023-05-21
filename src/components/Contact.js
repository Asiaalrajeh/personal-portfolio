import { ContactInfo} from "./ContactInfo";
import email from '../assets/img/email.png';
import phone from '../assets/img/phone.png';
import location from '../assets/img/location.png';
import { ContactForm } from "./ContactForm";


export const Contact =() => {
    return(
        <section className="contact" id="contact">
            <h2>Contact</h2>
            <div className="con-box">
                <div className="left">
                  <ContactInfo icon={email} text="alrajehasia@gmail.com" />
                  <ContactInfo icon={phone} text="+966 557699808" />
                  <ContactInfo icon={location} text="Riyadh,Saudi Arabia" />
                </div>
                <div className="right">
                    <ContactForm/>
                </div>

            </div>
        </section>
    )
}