import { create } from 'zustand';
import { personalInfo, eduHistory, workExp, licensesCertif, languages } from '../../types/cvData';

type State = {
    personalInfo: personalInfo,
    eduHistory: Array<eduHistory>,
    workExp: Array<workExp>,
    licensesCertif: Array<licensesCertif>,
    languages: Array<languages>,
    skills: Array<string>
}

type Actions = {
    setPersonalInfo: (personalInfo: personalInfo) => void,
    setEduHistory: (eduHistory: Array<eduHistory>) => void,
    setWorkExp: (workExp: Array<workExp>) => void,
    setLicensesCertif: (licensesCertif: Array<licensesCertif>) => void,
    setLanguages: (languages: Array<languages>) => void,
    setSkills: (skills: Array<string>) => void
}

const useCvDataStore = create<State & Actions>()((set) => ({
    personalInfo: {
        name: "",
        phone: "",
        email: "",
        address: "",
        linkedinUrl: "",
        githubUrl: "",
        portfolioUrl: "",
        summary: ""
    },
    eduHistory: [],
    workExp: [],
    licensesCertif: [],
    languages: [],
    skills: [],
    setPersonalInfo: (personalInfo) => set({ personalInfo }),
    setEduHistory: (eduHistory) => set({ eduHistory }),
    setWorkExp: (workExp) => set({ workExp }),
    setLicensesCertif: (licensesCertif) => set({ licensesCertif }),
    setLanguages: (languages) => set({ languages }),
    setSkills: (skills) => set({ skills })
}));

export { useCvDataStore };