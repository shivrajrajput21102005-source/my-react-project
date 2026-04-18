import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { api } from "./Api";
import axiosFetch from "./AxiosFetch";
type CradiProp = {
  email: string;
  password: string;
  newPassword: string;
};
type User = {
  _id: string;
  email: string;
};
type fetchProp = {
  allUser: User[];
};
export default function userPasswordUpdate() {
  const deletebtn = (id: string) => {
    delet.mutate(id);
  };
  const deletel = async (id: string) => {
    try {
      const res = await api.delete(`/user/delete/${id}`, {
        withCredentials: true,
      });
      console.log(res.data.code);
    } catch (err) {
      throw new Error();
    }
  };
  const delet = useMutation({
    mutationFn: deletel,
  });
  const fetch = useQuery<fetchProp>({
    queryKey: ["user"],
    queryFn: () => axiosFetch("/user/alluser"),
  });
  const [form, setform] = useState({
    email: "",
    password: "",
    newPassword: "",
  });
  const formData = (e: React.ChangeEvent) => {
    e.preventDefault();
    mutate(form);
    setform({
      email: "",
      password: "",
      newPassword: "",
    });
  };
  const updatePass = async (cradi: CradiProp) => {
    console.log("cradi", cradi);
    try {
      const res = await api.post("/updatepass", cradi, {
        withCredentials: true,
      });
      console.log("updatepass", res.data);
    } catch (err) {
      console.log("updateError", err);
      throw new Error("something went wrong");
    }
  };
  const { mutate, isError, isSuccess } = useMutation({
    mutationFn: updatePass,
  });

  return (
    <div>
      <form onSubmit={formData}>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) =>
            setform({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) =>
            setform({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="new password"
          name="newPassword"
          onChange={(e) =>
            setform({ ...form, [e.target.name]: e.target.value })
          }
        />
        <button type="submit">next</button>
      </form>
      <div className="w-120 h-80 bg-green-700">
        {fetch.isLoading && <div>loading</div>}
        {fetch.isError && <div>{fetch.isError}er</div>}
        {fetch.data && (
          <div>
            {fetch.data.allUser.map((user) => (
              <div key={user._id} className="text-white flex gap-8">
                {user._id}
                {user.email}

                <button
                  onClick={() => deletebtn(user._id)}
                  className="bg-red-400 py-4 px-2 rounded-lg"
                >
                  {delet.isPending ? "deleteing...." : "delete user"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {isError && <div>{isError} errora</div>}
      {isSuccess && <div>Success updares</div>}
    </div>
  );
}
