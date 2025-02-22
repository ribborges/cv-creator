export interface cvData {
    info: info,
    education?: Array<education>,
    experience?: Array<experience>,
    certifications?: Array<certifications>,
    skills?: skills,
    languages?: Array<languages>;
    projects?: Array<project>;
}

export interface info {
    name?: string,
    title?: string,
    email?: string,
    phone: string,
    address: string,
    linkedin: string,
    github: string,
    website: string,
    summary: string;
}

export interface education {
    school: string,
    degree: string,
    field: string,
    location: string,
    start_date: string,
    end_date: string,
    details: string;
}

export interface experience {
    company: string,
    position: string,
    location: string,
    start_date: string,
    end_date: string,
    details: string;
}

export interface certifications {
    name: string,
    organization: string;
}

export interface skills {
    hard: Array<string>,
    soft: Array<string>;
}

export interface languages {
    language: string,
    level: string;
}

export interface project {
    name: string,
    technologies: string,
    description: string,
}

export const cleanData: cvData = {
    info: {
        name: "",
        title: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        github: "",
        website: "",
        summary: ""
    },
    education: [],
    experience: [],
    certifications: [],
    skills: {
        hard: [],
        soft: []
    },
    languages: [],
    projects: []
}