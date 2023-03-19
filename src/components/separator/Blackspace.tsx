import './_style.scss';

interface blanckspaceProps {
    height?: number;
}

export default function Blanckspace(props: blanckspaceProps) {
    return (
        <hr style={{
            height: (props.height === undefined ? "30px" : props.height + "px"),
        }} className="blankspace"/>
    )
}