import 'tailwindcss/tailwind.css'
import '~/styles/index.css'
import type { AppProps } from 'next/app'
import { useIsMounted } from '~/hooks'

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()
  if (!isMounted) return <></>
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
