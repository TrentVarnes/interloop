import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Profile() {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return <div>{session?.user?.name}</div>;
  }
  return <div>You are not logged in</div>;
}
