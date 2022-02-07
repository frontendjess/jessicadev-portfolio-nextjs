import GlobalStyle from '../styles/globals';
import Head from 'next/head';
import Sidebar from '../components/sidebar/Sidebar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
