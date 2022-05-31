import type { AppProps } from 'next/app'

import '../styles/globals.css'
import 'katex/dist/katex.css'

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
