import { api } from "./Api";
import { useState } from "react";

const OtpLogin = () => {
  const [mobileNo, setMobileNO] = useState("");
  const [otp, setOtp] = useState("");
  const [issend, setIsSend] = useState(false);
  const sendOtp = async () => {
    if (mobileNo === "") {
      return;
    }
    console.log(mobileNo);
    try {
      const d = await api.post("/send-otp", { mobileNo });
      setIsSend(true);
      if (d.data.message) {
        alert(`${d.data.message}`);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const verifyOtp = async () => {
    try {
      await api.post("/verify-otp", { mobileNo, otp });
    } catch (err) {
      alert("verify faild wrong otp");
    }
  };
  return (
    <div>
      {!issend ? (
        <div className="py-2 px-4 rounded-lg bg-gray-200">
          <input
            type="text"
            value={mobileNo}
            onChange={(e) => setMobileNO(e.target.value)}
            placeholder="Mobile no"
          />
          <br />
          <button className="bg-green-400 py-2 px-4" onClick={sendOtp}>
            SEnd otp
          </button>
        </div>
      ) : (
        <>
          <input
            type="text"
            placeholder="enter otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify</button>
        </>
      )}
    </div>
  );
};
export default OtpLogin;
