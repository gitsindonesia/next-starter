import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { SidebarCtxProvider } from '../components/Sidebar/context'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SidebarCtxProvider>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</SidebarCtxProvider>
	)
}

export default MyApp
