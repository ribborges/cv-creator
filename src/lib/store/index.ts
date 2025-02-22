import { create } from 'zustand';
import { info, education, experience, certifications, languages, project, skills } from '../../types/cvData';

type State = {
    info: info,
    education: Array<education>,
    experience: Array<experience>,
    certifications: Array<certifications>,
    languages: Array<languages>,
    skills: skills,
    projects: Array<project>
}

type Actions = {
    setInfo: (info: info) => void,
    setEducation: (education: Array<education>) => void,
    setExperience: (experience: Array<experience>) => void,
    setCertifications: (certifications: Array<certifications>) => void,
    setLanguages: (languages: Array<languages>) => void,
    setSkills: (skills: skills) => void,
    setProjects: (projects: Array<project>) => void
}

const useCvDataStore = create<State & Actions>()((set) => ({
    info: {
        name: "",
        title: "",
        phone: "",
        email: "",
        address: "",
        linkedin: "",
        github: "",
        website: "",
        summary: ""
    },
    education: [],
    experience: [],
    certifications: [],
    languages: [],
    skills: {
        hard: [],
        soft: []
    },
    projects: [],
    setInfo: (info) => set({ info }),
    setEducation: (education) => set({ education }),
    setExperience: (experience) => set({ experience }),
    setCertifications: (certifications) => set({ certifications }),
    setLanguages: (languages) => set({ languages }),
    setSkills: (skills) => set({ skills }),
    setProjects: (projects) => set({ projects })
}));

export { useCvDataStore };