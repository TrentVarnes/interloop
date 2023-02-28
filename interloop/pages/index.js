import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
    } else if (status === 'unauthenticated') {
      void router.push('/login');
    }
  });
  return (
    <div className="flex h-screen bg-slate-900">
      <Head>
        <title>Home Page</title>
      </Head>

      <main className="m-auto">
        <h1 className="text-6xl font-bold text-white">Home</h1>
      </main>
    </div>
  );
}
