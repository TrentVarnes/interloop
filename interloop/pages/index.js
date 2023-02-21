import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return <div>{session?.user?.name} Home page</div>;
  }
  return <div>Not logged in Home page</div>;
}
