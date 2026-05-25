// import React from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { Menu, X } from "lucide-react";

const Apploading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <h1 className="text-white text-2xl font-bold animate-pulse">Duopo</h1>
      <X/>
      <Menu/>
      {/* <h1>jjj</h1>
      <Skeleton circle width={30} height={40} />
      <Skeleton height={200} />
      <Skeleton width="60%" height={40} /> */}
    </div>
  );
};

export default Apploading;
