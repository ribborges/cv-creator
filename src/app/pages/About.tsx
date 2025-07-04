import { H2, H3, H4 } from "@/components/Heading";
import Translator from '@/components/Translator';
import { Blanckspace, Spacer } from '@/components/Separator';
import Anchor from "@/components/Anchor";

export default function About() {
    return (
        <div className="flex flex-col gap-2 h-full p-4 md:p-8 lg:p-12 pt-24 lg:pt-36 overflow-auto">
            <H2>
                <Translator path="aboutPage.title" />
            </H2>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="aboutPage.description" />
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="aboutPage.credits" /> <Anchor href="https://github.com/ribborges" target="_blank">Richard de Carvalho Borges</Anchor>.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="aboutPage.license" />
            </p>
            <Blanckspace space={15} />
            <H3>
                <Translator path="aboutPage.help.title" />
            </H3>
            <H4>
                <Translator path="aboutPage.help.howTo.title" />
            </H4>
            <ol className="list-decimal list-inside space-y-2">
                <li className="text-zinc-600 dark:text-zinc-400">
                    <Translator path="aboutPage.help.howTo.description.1" />
                </li>
                <li className="text-zinc-600 dark:text-zinc-400">
                    <Translator path="aboutPage.help.howTo.description.2" />
                </li>
                <li className="text-zinc-600 dark:text-zinc-400">
                    <Translator path="aboutPage.help.howTo.description.3" />
                </li>
            </ol>
            <Blanckspace space={10} />
            <H4>
                <Translator path="aboutPage.help.issue.title" />
            </H4>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="aboutPage.help.issue.description" /> <Anchor href="https://github.com/ribborges/cv-creator/issues">GitHub</Anchor>.
            </p>
            <Blanckspace space={10} />
            <H4>
                <Translator path="aboutPage.help.contribute.title" />
            </H4>
            <p className="text-zinc-600 dark:text-zinc-400">
                <Translator path="aboutPage.help.contribute.description" /> <Anchor href="https://github.com/ribborges/cv-creator/pulls">GitHub</Anchor>
            </p>
        </div>
    );
}