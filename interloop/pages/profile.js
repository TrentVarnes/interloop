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
      <div align="middle" className="bg-slate-800">
        <Head>
          <title>Dashboard</title>
        </Head>
      
        <iframe 
        title="InterloopAi" 
        className="h-screen w-screen p-9"
        src="https://app.powerbi.com/reportEmbed?reportId=6d843f54-75ad-4be3-b2a6-0f6647e9e8ad&autoAuth=true&ctid=e285d438-dbba-4a4c-941c-593ba422deac"
        allowFullScreen="true"></iframe>
      </div>
  );
}
