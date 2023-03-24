import clsx from 'clsx'
export function Button(
	properties: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) {
	return (
		<button
			{...properties}
			className={clsx(
				'flex w-72 place-content-center rounded-md border-2 p-2',
				' border-gray-200 bg-teal-800 drop-shadow-xl hover:border-red-100 hover:underline hover:decoration-sky-600'
			)}
		>
			<span className='font-semibold text-white antialiased'>{properties.value}</span>
		</button>
	)
}
