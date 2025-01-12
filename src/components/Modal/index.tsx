import { ReactNode, useState } from 'react';
import { Button } from '../input/Button';
import { Blanckspace, Spacer } from '../Separator';
import { X } from "react-bootstrap-icons";

interface modalProps {
    buttonText?: string,
    title?: string,
    className?: string,
    disabled?: boolean,
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
            <Button className={props.className} onClick={openModal} disabled={props.disabled == undefined ? false : props.disabled}>{props.buttonText}</Button>

            {isOpen && (
                <div className="
                    fixed flex box-border
                    z-[99] left-0 top-0
                    w-screen h-screen
                    overflow-hidden
                    bg-zinc-100 dark:bg-zinc-950/50
                    backdrop-blur-sm
                ">
                    <div className="
                        flex flex-col box-border
                        m-auto p-5
                        w-5/6 h-5/6
                        rounded-xl border border-solid border-zinc-300 dark:border-zinc-800
                        bg-zinc-200 dark:bg-zinc-900
                        shadow-2xl shadow-black/20 dark:shadow-zinc-200/20
                    ">
                        <div className="flex content-center items-center gap-5">
                            <Button onClick={closeModal}>
                                <X />
                            </Button>
                            <span className="text-4xl font-bold">{props.title}</span>
                        </div>
                        <Spacer height={50} />
                        <div className="flex-1">
                            {props.children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}