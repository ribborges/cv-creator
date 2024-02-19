import { ReactNode, useState } from 'react';

import './_style.scss';

interface collapseProps {
    title: ReactNode,
    children?: ReactNode
}

export default function Collapse(props: collapseProps) {
    return (
        <details className="details">
            <summary className="summary">{props.title}</summary>
            <div className="content">
                {props.children}
            </div>
        </details>
    );
}