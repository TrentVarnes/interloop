import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Profile() {
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
        <title>Profile</title>
      </Head>
      <h1 className="m-auto text-6xl text-white">{session?.user?.email}</h1>
    </div>
  );
}
