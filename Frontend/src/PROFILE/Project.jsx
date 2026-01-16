import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Project = () => {
  const location = useLocation();

  const [isSidePannel, setIsSidePannel] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState([]);

  const users = [
    { _id: "1", email: "user1@gmail.com" },
    { _id: "2", email: "user2@gmail.com" },
    { _id: "3", email: "user3@gmail.com" },
    {_id: "4", email: "user4@gmail.com"},
    {_id: "5", email: "user5@gmail.com"},
    {_id: "6", email: "user6@gmail.com"},
    {_id: "7", email: "user7@gmail.com"},
    {_id: "8", email: "user8@gmail.com"},
    {_id: "9", email: "user9@gmail.com"},
    {_id: "10", email: "user10@gmail.com"}
  ];

  const handleUserClick = (id) => {
   if (selectedUserId.includes(id)) {
    setSelectedUserId(selectedUserId.filter(uid => uid !== id)); 
  } else {
    setSelectedUserId([...selectedUserId, id]); 
  }
  };

  const addCollaborators = () => {
    console.log("Added collaborator:", selectedUserId);
    setIsModalOpen(false);
  };

  return (
    <main className="h-screen w-screen flex bg-slate-900 text-slate-200">

      {/* LEFT SIDEBAR */}
      <section className="flex flex-col h-full min-w-96 bg-slate-400 border-r relative">

        {/* HEADER */}
        <header className="flex justify-between items-center p-3 px-4 bg-slate-600 border-b">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex gap-2 items-center text-sm"
          >
            <i className="ri-user-add-fill text-lg"></i>
            Add Collaborator
          </button>

          <button
            onClick={() => setIsSidePannel(true)}
            className="p-2 rounded hover:bg-cyan-500/20 text-cyan-400"
          >
            <i className="ri-group-2-fill text-2xl"></i>
          </button>
        </header>

        {/* CHAT */}
        <div className="flex-grow flex flex-col p-3 gap-2 overflow-y-auto">

          <div className="self-start bg-slate-700 px-3 py-2 rounded-lg border max-w-56 break-words whitespace-pre-wrap">
            <small className="opacity-65 text-xs">example@gmail.com</small>
            <p className="text-sm">Hey! Ready to collaborate? 🚀</p>
          </div>

          <div className="self-end bg-slate-700 px-3 py-2 rounded-lg border max-w-56 break-words whitespace-pre-wrap">
            <small className="opacity-65 text-xs">example@gmail.com</small>
            <p className="text-sm">Yes! Let’s build SyncSoul AI 🤖</p>
          </div>

        </div>

        {/* INPUT */}
        <div className="flex items-center bg-slate-600 border-t px-2">
          <input
            className="flex-grow p-2 bg-transparent outline-none"
            placeholder="Type a message..."
          />
          <button className="p-2 text-cyan-400">
            <i className="ri-send-plane-fill"></i>
          </button>
        </div>

        {/* SIDE PANEL */}
        <div
  className={`absolute inset-0 bg-slate-300 transition-transform duration-300 ease-in-out ${
    isSidePannel ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* HEADER */}
  <header className="flex justify-between items-center p-3 bg-slate-200 border-b">
    <h2 className="text-lg font-semibold text-black">Collaborators</h2>

    <button
      onClick={() => setIsSidePannel(false)}
      className="p-2 rounded hover:bg-slate-300 transition"
    >
      <i className="ri-close-fill text-2xl text-black"></i>
    </button>
  </header>

  {/* USERS LIST (optional placeholder) */}
  <div className="p-4 flex flex-col gap-2">
  {users.map((user) => (
    <div
      key={user._id}
      className="flex items-center gap-3 p-2 rounded hover:bg-slate-200 cursor-pointer"
    >
      <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center text-black">
        <i className="ri-user-fill"></i>
      </div>

      <span className="text-black text-sm font-medium">
        {user.email}
      </span>
    </div>
  ))}
</div>

</div>

      </section>

      {/* RIGHT PANEL */}
      <section className="flex-grow bg-slate-700 flex items-center justify-center">
        <p className="font-bold">Code editor / AI panel coming soon ⚡</p>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md w-96 relative">

            <header className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold text-black">Select User</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <i className="ri-close-fill text-xl text-black"></i>
              </button>
            </header>

            <div className="flex flex-col gap-2 max-h-64 overflow-auto">
              {users.map((user) => (
                <div
                  key={user._id}
                  onClick={() => handleUserClick(user._id)}
                  className={`cursor-pointer p-2 rounded flex gap-2 items-center ${
                    selectedUserId.includes(user._id)
                      ? "bg-slate-200"
                      : "hover:bg-slate-300"
                  }`}
                >
                  <div className="p-4 rounded-full bg-slate-600 text-black">
                    <i className="ri-user-fill"></i>
                  </div>
                  <span className="font-medium text-black">{user.email}</span>
                </div>
              ))}
            </div>

            <button
              onClick={addCollaborators}
              disabled={!selectedUserId}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
            >
              Add Collaborator
            </button>

          </div>
        </div>
      )}
    </main>
  );
};

export default Project;
