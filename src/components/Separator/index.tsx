interface SeparatorProps {
    height?: number;
}

function Spacer({ height = 120 }: SeparatorProps) {
    return <hr
        style={{ marginTop: `${height/2}px`, marginBottom: `${height/2}px` }}
        className="
            border-t-1 border-solid border-t-zinc-500/20
    "/>;
}
2
function Blanckspace({ height = 60 }: SeparatorProps) {
    return <hr
        style={{ height: `${height}px` }}
        className="border-none"
    />;
}

export { Spacer, Blanckspace };