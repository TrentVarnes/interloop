import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import swooshy from '../styles/images/big.svg';
import curveTop from '../styles/images/big.svg';
import curveBottom from '../styles/images/curveBottom.svg';
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
    
    <div className="flex overflow-hidden flex-col w-full h-screen z-10 ">
  <div className="relative w-full h-full z-10">
    <Image 
      src={swooshy} 
      alt="SVG Image" 
      width={756}
      height={1140}
      objectFit="contain"
      class="opacity-300"
    />
  </div>

      <div className="w-full flex flex-col lg:flex-row flex-1  bg-gradient-to-tr from-slate-900 to-slate-700 absolute">
        <div className="mx-auto flex flex-col flex-1 z-20 lg:px-24 lg:py-16 md:px-16">
          
        <div className="max-w-screen  mx-auto flex flex-col flex-1 z-20 items-left">
          <h2 className="lg:text-8xl md:text-8xl sm:text-8xl text-white py-10 text-left z-20">Interloop<br/>Scoreboard</h2>
          <p className="lg:text-3xl md:text-3xl sm:text-3xl text-white py-0 text-left z-20">Stop Integrating,<br/> Start Interlooping</p>
          <p className="text-sm mt-28 md:py-24 lg:py-24 text-white text-left z-20">Helping our clients connect their data, systems, and people to optimize operations <br/> and confidently drive growth.</p>
        </div>
        </div>
        <div className="max-w-screen  mx-auto flex flex-col lg:px-10 md:py-20 md:px-4 flex-1 z-20 pl-6 lg:pl-0 pr-6 lg:pr-0 items-center">
          <div className=" bg-gradient-to-tr from-slate-800 to-slate-600 drop-shadow-2xl duration-300 hover:drop-shadow-lg w-64 h-64 m-4 rounded-[10px] z-20">
            <p className="m-3 text-white">Your Dashboard</p>
            <p className="m-3 text-white">Velocity: 0%</p>
          </div>
          <div className="bg-gradient-to-tr from-slate-800 to-slate-600 drop-shadow-2xl duration-300 hover:drop-shadow-lg w-64 h-64 m-4 rounded-[10px] z-20">
            <p className="m-3 text-white">Team Dashboard</p>
            <p className="m-3 text-white">Velocity: 0%</p>
          </div>
        </div>
        </div>
      
    </div>

    
  );
}
