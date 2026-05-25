// import { useEffect, useState } from "react";

// import { IoSend } from "react-icons/io5";
// import Apploading from "./Apploading";
// import { io } from "socket.io-client";

// const sock = io("http://localhost:5000");

// const chat = () => {
//   const [message, setMesssage] = useState("");
//   const [chat, setChat] = useState([]);
//   useEffect(() => {
//     sock.on("recieve_message", (data) => {
//       // setChat((prev) => [...prev, data]);
//     });
//     return () => {
//       sock.off("recieve_message");
//     };
//   }, []);
//   const sendMessage = () => {
//     if (message.trim() !== "") {
//       sock.emit("send_message", message);
//       setMesssage("");
//     }
//   };
//   return (
//     <div className="">
//       <div>
//         {chat.map((m, ind) => (
//           <div key={ind}>{m}</div>
//         ))}
//       </div>
//       <div className="fixed flex  bg-red-500 w-1/0.7 border-4 border-green-600 bottom-20 px-8">
//         <input
//           type="text"
//           placeholder="send message..."
//           value={message}
//           onChange={(e) => setMesssage(e.target.value)}
//           className="focus:outline-none rounded-lg flex-[52]  border-2 border-gray-400 px-2"
//         />
//         <button
//           className="bg-purple-500 rounded-full  flex-[1] px-4 py-4"
//           onClick={sendMessage}
//         >
//           <IoSend color="black" />
//         </button>
//       </div>
//       <div className="bg-red-400">r</div>
   
//     </div>
//   );
// };

// export default chat;
