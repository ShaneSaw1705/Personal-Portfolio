import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-row justify-around items-center w-screen h-screen bg-purple-800 p-5 text-white">
      {/* Left side group */}
      <div className="flex flex-col scale-150">
        <h1 className="font-bold text-xl">Shane Curtis,</h1>
        <p className="font-bold text-lg text-lime-300 mb-5">
          Full Stack Developer
        </p>
        <div className="grid grid-flow-col gap-1 font-bold shadow-md *:cursor-pointer">
          <button className="bg-lime-300 border-lime-300 border-2 px-1 text-slate-900 rounded-md text-sm hover:bg-transparent hover:text-slate-200 transition-all">
            Lets talk
          </button>
          <button className="border-slate-400 border-2 rounded-md text-slate-400 text-sm hover:border-slate-50 hover:text-slate-50 transition">
            My projects
          </button>
        </div>
      </div>
      <img
        src="/images/faceshot.jpg"
        alt=""
        className="max-w-md max-h-md rounded-full border-8 border-lime-300 shadow-lg"
      />
    </div>
  )
}

