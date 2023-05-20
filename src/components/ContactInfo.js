

export const ContactInfo = ({icon ,text}) => {
    return(
        <div className="contact-info">
            <div className="icon"><img src={icon} alt='icon' /></div>
            <div className="info">{text}</div>
        </div>

    )
}