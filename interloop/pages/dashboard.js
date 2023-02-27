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
    <div align="center">
      <Head>
        <title>Dashboard</title>
      </Head>
      <iframe
        width="1400"
        height="950"
        src="https://app.powerbi.com/view?r=eyJrIjoiMDI5MGU0NWUtZjhlMy00Y2IyLThmNmEtNGE3YWIwY2UwNTc0IiwidCI6IjAxNzgzNzkyLTZkZTEtNDI2Ny1iZDJmLTQxMDk3NzlhZTQwYSIsImMiOjF9"
      ></iframe>
    </div>
  );
}
