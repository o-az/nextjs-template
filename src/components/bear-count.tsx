import clsx from 'clsx'
import { numberToBearEmoji } from '~/utilities'

export function BearCount({ bearCount }: { bearCount: number }) {
	const emoji = bearCount === 0 ? '💀' : numberToBearEmoji(bearCount)
	const shake = bearCount === 0

	return (
		<p
			className={clsx(
				'mb-8 text-center text-2xl font-bold leading-relaxed sm:mb-6 sm:w-6/12',
				shake &&
					'animate-[wiggle_0.3s_ease-in-out_infinite] text-4xl underline decoration-rose-500 decoration-wavy underline-offset-8'
			)}
		>
			There are {bearCount} bears in the store {!shake && <br />}
			<span className='text-3xl'>{emoji}</span>
		</p>
	)
}
