import loopz from '../styles/images/loopz.svg';

export default function Layouts({ children }) {
  return (
    <div className="flex h-screen bg-slate-900">
      <div className="m-auto bg-slate-50 rounded-lg w-3/5 h-3/4 grid lg:grid-cols-2">
        <div className="bg-gradient-to-br rounded-l-lg from-blue-500 to-slate-800">
          <h1 className="font-medium text-5xl pl-14 text-left text-white pt-10">
            Sign up with interloop scoreboard
          </h1>
          <img src={loopz} alt="interloop photo" height={300} width={300} />
        </div>
        <div className="right flex flex-col rounded-r-lg justify-evenly bg-white">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
