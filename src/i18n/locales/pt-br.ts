import { t } from "i18next";

export default {
    translations: {
        nav: {
            home: 'Início',
            about: 'Sobre',
            source: 'Código Fonte'
        },
        homePage: {
            title: 'Bem-vindo ao Criador de Currículos',
            subtitle: 'Crie seu currículo com facilidade!',
            description: {
                1: 'O Criador de Currículos é um projeto de código aberto que permite criar seu currículo de forma simples e intuitiva.',
                2: 'Você pode começar do zero ou importar seu currículo existente nos formatos JSON ou PDF.'
            },
            start: 'Começar',
            import: 'Arraste e solte o arquivo .json ou .pdf ou clique para fazer o upload'
        },
        aboutPage: {
            title: 'Sobre o Criador de Currículos',
            description: 'O Criador de Currículos é um projeto de código aberto que permite criar seu currículo de forma simples e intuitiva.',
            credits: 'Criado por',
            license: 'Licenciado sob a Licença Pública Mozilla 2.0 (MPL-2.0).',
            help: {
                title: 'Precisa de ajuda?',
                howTo: {
                    title: 'Como usar o Criador de Currículos?',
                    description: {
                        1: 'Preencha o formulário com suas informações pessoais, histórico acadêmico, experiência profissional, certificações, idiomas, habilidades e projetos.',
                        2: 'Seu currículo será renderizado em tempo real à medida que você preenche o formulário.',
                        3: 'Depois de completar o formulário, você pode exportar seu currículo como um arquivo JSON ou visualizá-lo como um PDF.'
                    }
                },
                issue: {
                    title: 'Encontrou um bug ou tem uma solicitação de recurso?',
                    description: 'Você pode relatar bugs ou solicitar recursos no repositório do GitHub:'
                },
                contribute: {
                    title: 'Quer contribuir?',
                    description: 'Você pode contribuir para o projeto abrindo um pull request no repositório do GitHub:'
                }
            }
        },
        menu: {
            edit: 'Editar',
            preview: 'Visualizar',
            info: 'Informações',
            education: 'Educação',
            experience: 'Experiência',
            certifications: 'Certificações',
            languages: 'Idiomas',
            skills: 'Habilidades',
            projects: 'Projetos',
            print: 'Baixar .pdf',
            export: 'Exportar .json'
        },
        info: {
            title: 'Informações pessoais',
            description: {
                1: 'Esta seção contém seus dados pessoais, como nome, informações de contato e um breve resumo do seu histórico profissional.',
                2: 'Certifique-se de manter essas informações atualizadas para refletir seu status e detalhes de contato atuais.'
            },
            name: 'Nome',
            personal_title: 'Título',
            phone: 'Telefone',
            email: 'Email',
            address: 'Endereço',
            summary: 'Resumo'
        },
        education: {
            title: 'Histórico acadêmico',
            description: {
                1: 'Esta seção permite que você adicione seu histórico educacional, incluindo graus, instituições e datas de frequência.',
                2: 'Certifique-se de incluir detalhes relevantes que destaquem suas conquistas acadêmicas e qualificações.'
            },
            school: 'Nome da escola',
            degree: 'Grau',
            field: 'Área de estudo',
            location: 'Localização',
            start_date: 'Data de início',
            end_date: 'Data de conclusão',
            details: 'Detalhes'
        },
        experience: {
            title: 'Experiência de trabalho',
            description: {
                1: 'Esta seção permite que você adicione sua experiência de trabalho, incluindo cargos, empresas e datas de emprego.',
                2: 'Certifique-se de incluir detalhes relevantes que destaquem suas conquistas e responsabilidades profissionais.'
            },
            company: 'Nome da empresa',
            position: 'Cargo',
            location: 'Localização',
            start_date: 'Data de início',
            end_date: 'Data de conclusão',
            details: 'Detalhes'
        },
        certifications: {
            title: 'Licenças e Certificações',
            description: {
                1: 'Esta seção permite que você adicione suas certificações, incluindo o nome da certificação e a organização emissora.',
                2: 'Certifique-se de incluir detalhes relevantes que destaquem suas qualificações e conquistas profissionais.'
            },
            name: 'Nome da Licença/Certificação',
            organization: 'Organização emissora'
        },
        languages: {
            title: 'Idiomas',
            description: {
                1: 'Esta seção permite que você adicione os idiomas que fala, juntamente com seu nível de proficiência em cada idioma.',
                2: 'Certifique-se de incluir detalhes relevantes que destaquem suas habilidades e capacidades linguísticas.'
            },
            language: 'Idioma',
            select: 'Selecione',
            novice: 'Básico',
            limited: 'Intermediário',
            professional: 'Profissional',
            full: 'Avançado',
            native: 'Nativa ou bilíngue'
        },
        skills: {
            title: 'Habilidades',
            description: {
                1: 'Esta seção permite que você adicione suas habilidades, categorizadas em habilidades técnicas e interpessoais.',
                2: 'Habilidades técnicas são habilidades específicas e ensináveis, enquanto habilidades interpessoais são habilidades sociais que ajudam você a interagir efetivamente com os outros.',
                3: 'Certifique-se de incluir habilidades relevantes para o trabalho ao qual está se candidatando, bem como quaisquer certificações ou treinamentos que tenha recebido.'
            },
            skill: 'Habilidade',
            hard: 'Habilidades técnicas',
            soft: 'Habilidades interpessoais'
        },
        projects: {
            title: 'Projetos',
            description: {
                1: 'Esta seção permite que você adicione seus projetos, incluindo o nome do projeto, descrição e tecnologias utilizadas.',
                2: 'Certifique-se de incluir detalhes relevantes que destaquem suas habilidades de gerenciamento de projetos e expertise técnica.'
            },
            project: 'Projeto',
            name: 'Nome do projeto',
            skills: 'Habilidades utilizadas',
            details: 'Detalhes'
        },
        buttons: {
            export: 'Exportar arquivo .json',
            import: 'Arraste e solte o arquivo .json ou .pdf ou clique para fazer o upload',
            view: 'Visualizar .pdf'
        },
        notFound: {
            title: '404: Não Encontrado',
            description: 'A página que você está procurando não existe.'
        }
    }
};  