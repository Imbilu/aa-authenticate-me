import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = React.createRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [modalRef]);

    return (
        <>
            {" "}
            <ModalContext.Provider value={value}>
                {children}{" "}
            </ModalContext.Provider>
            <div ref={modalRef}></div>{" "}
        </>
    );
}

export function Modal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    const handleBackgroundClick = (e) => {
        // Check if the clicked element is the background, not the modal content
        if (e.target.id !== "modal-content") {
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div id="modal" onClick={handleBackgroundClick}>
            <div id="modal-background"></div>{" "}
            <div id="modal-content">{children}</div>{" "}
        </div>,
        modalNode
    );
}
