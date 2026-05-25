import React, { useState } from "react";
import { api } from "./Api";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
// import dayjs from ""

type MemberProp = {
  name: string;
  phoneNumber: string;
};
const AddMember = () => {
    // const joinedDate = dayjs
  const [addingSuccess, setAddingSuccess] = useState(false);
  const [memberData, setMemberData] = useState<MemberProp>({
    name: "",
    phoneNumber: "",
  });
  const takeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberData({ ...memberData, [e.target.name]: e.target.value });
  };
  const addMember = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const memberRes = await api.post("/user/createmember", memberData, {
        withCredentials: true,
      });
      console.log(memberRes.data);
      setAddingSuccess(true);
    } catch (err: any) {
      console.log("err", err.message, err.response.data.code);
    }
    setMemberData({ name: "", phoneNumber: "" });
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="shadow-lg py-8 px-8 space-y-8 w-full max-w-md">
        <div>
          <h1 className="font-bold text-blue-800 text-lg">Add Member</h1>
        </div>

        <form onSubmit={(e) => addMember(e)} className="space-y-8">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Gym Bro Name"
              name="name"
              value={memberData.name}
              onChange={(e) => takeData(e)}
              className={`w-full px-4 py-3 rounded-lg border-2  focus:border-blue-500 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 pr-12 ${10 > 11 ? "focus:border-red-500 border-red-500 " : "border-gray-200 focus:border-blue-500 "}`}
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-semibold text-gray-700"
            >
              Phone No.
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              value={memberData.phoneNumber}
              name="phoneNumber"
              onChange={(e) => takeData(e)}
              className={`w-full px-4 py-3 rounded-lg border-2  focus:border-blue-500 focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 pr-12 ${10 > 11 ? "focus:border-red-500 border-red-500 " : "border-gray-200 focus:border-blue-500 "}`}
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full  py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      {/* <div>
        <Phone />
        {memberData.name}
        {memberData.phoneNumber}
      </div> */}
      {addingSuccess && (
        <div className="absolute  w-full space-y-4 max-w-md px-8 py-8 h-80 rounded-lg bg-white shadow-lg">
          <div className="flex justify-end w-full">
            <FaX
              className="cursor-pointer"
              onClick={() => setAddingSuccess(false)}
            />
          </div>
          <div className=" flex items-center justify-center">
            <div className="space-y-6">
              {/* <h1>{memberData.name}</h1> */}
              <h1 className="font-sm text-2xl text-center">{memberData.name}</h1>
              <div className="flex flex-col items-center justify-center">
                <p className="">Add successfully</p>

                <div>
                  <FaRegCheckCircle color="green" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMember;
