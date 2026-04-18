import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { api } from "./Api";

const Createposts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>();

  // const handleFileChange  = (e:React.ChangeEvent<HTMLInputElement>)=>{
  //     if(e.target.files){
  //         const inputfile = e.target.files[0]
  //         setFile(inputfile)

  //     }

  // }
  const handleSubmit = async (e: React.ChangeEvent) => {
    e.preventDefault();
    console.log("handle run");
    if (!file) return;
    console.log("handle run 22");

    const b = new FormData();
    b.append("title", title);
    b.append("content", content);
    b.append("image", file);
    try {
      const r = await api.post("/user/posts", b);
      console.log("r frompost", r.data);
      console.log("post create");
    } catch (err: any) {
      console.log("create post error", err.message, err);
    }
  };

  return (
    <div className="px-4 ">
      <div className="m-6 ">
        <NavLink to="/logout">
          <div className="flex items-center gap-2">
            <FaArrowLeft /> <h1>back</h1>
          </div>
        </NavLink>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="bg-blue-400 ">
            <input
              type="file"
              placeholder="choose ofile"
              onChange={(e) => {
                const inputfile = e.target.files?.[0];
                setFile(inputfile);
              }}
              className="text-lg font-sm"
            />
          </div>
          <div className="">
            <label className="block">Add Title</label>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="focus:outline-none"
            />
          </div>
          <div>
            <label className="block ">Add content</label>
            <input
              type="text"
              value={content}
              placeholder="Content bio"
              onChange={(e) => setContent(e.target.value)}
              className="focus:outline-none "
            />
          </div>
          <button type="submit" className="bg-blue-400 py-4 px-2 rounded-lg">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createposts;
