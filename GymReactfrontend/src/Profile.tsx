import { useState } from "react";
import UseFetch from "./UseFetch";
import { NavLink} from "react-router-dom";
import { FaCamera, FaUser } from "react-icons/fa";
import UserPasswordUpdate from "./userPasswordUpdate";
type PostProp = {
  title: string;
  image: string;
  content: string;
  user: string;
};
type FetchingProp = {
  post: PostProp[];
};
const Profile = () => {
  const { loading, data, error } = UseFetch<FetchingProp>("/user/posts");
  const [im, setIm] = useState<string | null>(null);
  // const [posts, setPost] = useState<PostProp[]>([]);

  if (loading) {
    return <div>loading posts</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const handleProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const selectedimage = e.target.files[0];
    const imageurl = URL.createObjectURL(selectedimage);
    setIm(imageurl);
  };
  //   console.log("profile", data , posts)
  // setPost(p)
  return (
    <div className="bg-yellow-100">
      <div className="">
        <div className="flex items-center m-4 gap-4">
          <div className="relative">
            <div className="flex   justify-center overflow-hidden text-gray-400 bg-black rounded-full w-20 h-20 overflow-hidden">
              {/* <FaUser size={90}/> */}
              {im ? (
                <img src={im} alt="" />
              ) : (
                <FaUser size={90} color="white" className="pt-2" />
              )}
            </div>
            <label
              htmlFor="profileinput"
              className=" cursor-pointer bg-green-400 "
            >
              <div className="absolute right-1 bottom-2 text-white">
                <input
                  type="file"
                  id="profileinput"
                  accept="image/*"
                  onChange={handleProfileImage}
                  className="hidden"
                />

                <FaCamera color="white" />
              </div>
            </label>
          </div>
          <div>
            <h2>Name</h2>
            <p>Nickname</p>
            <p>lolalllalal</p>
          </div>
        </div>
        {/* <div className="px-4 py-2">
          <h1>Recents Posts</h1>
          <div className="flex space-x-4">
            <div className="w-80 h-80 bg-green-400">DIV 1</div>
            <div className="w-80 h-80 bg-blue-400">DIV 1</div>

            <div className="w-80 h-80 bg-red-400">DIV 1</div>

            <div className="w-80 h-80 bg-green-400">DIV 1</div>
            <div className="w-80 h-80 bg-red-400">DIV 1</div>
          </div>
        </div> */}
        <div className="px-8 mt-12">
          <h1 className="font-sm text-2xl">All posts</h1>
          <div className="flex">
            {data?.post.map((post, ind) => (
              <div key={ind} className="bg-blue-300 m-4 shadow-lg">
                <h1>{post.title}</h1>
                <div className="object-cover">
                  <img
                    src={`http://localhost:5000/uploads/${post.image}`}
                    alt=""
                  />
                </div>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-red-400 rounded-lg py-2 px-2">
        <NavLink to="/profile/logout" className="bg-red-400 rounded-lg py-2 px-2">Logout</NavLink>
      </div>
      <UserPasswordUpdate/>
    </div>
  );
};
export default Profile;
