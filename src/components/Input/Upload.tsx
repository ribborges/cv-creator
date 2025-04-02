import { ReactNode, useRef, useState } from "react";
import { CloudArrowUpFill, FileEarmarkFill } from "react-bootstrap-icons";
import clsx from "clsx";

import Loading from "@/components/Loading";
import { buttonStyles } from "./Button";

interface uploadProps {
    disabled?: boolean,
    loading?: boolean,
    onChange: Function,
    className?: string,
    accept?: string,
    children?: ReactNode
}

function Upload(props: uploadProps) {
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
        <div
            className={clsx(
                buttonStyles,
                "relative border-dashed"
            )}
        >
            {
                props.loading ?
                    <Loading /> :
                    <>
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
                            disabled={props.disabled}
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
                    </>
            }
        </div>
    );
}

export { Upload };