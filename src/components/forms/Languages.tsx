import { BarChartFill, PlusLg, Translate, TrashFill } from 'react-bootstrap-icons';

import { Button, Input } from '@/components/Input';
import Translator from '@/components/Translator';
import { useCvDataStore } from '@/lib/store';

interface languagesProps {
    id: number,
    value?: {
        language?: string,
        level?: string;
    },
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number, key: "language" | "level") => void;
}

function LanguagesList() {
    const { setLanguages, languages } = useCvDataStore();

    const handleLanguagesChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        key: "language" | "level"
    ) => {
        const newLanguage = [...languages];
        newLanguage[index][key] = event.target.value;
        setLanguages(newLanguage);
    };

    const handleAddLanguages = () => {
        const newLanguage = [...(languages || []), {
            language: '',
            level: 'elementary'
        }];
        setLanguages(newLanguage);
    };

    const handleRemoveLanguages = (index: number) => {
        const newLanguage = [...(languages || [])];
        newLanguage.splice(index, 1);
        setLanguages(newLanguage);
    };

    return (
        <>
            {
                languages?.map((value, index) => (
                    <div key={index} className="flex gap-1">
                        <Languages id={index} value={value} onChange={handleLanguagesChange} />
                        <Button type="button" onClick={() => handleRemoveLanguages(index)}><TrashFill /></Button>
                    </div>
                ))
            }
            <Button type="button" onClick={handleAddLanguages}><PlusLg /></Button>
        </>
    );
}

function Languages(props: languagesProps) {
    return (
        <div className="flex-1 flex gap-1 flex-col lg:flex-row">
            <Input
                rootClassName="flex-1"
                type="text"
                id={"language" + props.id}
                name={"language" + props.id}
                value={props.value?.language}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "language")}
                icon={<Translate />}
                placeholder={Translator({ path: "languages.language" })}
            />
            <Input
                rootClassName="flex-1"
                type="select"
                id={"language" + props.id}
                name={"language" + props.id}
                value={props.value?.level}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e, props.id, "level")}
                icon={<BarChartFill />}
                placeholder={Translator({ path: "languages.select" })}
            >
                <option selected value="elementary" ><Translator path="languages.novice" /></option>
                <option value="limited" ><Translator path="languages.limited" /></option>
                <option value="professional" ><Translator path="languages.professional" /></option>
                <option value="full" ><Translator path="languages.full" /></option>
                <option value="native" ><Translator path="languages.native" /></option>
            </Input>
        </div>
    );
}

export { LanguagesList, Languages };