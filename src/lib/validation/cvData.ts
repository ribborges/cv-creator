import { z } from 'zod';

const cvDataSchema = z.object({
    info: z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
        summary: z.string().optional(),
        linkedin: z.string().optional(),
        github: z.string().optional(),
        website: z.string().optional()
    }).optional(),
    education: z.array(z.object({
        institution: z.string().optional(),
        degree: z.string().optional(),
        fieldOfStudy: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        description: z.string().optional()
    })).optional(),
    experience: z.array(z.object({
        company: z.string().optional(),
        position: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        description: z.string().optional()
    })).optional(),
    certifications: z.array(z.object({
        title: z.string().optional(),
        issuer: z.string().optional(),
        date: z.string().optional(),
        description: z.string().optional()
    })).optional(),
    languages: z.array(z.object({
        language: z.string().optional(),
        level: z.enum(['elementary', 'limited', 'professional', 'full', 'native']).optional()
    })).optional(),
    skills: z.object({
        hard: z.array(z.string()).optional(),
        soft: z.array(z.string()).optional()
    }).optional(),
    projects: z.array(z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        technologies: z.string().optional(),
        link: z.string().url().optional()
    })).optional()
}).strict();

export { cvDataSchema };