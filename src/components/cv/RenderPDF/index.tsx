import Print from "./Print";

export default function RenderPDF() {
    return (
        <>
            <div className="flex justify-center p-2">
                <button
                    type="button"
                    onClick={() => window.print()}
                    className="
                        p-2
                        bg-zinc-300 dark:bg-zinc-700
                        hover:bg-zinc-400 dark:hover:bg-zinc-600
                        text-zinc-700 dark:text-zinc-300
                        rounded-full
                        transition duration-500
                    "
                >
                    Download PDF
                </button>
            </div>
            <div className="flex h-full md:w-5/6 lg:w-4/6 flex-col box-border p-12 bg-white text-black rounded-md overflow-scroll">
                <Print />
            </div>
        </>
    );
}