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
    <div className="">
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          {session?.user?.name} Home Page
        </h1>
      </main>
    </div>
  );
}
