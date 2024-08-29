import { useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);
    const onClose = () => {
        setShowModal(false);
    };
    return (
        <>
            <button onClick={() => setShowModal(true)}>Login</button>
            <Modal onClose={onClose} />
            {showModal && <LoginForm />}
        </>
    );
}

export default LoginFormModal;
