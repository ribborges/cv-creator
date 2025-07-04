import { Button } from "@/components/Input";

import Print from "./Print";

export default function RenderPDF() {
    return (
        <div className="flex flex-1 flex-col items-stretch p-2 gap-4 overflow-hidden">
            <div className="flex h-full flex-col box-border p-12 bg-white text-black border border-zinc-300 dark:border-zinc-700 rounded-md overflow-scroll">
                <Print />
            </div>
        </div>
    );
}