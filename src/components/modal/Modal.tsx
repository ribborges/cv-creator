import React, { ReactNode, useState } from 'react';
import { Button } from '../input/Button';
import Spacer from '../separator/Spacer';

import './_style.scss';

interface modalProps {
    buttonText?: string,
    title?: string,
    className?: string,
    children?: ReactNode,
}

export default function Modal(props: modalProps) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button className={props.className} onClick={openModal}>{props.buttonText}</Button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <Button onClick={closeModal}>
                                <i className="bi bi-x-circle-fill" />
                            </Button>
                            <span className="modal-title">{props.title}</span>
                        </div>
                        <Spacer height={50} />
                        <div className="modal-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}