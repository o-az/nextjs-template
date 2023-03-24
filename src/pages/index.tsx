import clsx from 'clsx'
import * as React from 'react'
import Head from 'next/head'
import { useBearStore } from '~/store'
import { Button, BearCount } from '~/components'

const replaceFavicon = (bearCount: number) => {
	const linkTag = document.head.querySelector('link[rel="icon"]')
	let href = linkTag?.getAttribute('href')
	href = bearCount > 0 ? href?.replace('💀', '🐻') : href?.replace('🐻', '💀')
	linkTag?.setAttribute('href', href ?? '')
}

export default function IndexPage() {
	const bearsState = useBearStore(state => state)

	const replaceFaviconMemoized = React.useCallback(() => {
		replaceFavicon(bearsState.bears)
	}, [bearsState.bears])

	React.useEffect(() => {
		replaceFaviconMemoized()
	}, [replaceFaviconMemoized])

	return (
		<>
			<Head>
				<title>🫠</title>
			</Head>
			<main
				className={clsx(
					'flex h-full w-full flex-col place-content-center content-center items-center justify-center justify-items-center p-2',
					'font-mono subpixel-antialiased'
				)}
			>
				<BearCount bearCount={bearsState.bears} />
				<Button
					onClick={() => {
						bearsState.increaseBears()
						replaceFavicon(bearsState.bears)
					}}
					value={'Increase Bears'}
				/>
				<Button
					onClick={() => {
						bearsState.decreaseBears()
						replaceFavicon(bearsState.bears)
					}}
					value={'Decrease Bears'}
					disabled={bearsState.bears === 0}
				/>
				<Button
					onClick={() => {
						bearsState.annahilateBears()
						replaceFavicon(bearsState.bears)
					}}
					value={'Annahilate Bears'}
					disabled={bearsState.bears === 0}
				/>
			</main>
		</>
	)
}
