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
      <div className="mx-auto my-8 w-96">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>
        <p className="text-gray-400 mb-8">View and manage your profile information</p>
        <h2 className="text-2xl font-bold mb-2">Email</h2>
        <p className="text-gray-400">{session?.user?.email}</p>
      </div>
    </div>
  );
}
