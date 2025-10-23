import { useNavigate } from "react-router";

import { H2, H4 } from "@/components/Heading";
import Translator from '@/components/Translator';
import { Blanckspace, Spacer } from '@/components/Separator';
import { AnimatedButton } from "@/components/Input";

export default function NotFound() {
    const navigate = useNavigate();

    // Randomly select a 404 alien image
    const alienImages = [
        "/img/alien_1f47d.png",
        "/img/flying-saucer_1f6f8.png",
        "/img/alien-monster_1f47e.png",
    ];
    const randomAlien = alienImages[Math.floor(Math.random() * alienImages.length)];

    return (
        <div className="flex flex-col justify-center items-center gap-4 h-full p-4 md:p-8 lg:p-12 pt-24 lg:pt-36 overflow-auto">
            <img src={randomAlien} alt="404 Not Found Alien" className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64" />
            <Blanckspace space={16} />
            <H2>
                <Translator path="notFound.title" />
            </H2>
            <H4 className="text-center max-w-xl">
                <Translator path="notFound.description" />
            </H4>
            <Spacer space={16} />
            <AnimatedButton onClick={() => navigate("/", { replace: true })}>
                <Translator path="nav.home" />
            </AnimatedButton>
        </div>
    );
}
