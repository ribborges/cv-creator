export interface cvData {
    personalInfo?: personalInfo,
    eduHistory?: Array<eduHistory>,
    workExp?: Array<workExp>,
    licensesCertif?: Array<licensesCertif>,
    skills?: Array<string>,
    languages?: Array<languages>;
}

export interface personalInfo {
    name: string,
    phone: string,
    email: string,
    address: string,
    linkedinUrl: string,
    githubUrl: string,
    portfolioUrl: string,
    summary: string;
}

export interface eduHistory {
    schoolName: string,
    schoolDegree: string,
    schoolFieldStudy: string,
    schoolLocation: string,
    schoolBgDate: string,
    schoolEdDate: string,
    schoolDetails: string;
}

export interface workExp {
    workCompanyName: string,
    workJobTitle: string,
    workLocation: string,
    workBgDate: string,
    workEdDate: string,
    workDetails: string;
}

export interface licensesCertif {
    licensesCertifName: string,
    licensesCertifOrg: string;
}

export interface languages {
    language: string,
    level: string;
}

export const cleanData: cvData = {
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
    skills: [],
    languages: []
}