import 'bootstrap/dist/css/bootstrap.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import swooshy from '../styles/images/cleanSwoosh.svg';
import curveTop from '../styles/images/big.svg';
import curveBottom from '../styles/images/curveBottom.svg';
import Image from 'next/legacy/image';
import Nav from 'react-bootstrap/Nav';


export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    document.documentElement.style.height = `${height}px`;
    document.body.style.height = `${height}px`;
    if (status === 'authenticated') {
    } else if (status === 'unauthenticated') {
      void router.push('/login');
    }
  },[height, router, status]);

  return (
    <div className="h-screen ">
      <div ref={el => el && setHeight(el.offsetHeight)}>
      <div className="flex overflow-hidden flex-col w-full h-screen z-10">
          <div className=" relative bottom-0 left-0 w-full h-screen z-10">
    <Image 
      src={swooshy} 
      alt="SVG Image" 
      width={756}
      height={1140}
      objectFit="contain"
      class="opacity-300"
    />
  </div>
<div className="w-screen h-sreen"></div>
  <div className="w-screen h-screen flex flex-col lg:flex-row bg-gradient-to-tr from-slate-900 to-slate-700 absolute">        <div className="mx-auto flex flex-col flex-1 z-20 lg:px-28 lg:py-16 ">
          
        <div className="max-w-screen  mx-auto flex flex-col flex-1 z-20 items-left">
          <h2 className="lg:text-8xl md:text-8xl sm:text-8xl text-white py-10 text-left z-20">Interloop<br/>Scoreboard</h2>
          <p className="lg:text-3xl md:text-3xl sm:text-3xl text-white py-0 text-left z-20">Stop Integrating, <br></br> Start Interlooping</p>
          <p className="text-sm mt-28 md:py-18 lg:py-24 text-white text-left z-20">Helping our clients connect their data, systems, and people to optimize operations and confidently drive growth.</p>
        </div>
        </div>
        <div className="max-w-screen  md:flex-row mx-auto flex lg:flex-col lg:px-10 md:py-20 md:px-4 flex-1 z-20 pl-6 lg:pl-0 pr-6 lg:pr-0 items-center">
          <Nav.Link
          href="/profile"
          >
          <div className=" bg-slate-700 shadow-[0_25px_50px_-3px_rgba(0,0,0,0.4)] duration-500 hover:shadow-lg w-64 h-64 m-4 rounded-[10px] z-20">
            <div className="p-1">
          <p className="m-3 hover:text-blue-400 text-slate-100 duration-300">Personal Dashboard</p>
          </div>
            
            <iframe 
            title="widget1 - Page 2" 
            className="h-44 w-64 overflow-y:hidden "
            src="https://app.powerbi.com/reportEmbed?reportId=4a351ae0-4a2f-49b3-b3e9-c468be9d3e32&autoAuth=true&ctid=e285d438-dbba-4a4c-941c-593ba422deac&filterPaneEnabled=false&navContentPaneEnabled=false&pageName=ReportSection253a530ed91ea95ab713" 
            frameborder="0" 
            scrolling="no" 
            allowFullScreen="true">
            
            </iframe>
            
      
          </div>
          </Nav.Link>
          <Nav.Link
          href="/dashboard"
          >
          <div className="bg-slate-700 shadow-[0_25px_50px_-3px_rgba(0,0,0,0.4)] duration-500 hover:shadow-lg w-64 h-64 m-4 rounded-[10px] z-20">
            <div className=" p-1">
                <p className="m-3 hover:text-blue-400 text-slate-100 duration-300">Team Dashboard</p>
            </div>
            <iframe className="h-44 w-64 overflow-y:hidden"
        src="https://app.powerbi.com/reportEmbed?reportId=4a351ae0-4a2f-49b3-b3e9-c468be9d3e32&autoAuth=true&ctid=e285d438-dbba-4a4c-941c-593ba422deac&filterPaneEnabled=false&navContentPaneEnabled=false&pageName=ReportSection2216b01860020dc72641"
        allowFullScreen={true}
        frameborder="0" 
      ></iframe>
          </div>
          </Nav.Link>
        </div>
  
        </div>
      
    </div>

    </div>
    </div>
  );
}
