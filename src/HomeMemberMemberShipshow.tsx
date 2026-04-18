// import React from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import axiosFetch from "./AxiosFetch";

// const HomeMemberMemberShipshow = () => {
//   const { name } = useParams();
//     const { data } = useQuery({
//     queryKey: ["memberwithplan"],
//     queryFn: ()=>axiosFetch("/user/memberwithplans"),
//   });
// const membershipInfo = data.mwp.filter((m)=>m.member.name=== name)

//   return ( 
//     <div className="w-full flex ml-80">
// {
//   membershipInfo.map((m,i)=>{

//   })
// }
   
      
//     </div>
//   );
// };

// export default HomeMemberMemberShipshow;

// import React from "react";
// import dayjs from "dayjs";

//   const membership = {
//     name: "Premium Gym Membership",
//     price: 2500,
//     description: "Access to all gym equipment, personal trainer, and group classes.",
//     facilities: ["24/7 Access", "Personal Trainer", "Swimming Pool", "Sauna"],
//     startDate: "2026-04-01",
//     endDate: "2026-05-01",
//   };

// const MembershipCard = () => {
//   // const { name, price, description, facilities, startDate, endDate } = membership;

//   // Calculate remaining days
//   // const remainingDays = dayjs(endDate).diff(dayjs(), "day");
// const facilities = ["lala", "kaka"]

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold text-gray-800">name</h2>
//         <span className="text-lg font-semibold text-green-600">₹price</span>
//       </div>

//       {/* Description */}
//       <p className="text-gray-600 mb-4">description</p>

//       {/* Facilities */}
//       <div className="mb-4">
//         <h3 className="text-sm font-semibold text-gray-700 mb-2">Facilities:</h3>
//         <ul className="list-disc list-inside text-gray-600 space-y-1">
//           {facilities.map((facility, index) => (
//             <li key={index}>facility</li>
//           ))}
//         </ul>
//       </div>

//       {/* Dates */}
//       <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
//         <div>
//           <span className="font-semibold">Start Date:</span>
//           <p>{dayjs("12/12/2025").format("DD MMM YYYY")}</p>
//         </div>
//         <div>
//           <span className="font-semibold">End Date:</span>
//           <p>{dayjs("01/01/2026").format("DD MMM YYYY")}</p>
//         </div>
//       </div>

//       {/* Remaining Days */}
//       <div className="bg-gray-100 rounded-md p-3 text-center">
//         <span className="text-gray-800 font-semibold">
//           {1 > 0
//             ? `${1} days remaining`
//             : "Membership expired"}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default MembershipCard;

import dayjs from "dayjs";

const MembershipFullScreen = () => {
  // const { name, price, description, facilities, startDate, endDate } = membership;

  const remainingDays = dayjs("12/04/2026").diff(dayjs(), "day");
const facilities = ["lala", "kaka"]


  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg border border-gray-200 p-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">name</h1>
          <span className="text-2xl font-semibold text-green-600">₹price</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">description</p>

        {/* Facilities */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Facilities:</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-6 text-lg text-gray-700 mb-6">
          <div>
            <span className="font-semibold">Start Date:</span>
            <p>{dayjs("12/03/2026").format("DD MMM YYYY")}</p>
          </div>
          <div>
            <span className="font-semibold">End Date:</span>
            <p>{dayjs("09/09/2026").format("DD MMM YYYY")}</p>
          </div>
        </div>

        {/* Remaining Days */}
        <div className="bg-gray-100 rounded-md p-5 text-center">
          <span className="text-xl text-gray-800 font-semibold">
            {remainingDays > 0
              ? `${remainingDays} days remaining`
              : "Membership expired"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MembershipFullScreen;
