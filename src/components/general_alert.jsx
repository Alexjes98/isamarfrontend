import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function generalAlert({ variant, icon, message, show }) {
    return (
        show && <Alert variant={variant}>
            <FontAwesomeIcon icon={icon} /> {message}
        </Alert>

    )
}