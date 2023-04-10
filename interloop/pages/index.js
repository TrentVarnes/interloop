import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import backgrounf from '../styles/images/backgrounf.svg';
import glow from '../styles/images/glow.svg';
import Image from 'next/legacy/image';

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
    <div className=" flex flex-col min-h-screen w-full h-full z-10 bg-slate-900">
      <div className="relative w-96 h-96 mt-24 ml-16 p-96 z-10">
      <Image 
      src={backgrounf} 
      alt="SVG Image" 
      layout="fill" 
      objectFit="cover"
    />
      </div>
      <div className="w-full flex flex-col lg:flex-row flex-1 bg-slate-900 absolute">
        <div className="max-w-screen-lg mx-auto flex flex-col lg:py-5 lg:px-10 md:py-20 md:px-4 flex-1 z-20 pl-6 lg:pl-0 pr-6 lg:pr-0">
          <div className="text-center lg:text-left px-20">
            <h2 className="text-9xl md:text-8xl sm:text-8xl text-white py-10 text-left z-20">Interloop<br />Scoreboard</h2>
            <p className="text-3xl text-white text-left z-20">Stop Integrating, Start Interlooping</p>
            <p className="text-sm mt-28 md:py-16 lg:py-32 text-white text-left z-20">Helping our clients connect their data, systems, and people to optimize operations and confidently drive growth.</p>
          </div>
        </div>
        <div className="max-w-screen mx-auto flex flex-col z-20 lg:py-10 md:py-20 px-4 flex-1 pl-6 lg:pl-0 pr-6 lg:pr-0">
          
            <div className=" bg-slate-600 drop-shadow-2xl  w-64 h-64 m-4 rounded-[10px] z-20">
              <p className="m-3 text-white">Your Dashboard</p>
              <p className="m-3 text-white">Velocity: 0%</p>
            </div>
            <div className=" bg-slate-600 drop-shadow-2xl w-64 h-64 m-4 rounded-[10px] z-20">
              <p className="m-3 text-white">Team Dashboard</p>
              <p className="m-3 text-white">Velocity: 0%</p>
            </div>
            
          </div>
        </div>
      
    </div>

    
  );
}
