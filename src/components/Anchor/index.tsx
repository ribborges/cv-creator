import { AnchorHTMLAttributes } from "react";

export default function Anchor({ className = "text-purple-600 hover:text-pink-600 transition duration-500 cursor-pointer", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            className={className}
            {...props}
        >
            {props.children}
        </a>
    );
}