import { ReactNode, useRef, useState } from "react";
import { CloudArrowUpFill, FileEarmarkFill } from "react-bootstrap-icons";

import classConcat from "../../utils/classConcat";

interface uploadProps {
    onChange: Function,
    className?: string,
    accept?: string,
    children?: ReactNode
}

export default function Upload(props: uploadProps) {
    const [file, setFile] = useState<File>();
    const uploadRef = useRef<any>(null);

    const onDragEnter = () => {
        uploadRef.current.classList.add("dragover");
    }

    const onDragLeave = () => {
        uploadRef.current.classList.remove("dragover");
    }

    const onDrop = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files) {
            setFile(event.target.files[0]);
            props.onChange(event);
        } else {
            console.log("Null file");
        }
    }

    return (
        <div className={classConcat(`
            relative
                text-zinc-800 dark:text-zinc-200 disabled:text-zinc-600 dark:disabled:text-zinc-400
                bg-transparent hover:bg-purple-700 focus:bg-purple-700
                disabled:bg-transparent
                hover:shadow-2xl focus:shadow-2xl
                hover:shadow-zinc-950/20 focus:shadow-zinc-950/20
                dark:hover:shadow-zinc-200/20 dark:focus:shadow-zinc-200/20
                disabled:hover:shadow-none disabled:focus:shadow-none
                inline-block
                p-5 m-1
                rounded-xl border border-dashed
                border-purple-700 disabled:border-zinc-400
                transition duration-500
            `, props.className || "")}
        >
            <div
                ref={uploadRef}
                className={`
                    text-zinc-800 dark:text-zinc-200
                    text-lg
                    flex flex-col
                    items-center text-center
                    transition duration-500
                    file-upload-label
                `}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDragLeave}
            >
                {
                    file == null || file == undefined ?
                        <>
                            <CloudArrowUpFill size={64} />
                            <p>{props.children}</p>
                        </> :
                        <>
                            <FileEarmarkFill size={64} />
                            <p>{file.name}</p>
                        </>
                }
            </div>
            <input
                type="file"
                onChange={onDrop}
                accept={props.accept}
                className={`
                    absolute
                    top-0 left-0
                    opacity-0
                    w-full
                    h-full
                    cursor-pointer
                `}
            />
        </div>
    );
}