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
        src="https://app.powerbi.com/reportEmbed?reportId=1c4c8e08-b693-4910-aba9-53c3c9adc5fb&autoAuth=true&ctid=e285d438-dbba-4a4c-941c-593ba422deac&pageName=ReportSectiond9dde6325ca580906cc0"
        allowFullScreen="true"></iframe>
      </div>
  );
}
