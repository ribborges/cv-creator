import { Input } from '../input/Input';

interface eduHistoryProps {
    className?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export default function PersonalInfo(props: eduHistoryProps) {
    return (
        <div className={props.className + " flex-container"}>
            <div className="flex-container">
                <Input type="color" icon=""></Input>
                <Input type="button" icon=""></Input>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    onChange={props.onChange}
                    icon="bi bi-fonts"
                    placeholder="Nome"
                />
                <Input
                    type="phone"
                    id="phone"
                    name="phone"
                    onChange={props.onChange}
                    icon="bi bi-telephone"
                    placeholder="Telefone"
                />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    onChange={props.onChange}
                    icon="bi bi-envelope"
                    placeholder="Email"
                />
                <Input
                    type="text"
                    id="address"
                    name="address"
                    onChange={props.onChange}
                    icon="bi bi-geo-alt"
                    placeholder="Endereço"
                />
                <Input
                    type="url"
                    id="linkedinurl"
                    name="linkedinurl"
                    onChange={props.onChange}
                    icon="bi bi-linkedin"
                    placeholder="LinkedIn"
                />
                <Input
                    type="url"
                    id="githuburl"
                    name="githuburl"
                    onChange={props.onChange}
                    icon="bi bi-github"
                    placeholder="GitHub"
                />
            </div>
            <Input type="textarea" id="adicionalinfo" name="adicionalinfo" icon="bi bi-card-text" title="Informações adicionais" />
        </div>
    );
}