import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);
    const onClose = () => {
        setShowModal(false);
    };

    useEffect(() => {
        // Add an event listener to close the modal when clicking outside of it
        const handleOutsideClick = (e) => {
            if (e.target.className === "modal-background") {
                setShowModal(false);
            }
        };

        if (showModal) {
            document.addEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [showModal]);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Login</button>
            <Modal onClose={onClose} />
            {showModal && <LoginForm />}
        </>
    );
}

export default LoginFormModal;
