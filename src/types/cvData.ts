export interface cvData {
    name?: string,
    phone?: string,
    email?: string,
    address?: string,
    linkedinUrl?: string,
    githubUrl?: string,
    portfolioUrl?: string,
    summary?: string,
    eduHistory?: Array<{
        schoolName?: string,
        schoolDegree?: string,
        schoolFieldStudy?: string,
        schoolLocation?: string,
        schoolBgDate?: string,
        schoolEdDate?: string,
        schoolDetails?: string;
    }>,
    workExp?: Array<{
        workCompanyName?: string,
        workJobTitle?: string,
        workLocation?: string,
        workBgDate?: string,
        workEdDate?: string,
        workDetails?: string;
    }>,
    licensesCertif?: Array<{
        licensesCertifName?: string,
        licensesCertifOrg?: string;
    }>,
    skills?: Array<string>,
    languages?: Array<{
        language?: string,
        level?: string;
    }>;
}

export const cleanData: cvData = {
    name: '',
    phone: '',
    email: '',
    address: '',
    linkedinUrl: '',
    githubUrl: '',
    portfolioUrl: '',
    summary: '',
    eduHistory: [],
    workExp: [],
    licensesCertif: [],
    skills: [],
    languages: []
}