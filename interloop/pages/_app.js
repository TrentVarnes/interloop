import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { SessionProvider } from 'next-auth/react';
import 'styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// NavBar to be on every page
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className="logo">
      <SSRProvider>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
            
          </Layout>
        </SessionProvider>
      </SSRProvider>
    </div>
  );
}

export default MyApp;
