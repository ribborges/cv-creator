import { HfInference } from '@huggingface/inference';

import { token } from '../config/env';

const inference = new HfInference(token);
const model = 'google/gemma-2-2b-it';

async function askData(dataString: string) {
    const results = await inference.chatCompletion({
        model,
        messages: [
            {
                role: 'user',
                content: `
                Dont answer anything else, just take the input (A curriculum) and format to a
                json using the data provided. Here is the json format (Remove unnused fields):
                {
                    "info": {
                        "name": "string",
                        "title": "string",
                        "email": "string",
                        "phone": "string",
                        "address": "string",
                        "linkedin": "string",
                        "github": "string",
                        "website": "string",
                        "summary": "string"
                    },
                    "education": [
                        {
                            "school": "string",
                            "degree": "string",
                            "field": "string",
                            "location": "string",
                            "start_date": Date(month/year),
                            "end_date": Date(month/year),
                            "details": "string"
                        }
                    ],
                    "experience": [
                        {
                            "company": "string",
                            "position": "string",
                            "location": "string",
                            "start_date": Date(month/year),
                            "end_date": Date(month/year),
                            "details": "string"
                        }
                    ],
                    "certifications": [
                        {
                            "name": "string",
                            "organization": "string"
                        }
                    ],
                    "languages": [
                        {
                            "language": "string",
                            "level": "elementary" | "limited" | "professional" | "full" | "native"
                        }
                    ],
                    "skills": {
                        "hard": [ "string" ],
                        "soft": [ "string" ]
                    },
                    "projects": [
                        {
                            "name": "string",
                            "technologies": "string",
                            "description": "string"
                        }
                    ]
                }
                The data: ${dataString}
                `
            },
        ],
        max_tokens: 2048,
        temperature: 0.7
    });

    return results.choices[0].message.content;
}

export { askData };