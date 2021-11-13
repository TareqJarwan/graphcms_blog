

import 'tailwindcss/tailwind.css';
import { Layout } from '../components';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout children={<Component {...pageProps} />} />
  );

}

export default MyApp
