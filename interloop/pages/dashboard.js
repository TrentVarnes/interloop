import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
    } else if (status === 'unauthenticated') {
      void router.push('/login');
    }
  });
  return (
    <div align="middle" className="bg-slate-900">
      <Head>
        <title>Dashboard</title>
      </Head>
      <iframe className="h-screen w-screen p-10"
        src="https://app.powerbi.com/reportEmbed?reportId=788eb99d-85c8-4723-a774-6157c2917ba0&autoAuth=true&ctid=e285d438-dbba-4a4c-941c-593ba422deac"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
