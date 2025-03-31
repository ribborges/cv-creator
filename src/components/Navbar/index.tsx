import { ReactNode, useState } from 'react';
import { X, ThreeDots } from 'react-bootstrap-icons';

import Logo from './Logo';

export function NavBar(props: { children: ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<>
			<nav className="
				top-0 left-0 right-0
				flex items-center content-center justify-between
				fixed
				backdrop-blur-md bg-zinc-100/50 dark:bg-zinc-950/50
				z-50 p-5 m-2
				border border-b-2 border-solid border-zinc-400/40 dark:border-zinc-800/40 rounded-2xl
				shadow-xl
				select-none
			">
				<div className="flex items-center content-center gap-5">
					<div className="
						flex items-center content-center
						text-zinc-950 dark:text-zinc-200 hover:text-purple-700
						w-16 h-16
						transition duration-500
					">
						<Logo />
					</div>
				</div>
				<div className="flex items-center content-center gap-5">
					<div className="flex lg:hidden">
						<NavButton onClick={toggleMenu} icon={
							isMenuOpen ? <X /> : <ThreeDots />
						} />
					</div>
					<div className="hidden lg:flex items-center content-center gap-5">
						{props.children}
					</div>
				</div>
			</nav>
			{isMenuOpen && (
				<div className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 backdrop-blur-xs">
					<div className="flex flex-col items-center justify-center h-full space-y-8">
						{props.children}
					</div>
				</div>
			)}
		</>
	);
}

export function NavItemContainer(props: { children: ReactNode }) {
	return (
		<div className="flex items-center content-center gap-5">
			{props.children}
		</div>
	);
}

export function NavItem(props: { label?: string, icon: any, href?: string }) {
	return (
		<a className="
			flex items-center content-center gap-2
			text-xl
			p-2
			hover:bg-zinc-400 dark:hover:bg-zinc-800
			text-zinc-900 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-200 hover:no-underline
			border border-solid border-transparent rounded-2xl hover:border-zinc-500 dark:hover:border-zinc-700
			transition duration-500
			cursor-pointer
		"
			href={props.href}>
			{props.icon}
			{
				props.label ?
					<i className="text-zinc-900 dark:text-zinc-200 not-italic text-lg">{props.label}</i>
					:
					<></>
			}
		</a>
	);
}

export function NavButton(props: { label?: string, icon: any, onClick?: () => void }) {
	return (
		<button className="
			flex items-center content-center gap-2
			text-xl
			p-2
			hover:bg-zinc-400 dark:hover:bg-zinc-800
			text-zinc-900 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-200 hover:no-underline
			border border-solid border-transparent rounded-2xl hover:border-zinc-500 dark:hover:border-zinc-700
			transition duration-500
			cursor-pointer
		"
			onClick={props.onClick}>
			{props.icon}
			{
				props.label ?
					<i className="text-zinc-900 dark:text-zinc-200 not-italic text-lg">{props.label}</i>
					:
					<></>
			}
		</button>
	);
}