import { ReactNode, useState } from 'react';
import { CaretRightFill } from 'react-bootstrap-icons';

interface collapseProps {
    title: ReactNode,
    children?: ReactNode
}

export default function Collapse(props: collapseProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <details className="flex gap-5">
            <summary onClick={handleClick} className="flex gap-5 items-center text-purple-700 hover:text-pink-700 transition duration-500 flex-2">
                <CaretRightFill className={`transform ${isOpen ? 'rotate-90' : ''} transition duration-500`} />
                {props.title}
            </summary>
            <div>
                {props.children}
            </div>
        </details>
    );
}