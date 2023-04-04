import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import backgrounf from '../styles/images/backgrounf.svg';
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
    <div class="relative w-full flex flex-col min-h-screen w-100 h-100 z-10">
    <Image src={backgrounf} alt="SVG Image" layout="fill" width={800} height={600} objectFit="cover" /> 
        <div class="w-full flex flex-col lg:flex-row flex-1 bg-slate-900 ">
        <div class="max-w-screen-lg mx-auto flex flex-col lg:py-20 lg:px-10 md:py-20 md:px-4 flex-1 ">
          <div class="text-center lg:text-left ">
            <h2 class="text-9xl md:text-8xl sm:text-8xl text-white py-10 text-left z-20">Interloop<br />Scoreboard</h2>
            <p class="text-3xl text-white text-left z-20">Stop Integrating, Start Interlooping</p>
            <p class="text-sm mt-28 md:py-16 lg:py-32 text-white text-left z-20">Helping our clients connect their data, systems, and people to optimize operations and confidently drive growth.</p>
          </div>
        </div>
        <div class="max-w-screen-lg mx-auto flex flex-col lg:py-20 md:py-20 px-4 flex-1">
          <div class="mx-auto flex flex-wrap justify-center">
            <div class="border-yellow-200 border-8 w-64 h-64 p-10 m-4 rounded-[30px] bg-slate-900 z-20"></div>
            <div class="border-white border-8 w-64 h-64 p-10 m-4 rounded-[30px] bg-slate-900 z-20"></div>
            <div class="border-white border-8 w-64 h-64 p-10 m-4 rounded-[30px] bg-slate-900 z-20"></div>
            <div class="border-white border-8 w-64 h-64 p-10 m-4 rounded-[30px] bg-slate-900 z-20"></div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row flex-1 bg-slate-900">
        <div class="mx-auto flex flex-wrap justify-center lg:flex-row lg:items-center">
          <div class="border-white border-8 w-64 h-96 py-96 px-10 m-4 rounded-[30px] bg-slate-900 z-20"></div>
          <div class="border-white border-8 w-64 h-96 py-96 px-10 m-4 rounded-[30px] bg-slate-900 z-20"></div>
          <div class="border-white border-8 w-64 h-96 py-96 px-10 m-4 rounded-[30px] bg-slate-900 z-20"></div>
          <div class="border-white border-8 w-64 h-96 py-96 px-10 m-4 rounded-[30px] bg-slate-900 z-20"></div>
          <div class="border-white border-8 w-64 h-96 py-96 px-10 m-4 rounded-[30px] bg-slate-900 z-20"></div>
        </div>
      </div>
    </div>

    
  );
}
