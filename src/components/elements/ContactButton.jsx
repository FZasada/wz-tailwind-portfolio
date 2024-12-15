import { EMAIL } from "../../constants";
import Button from "./Button"

import envelope_w from '../../assets/icons/envelope_w.png'


const ContactButton = () => {
    const contact = () => {
        console.log("Contacting ", EMAIL);
        window.location.href = `mailto:${EMAIL}`;
    }

    return (
        <Button text="Contact me" icon={envelope_w} onClick={contact}/>
    )
}

export default ContactButton
