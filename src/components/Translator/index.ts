import { useTranslation } from 'react-i18next';

export default function Translator({ path }: { path: string }) {
    const { t } = useTranslation();
    return t(path);
}