// import React, { useEffect, useState } from "react";
import { api } from "./Api";

async function axiosFetch(url: string) {
  console.log("het axios");
  //   useEffect(() => {
//   try {
    const {data}=await api.get(url, { withCredentials: true });
    //   if (data) {
    // console.log("axios data aa", responce.data, typeof responce.data);
    return data;
//   } catch (e) {
//     console.log("error axios", e);
//   }
  //   }
  // });
}

export default axiosFetch;
