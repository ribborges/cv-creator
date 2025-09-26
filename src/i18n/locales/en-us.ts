import { t } from "i18next";

export default {
    translations: {
        nav: {
            home: 'Home',
            about: 'About',
            source: 'Source'
        },
        homePage: {
            title: 'Welcome to CV Creator',
            subtitle: 'Create your CV with ease!',
            description: {
                1: 'CV Creator is an open-source project that allows you to create your CV in a simple and intuitive way.',
                2: 'You can start from scratch or import your existing CV in JSON or PDF format.'
            },
            start: 'Get started',
            import: 'Drag and drop the .json or .pdf file or click to upload'
        },
        aboutPage: {
            title: 'About CV Creator',
            description: 'CV Creator is an open-source project that allows you to create your CV in a simple and intuitive way.',
            credits: 'Created by',
            license: 'Licensed under the Mozilla Public License 2.0 (MPL-2.0).',
            help: {
                title: 'Need help?',
                howTo: {
                    title: 'How to use CV Creator?',
                    description: {
                        1: 'Fill in the form with your personal information, education, work experience, certifications, languages, skills, and projects.',
                        2: 'Yor CV will be rendered in real-time as you fill in the form.',
                        3: 'Once you complete the form, you can export your CV as a JSON file or view it as a PDF.'
                    }
                },
                issue: {
                    title: 'Found a bug or have a feature request?',
                    description: 'You can report bugs or request features on the GitHub repository:',
                },
                contribute: {
                    title: 'Want to contribute?',
                    description: 'You can contribute to the project by opening a pull request on the GitHub repository:'
                }
            }
        },
        menu: {
            edit: 'Edit',
            preview: 'Preview',
            info: 'Info',
            education: 'Education',
            experience: 'Experience',
            certifications: 'Certifications',
            languages: 'Languages',
            skills: 'Skills',
            projects: 'Projects',
            print: 'Download .pdf',
            export: 'Export .json',
        },
        info: {
            title: 'Personal information',
            description: {
                1: 'This section contains your personal details such as name, contact information, and a brief summary of your professional background.',
                2: 'Make sure to keep this information up-to-date to reflect your current status and contact details.'
            },
            name: 'Name',
            personal_title: 'Title',
            phone: 'Phone',
            email: 'Email',
            address: 'Address',
            portfolio: 'Portfolio',
            summary: 'Summary'
        },
        education: {
            title: 'Education history',
            description: {
                1: 'This section allows you to add your educational background, including degrees, institutions, and dates attended.',
                2: 'Make sure to include relevant details that highlight your academic achievements and qualifications.'
            },
            name: 'School name',
            degree: 'Degree',
            field: 'Field of study',
            location: 'Location',
            start_date: 'Begin date',
            end_date: 'End date',
            details: 'Details'
        },
        experience: {
            title: 'Work experience',
            description: {
                1: 'This section allows you to add your work experience, including job titles, companies, and dates of employment.',
                2: 'Make sure to include relevant details that highlight your professional achievements and responsibilities.'
            },
            company: 'Company name',
            position: 'Job title',
            location: 'Location',
            start_date: 'Begin date',
            end_date: 'End date',
            details: 'Details'
        },
        certifications: {
            title: 'Licenses & Certifications',
            description: {
                1: 'This section allows you to add your certifications, including the name of the certification and issuing organization.',
                2: 'Make sure to include relevant details that highlight your professional qualifications and achievements.'
            },
            name: 'License/Certification name',
            organization: 'Issuing organization'
        },
        languages: {
            title: 'Languages',
            description: {
                1: 'This section allows you to add the languages you speak, along with your proficiency level in each language.',
                2: 'Make sure to include relevant details that highlight your language skills and abilities.'
            },
            language: 'Language',
            select: 'Select',
            novice: 'Elementary',
            limited: 'Limited',
            professional: 'Professional',
            full: 'Advanced',
            native: 'Native or bilingual'
        },
        skills: {
            title: 'Skills',
            description: {
                1: 'This section allows you to add your skills, categorized into hard and soft skills.',
                2: 'Hard skills are specific, teachable abilities or knowledge sets, while soft skills are interpersonal skills that help you interact effectively with others.',
                3: 'Make sure to include skills that are relevant to the job you are applying for, as well as any certifications or training you have received.'
            },
            skill: 'Skill',
            hard: 'Hard skills',
            soft: 'Soft skills'
        },
        projects: {
            title: 'Projects',
            description: {
                1: 'This section allows you to add your projects, including the project name, description, and technologies used.',
                2: 'Make sure to include relevant details that highlight your project management skills and technical expertise.'
            },
            project: 'Project',
            name: 'Project name',
            skills: 'Skills used',
            details: 'Details'
        },
        buttons: {
            export: 'Export .json file',
            import: 'Drag and drop the .json or .pdf file or click to upload',
            view: 'View .pdf'
        }
    }
};