import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { SessionProvider } from 'next-auth/react';
import 'styles/global.css';

// NavBar to be on every page
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className="logo">
      <SSRProvider>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </SSRProvider>
    </div>
  );
}

export default MyApp;
