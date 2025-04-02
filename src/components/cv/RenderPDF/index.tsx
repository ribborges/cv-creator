import { Button } from "@/components/Input";

import Print from "./Print";

export default function RenderPDF() {
    return (
        <div className="flex-1 flex flex-col items-stretch p-4 gap-4">
            <Button
                type="button"
                onClick={() => window.print()}
            >
                Download PDF
            </Button>
            <div className="flex h-full flex-col box-border p-12 bg-white text-black rounded-md overflow-scroll">
                <Print />
            </div>
        </div>
    );
}