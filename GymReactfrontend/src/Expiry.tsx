// import React, { useEffect, useState } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
import { useQuery } from "@tanstack/react-query";
import axiosFetch from "./AxiosFetch";
import "react-circular-progressbar/dist/styles.css";
type Member = {
  name:string
}
type ExpireMembersProp={
 price:number;
 member:Member

}
type ExpireMemberProp = {
  expireMembers : ExpireMembersProp[]
}
const Expiry = () => {
  // const [pe, setPe] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setPe((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(timer);
  //         return 100;
  //       }
  //       return prev + 10;
  //     });
  //   }, 500);
  //   return () => clearInterval(timer);
  // }, []);
  // console.log("pep,", pe);
  // clearTimeout(timer)
  const { data, isLoading, error } = useQuery<ExpireMemberProp>({
    queryKey: ["expireMember"],
    queryFn: () => axiosFetch("/user/expiremembers"),
  });
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-12 h-12 rounded-full border-4 border-t-gray-600 border-gray-200 animate-spin"></div>
      </div>
    );
  }
  console.log("expireserror" , data,error)
  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div>someting wrong</div>
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
     
        {data?.expireMembers.length == 0  ? <div>no expires members</div>:
       
      <div>
        {data?.expireMembers.map((m, i) => (
          <div key={i}>
            <li>{m.member.name}</li>
            <li>{m.price}</li>
          </div>
        ))}
      </div>}
      {/* <div className="w-40 h-30 ">
        <CircularProgressbar
          value={pe}
          text={`${pe} %`}
          styles={{
            path: {
              stroke: "#4caf50",
            },
            trail: {
              stroke: "#ede3e3",
            },
          }}
        />
      </div> */}
    </div>
  );
};

export default Expiry;
