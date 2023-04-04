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
      <iframe className="h-screen w-screen p-2.5"
        src="https://app.powerbi.com/reportEmbed?reportId=4a351ae0-4a2f-49b3-b3e9-c468be9d3e32&autoAuth=true&ctid=e285d438-dbba-4a4c-941c-593ba422deac"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}


