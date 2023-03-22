import clsx from 'clsx'
import { Button } from '~/components'

export default function IndexPage() {
	return (
		<main
			className={clsx(
				'flex h-full w-full flex-col place-content-center content-center items-center justify-center justify-items-center p-2',
				'bg-gray-100',
				'font-mono subpixel-antialiased'
			)}
		>
			hello world
			<Button onClick={() => console.log('clicked')} />
		</main>
	)
}
