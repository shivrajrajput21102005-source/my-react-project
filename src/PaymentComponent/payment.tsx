import { useEffect, useState } from "react";
// import React from "react";
import UseFetch from "../UseFetch";
// import { Divide } from "lucide-react";
// import HorizontalStepper from "./HorizontalStepper";

import Memberpayment from "./memberpayment";

export type MemberProp = {
  name: string;
  phoneNumber: string;
  _id: string;
};

type MembersResponse = {
  member: MemberProp[];
};

function useDelayedValue(value: string, delay: number) {
  const [delayedValue, setDelayedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return delayedValue;
}

const PaymentForm = () => {
  const [inputValue, setInputValue] = useState("");
  const delayedInputValue = useDelayedValue(inputValue, 400);
  const [recentSearch, setRecentSearch] = useState(["rahul", "shekhar"]);
  const [selectedMember, setSelectedMember] = useState<MemberProp | null>(null);
  const { loading, data } = UseFetch<MembersResponse>(
    `/user/filtermember?q=${delayedInputValue}`,
  );
  const handleRecent = (item: string) => {
    setRecentSearch((prev) => {
      const update = [item, ...prev.filter((p) => p !== item)];
      return update.slice(0, 5);
    });
  };



  console.log("real", delayedInputValue);

  return (
    <>
      {!selectedMember && (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
          {/* Header */}
          <header className="w-full max-w-2xl mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Member Directory
            </h1>
            <p className="text-gray-500 mt-1">
              Search and manage your members easily
            </p>
          </header>

          {/* Search Section */}
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search member..."
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
              {inputValue && (
                <button
                  onClick={() => setInputValue("")}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Recent Searches */}
            <div className="mt-6">
              {!inputValue && recentSearch.length > 0 && (
                <>
                  <h2 className="text-lg font-semibold text-gray-700 mb-3">
                    Recent Searches
                  </h2>
                  <ul className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-gray-50">
                    {recentSearch.map((item, ind) => (
                      <li
                        key={ind}
                        onClick={() => {
                          setInputValue(item);
                          handleRecent(item);
                        }}
                        className="cursor-pointer px-4 py-2 hover:bg-blue-50 transition"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div>
              {inputValue &&

                (!loading ? (
                  <div>
                    {data?.member.map((mem) => (
                      <div onClick={() => setSelectedMember(mem)}>
                        {mem.name}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
                ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-10 text-sm text-gray-400">
            © 2026 Member Directory. All rights reserved.
          </footer>
        </div>
      )}
      ////////// ///maa mead//
      {/* {!selectedmember && (
        <div>
          <div className="w-full px-4 py-4">
            <input type="text" />
            <input
              type="text"
              placeholder="search member"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="rounded-lg w-full px-4 py-2 border-2 bprder-gray focus:outline-none focus:border-blue-700 "
            />
            <div className="py-2">
              {!inputValue && (
                <div>
                  <h1 className="font-sm text-xl">Recent search</h1>

                  <div className="px-4">
                    {recentsearch.map((item, ind) => (
                      <h1
                        className="cursor-pointer border-b-2"
                        key={ind}
                        onClick={() => {
                          setInputValue(item);
                          handlerecent(item);
                        }}
                      >
                        {item}
                      </h1>
                    ))}
                  </div>
                </div>
              )}

              {inputValue && loading && <div>loading.....</div>}
              {!loading && inputValue && (
                <div>
                  {data?.member.map((m) => (
                    <h1
                      className=""
                      onClick={() => setSelectedMember(m)}
                      key={m._id}
                    >
                      {m.name}
                    </h1>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )} */}
      {selectedMember && (
        <div>
          <Memberpayment selectMember={selectedMember} />
        </div>
      )}
    </>
  );
};

export default PaymentForm;
