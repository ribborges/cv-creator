import './_style.scss';

interface spacerProps {
    height?: number;
}

export default function Spacer(props: spacerProps) {
    return (
        <hr style={{
            marginTop: (props.height === undefined ? "60px" : props.height/2 + "px"),
            marginBottom: (props.height === undefined ? "60px" : props.height/2 + "px")
        }} className="spacer"/>
    )
}