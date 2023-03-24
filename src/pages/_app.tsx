import 'tailwindcss/tailwind.css'
import '~/styles/index.css'
import * as React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useIsMounted } from '~/hooks'

export default function App({ Component, pageProps }: AppProps) {
	const isMounted = useIsMounted()
	if (!isMounted) return <></>
	return (
		<>
			<Head>
				<title>{pageProps.title || 'Bear Necessities'}</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
