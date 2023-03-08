import '@/styles/globals.css';
import Layout from '@/Comps/Layout.jsx';
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
