interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export default function Section(props: SectionProps) {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <span className="text-base font-bold border-b border-solid border-black">
                {props.title}
            </span>
            <div className="text-justify">
                {props.children}
            </div>
        </div>
    );
}