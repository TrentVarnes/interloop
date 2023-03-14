import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import loopz from '../styles/images/loopz.svg';

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
    <div className="flex flex-col h-screen w-full">
      <div className="flex flex-row h-screen w-full bg-slate-900">
        <div className="max-w-screen-lg mx-auto flex 
        flex-col py-40 px-10">
          <div>
            <h2 className="text-9xl text-white py-10 ">Interloop<br></br> Scoreboard</h2>
            <p className="text-l mt:20  text-white">Stop Integrating, Start Interlooping </p>
            <p className="text-smnpm ru py-52 text-white">Helping our clients connect their data, systems, and people to optimize operations and confidently drive growth.</p>
          </div>
          
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-col py-40 px-4">
          <div className='mx-auto flex flex-row'>
            <div className="border-yellow-200 border-8 w-64 h-64 p-10 m-10 rounded-[30px]"></div>
              <div className="bg-white w-14 h-14 rounded-full absolute m-16"></div>
              <p className="text-sm text-white m-16 my-32 absolute"> username </p>
            <div className="border-white border-8 w-64 h-64 p-10 m-10 rounded-[30px]"></div>   
            </div>
          <div className='mx-auto flex flex-row '>
            <div className="border-white border-8 w-64 h-64 py-10 px-10 m-10 rounded-[30px]"></div>
            <div className="border-white border-8 w-64 h-64 py-10 px-10 m-10 rounded-[30px]"></div>   
          </div>
        </div>
      </div>
      <div className="flex flex-row h-screen w-full bg-slate-900">
        <div className='mx-auto flex flex-row bg-slate-900'>
              <div className="border-white border-8 w-64 h-64 py-96 px-10 m-10 rounded-[30px]"></div>
              <div className="border-white border-8 w-64 h-64 py-96 px-10 m-10 rounded-[30px]"></div>  
              <div className="border-white border-8 w-64 h-64 py-96 px-10 m-10 rounded-[30px]"></div>
              <div className="border-white border-8 w-64 h-64 py-96 px-10 m-10 rounded-[30px]"></div>  
              <div className="border-white border-8 w-64 h-64 py-96 px-10 m-10 rounded-[30px]"></div>
        </div>
      </div>
    </div>
  
    
  );
}
