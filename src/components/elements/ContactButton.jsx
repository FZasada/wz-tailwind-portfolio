import { EMAIL } from "../../constants";
import Button from "./Button"


const ContactButton = () => {
    const contact = () => {
        console.log("Contacting ", EMAIL);
        window.location.href = `mailto:${EMAIL}`;
    }

    return (
        <Button text="Contact me" icon={'/src/assets/icons/envelope_w.png'} onClick={contact}/>
    )
}

export default ContactButton
