import { ReactNode, useState } from 'react';
import { X, List } from 'react-bootstrap-icons';
import clsx from 'clsx';
import { Trans, useTranslation } from 'react-i18next';

import { MenuButton } from '@/components/Input';
import Dropdown from '@/components/Dropdown';

import Logo from './Logo';

interface ItemContainerProps {
	className?: string;
	children?: ReactNode;
}

function NavBar(props: { children: ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const { i18n } = useTranslation();

	return (
		<>
			<nav className="
				top-0 left-0 right-0 bottom-0
				flex items-center content-center justify-between self-start
				fixed
				backdrop-blur-md bg-zinc-100/50 dark:bg-zinc-950/50
				z-50 p-4 m-2
				border border-b-2 border-solid rounded-4xl
                border-zinc-400/40 dark:border-zinc-800/40
				shadow-xl
				select-none
			">
				<NavItemContainer className="justify-start lg:hidden">
					<MenuButton onClick={toggleMenu} icon={
						isMenuOpen ? <X /> : <List />
					} />
				</NavItemContainer>
				<NavItemContainer className="justify-start hidden lg:flex">
					{props.children}
				</NavItemContainer>
				<div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
					<div className="
						p-2
						text-zinc-950 dark:text-zinc-200 hover:text-purple-600
						transition duration-500
					">
						<Logo />
					</div>
				</div>
				<NavItemContainer className="justify-end">
					<Dropdown align={'right'} items={[
						{
							type: 'button',
							icon: <img src='https://img.icons8.com/color/32/brazil-circular.png' />,
							label: 'Português',
							onClick: () => i18n.changeLanguage('pt-BR'),
						}, {
							type: 'button',
							icon: <img src='https://img.icons8.com/color/32/great-britain-circular.png' />,
							label: 'English',
							onClick: () => i18n.changeLanguage('en-US'),
						}
					]}>
						{
							i18n.language === 'pt-BR' ? (
								<img src='https://img.icons8.com/color/32/brazil-circular.png' />
							) : (
								<img src='https://img.icons8.com/color/32/great-britain-circular.png' />
							)
						}
					</Dropdown>
				</NavItemContainer>
			</nav>
			<div className={clsx(
				`
				lg:hidden fixed w-8/12 inset-0 z-40
				bg-white/80 dark:bg-black/80 backdrop-blur-sm
				border-r border-zinc-400/40 dark:border-zinc-800/40
				pt-32 p-4
				transition-transform duration-300
				`, isMenuOpen ? 'translate-x-0' : '-translate-x-full'
			)}>
				<div className="flex flex-col items-stretch h-full gap-2">
					{props.children}
				</div>
			</div>
		</>
	);
}

function NavItemContainer(props: ItemContainerProps) {
	return (
		<div className={clsx("flex-1 flex items-center content-center gap-1", props.className)}>
			{props.children}
		</div>
	);
}

export { NavBar, NavItemContainer };
