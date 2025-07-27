import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import { Layout } from '../components/layout/Layout';
import { AuthProvider } from '../lib/auth';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthProvider>
      <AnimatePresence mode="wait" initial={false}>
        <Layout showSidebar={router.pathname.startsWith('/dashboard')}>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </AnimatePresence>
    </AuthProvider>
  );
}
