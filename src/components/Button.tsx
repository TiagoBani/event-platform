import { DiscordLogo } from 'phosphor-react'

type ButtonParams = {
	link?: string
	variant?: 'primary' | 'secondary'
	children: React.ReactNode
}

const VARIANTS = {
	primary:
		'p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors',
	secondary:
		'p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors',
}

export function Button({ variant, link, children }: ButtonParams) {
	function handleVariant({ variant }: Pick<ButtonParams, 'variant'>) {
		return VARIANTS[variant ?? 'primary']
	}
	return (
		<a href={link ?? ''} className={handleVariant({ variant })}>
			{children}
		</a>
	)
}
