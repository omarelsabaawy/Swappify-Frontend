import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme} from '@nextui-org/react';
import Layout from './layout';
import { useRouter } from 'next/router';

interface CustomPageProps extends AppProps {
  pageProps: {
    session?: any;
  };
}

const darkTheme = createTheme({type: "dark"});

function MyApp({ Component, pageProps }: CustomPageProps) {
  const router = useRouter();
  
  const showNavBar = (router.pathname === "/Login" || router.pathname === "/SignUp") ? true : false;
  
  return (
    <NextUIProvider theme={darkTheme}>
        {showNavBar ? (
        <Component {...pageProps} />
      ) : (
          <Layout>
        <Component {...pageProps} />
      </Layout>
          )}
    </NextUIProvider>
  )
}

export default MyApp
