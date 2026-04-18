import { useState } from "react";
import { useAuth } from "./AuthProvider";

const SignUpForm = () => {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    reEnterPassword: "",
  });
  // const [error, setError] = useState<string | null>(null);
  const getFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const CreateAccount = async (e: React.ChangeEvent) => {
    e.preventDefault();
    if (formData.password !== formData.reEnterPassword) {
      return console.log("lala");
    }
    const result = await signup(formData);
    if (result) {
      console.log(result.message);
    } 
  };

  return (
    <>
      <div className="w-full  flex justify-center">
        <div className="py-2 px-4 bg-white ml-4 shadow-2xl  w-screen max-w-md rounded-lg h-screen">
          <h1 className="text-2xl pt-8 font-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create New Account
          </h1>

          <form onSubmit={CreateAccount} className="space-y-4 pt-6">
            <div className="space-y-2">
              <label className="text-left text-sm font-semibold px-2 pt-4 text-gray-700 block">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={getFormData}
                className="w-full px-4 py-3 rounded-lg border-2   focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-left text-sm font-semibold pt-4  px-2 text-gray-700 block">
                Create Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={getFormData}
                className="w-full px-4 py-3 rounded-lg border-2   focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
              />
              <label className="text-left text-sm font-semibold px-2 pt-4  text-gray-700 block">
                Confirm Password
              </label>
            </div>
            <div className="space-y-2">
              <input
                name="reEnterPassword"
                type="password"
                placeholder="ReEnter password"
                value={formData.reEnterPassword}
                onChange={getFormData}
                className="w-full px-4 py-3 rounded-lg border-2   focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 mt-10  py-2 px-4 text-white  rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 rounded-lg"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUpForm;
