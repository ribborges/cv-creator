import { ReactNode } from 'react';
import { XLg } from "react-bootstrap-icons";

import { Spacer } from '@/components/Separator';

interface ModalProps {
    closeBtn: () => void,
    title?: string,
    children?: ReactNode,
}

export default function Modal(props: ModalProps) {
    return (
        <div id='no-print' className="
            fixed
            flex box-border
            z-99
            w-screen h-screen
            overflow-hidden
            backdrop-blur-xs
        ">
            <div className="
                flex flex-col box-border
                m-auto
                rounded-4xl border border-solid border-zinc-200 dark:border-zinc-900
                bg-zinc-100 dark:bg-zinc-950
                shadow-2xl shadow-black/20 dark:shadow-zinc-200/20
                overflow-hidden
            ">
                <div className="flex items-center justify-between p-6">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold">{props.title}</span>
                    <button onClick={props.closeBtn} className="p-1 m-1 rounded-full hover:bg-red-600 transition duration-500">
                        <XLg />
                    </button>
                </div>
                <Spacer space={0} />
                <div className="flex flex-1 overflow-hidden relative">
                    {props.children}
                </div>
            </div>
        </div>
    );
}