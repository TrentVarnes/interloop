import loopz from '../styles/images/big.svg';

export default function Layouts({ children }) {
  return (
    <div className="flex h-screen bg-gradient-to-tr from-slate-900 to-slate-700 shadow-[0_25px_50px_-3px_rgba(0,0,0,0.4)] duration-300 hover:drop-shadow-lg ">
      <div className="mx-auto my-56 items-center bg-slate-50 rounded-lg w-3/5 grid lg:grid-cols-2">
        <div className=" h-full rounded-l-md bg-gradient-to-tr from-slate-700 to-slate-800">
          <h1 className="font-medium text-5xl pl-14 text-left text-white pt-10">
            Interloop Scoreboard <br/><br/><br/>
          </h1>
          <div className="fixed pt-9">
            <img src={loopz} alignheight={300} width={300}></img>
          </div>
        </div>
        <div className="right flex flex-col rounded-r-lg justify-evenly bg-white">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
