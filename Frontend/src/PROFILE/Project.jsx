import React from "react";
import { useLocation } from "react-router-dom";

const Project = () => {
  const location = useLocation();


  return (
    <main className="h-screen w-screen flex bg-slate-900 text-slate-200">
      
      {/* LEFT SIDEBAR */}
      <section className="left flex flex-col h-full min-w-[260px] bg-slate-400 border-r border-black-700">

        {/* HEADER */}
        <header className="flex justify-between items-center p-3 px-4 bg-slate-600 backdrop-blur border-b border-slate-600">
          <h2 className="text-sm font-semibold">
           
          </h2>

          <button className="p-2 rounded hover:bg-cyan-500/20 text-cyan-400 transition">
            <i className="ri-group-2-fill text-3xl"></i>
          </button>
        </header>

        {/* CONVERSATION */}
        <div className="conversation-area flex-grow flex flex-col p-3 gap-2 overflow-y-auto">

          {/* MESSAGE – USER */}
          <div className="self-start bg-slate-700 px-3 py-2 rounded-lg max-w-[75%] border border-cyan-400/30">
            <p className="text-sm">Hey! Ready to collaborate? 🚀</p>
          </div>

          {/* MESSAGE – AI / OTHER USER */}
          <div className="self-end bg-slate-700 px-3 py-2 rounded-lg max-w-[75%] border border-cyan-400/30">
            <p className="text-sm ">
              Yes! Let’s build SyncSoul AI 🤖
            </p>
          </div>
        </div>

        {/* SEND MESSAGE */}
        <div className="send-message-box w-full flex items-center bg-slate-600 border-t border-slate-600 px-2">
          <input
            className="flex-grow p-2 bg-transparent outline-none text-slate-200 placeholder-slate-400"
            type="text"
            placeholder="Type a message..."
          />

          <button className="p-2 px-4 text-cyan-400 hover:text-cyan-300 transition">
            <i className="ri-send-plane-fill text-lg"></i>
          </button>
        </div>
      </section>

      {/* RIGHT AREA (Future: Code Editor / AI Panel) */}
      <section className="flex-grow bg-slate-700 flex items-center justify-center">
        <p className="font-bold">Code editor / AI panel coming soon ⚡</p>
      </section>

    </main>
  );
};

export default Project;
