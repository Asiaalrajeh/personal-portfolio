import React,{ useState} from "react";
import emailjs from '@emailjs/browser';

export const ContactForm =() => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const sendEmail = (e) => {
       // console.log("test");
        e.preventDefault();
        emailjs.sendForm('service_16kfnuz', 'template_pbpcbhb',e.target,'gJBJOr_Vpw09Uw07K');
        setName("");
        setEmail("");
        setMsg("");
    }

    return(
       <div>
        <form onSubmit={sendEmail}>
            <div className="form-field">
                <label htmlFor="name">
                    Your name
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-field">
                <label htmlFor="email">
                    Your email
                    <input
                    type="text"
                    id="email"
                    name="emailFrom"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-field">
                <label htmlFor="msg">
                    Your message
                    <textarea
                    type="text"
                    id="msg"
                    name="msg"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Send</button>
        </form>
       </div> 
    )
}