
import { useState } from "react";
import { api } from "../Api";
type dataprop = {
  id:string,
    amount:number,
    currency:string
}
declare global {
  interface Window {
    Razorpay:any;
  }
}
const HandlePayment = () => {
    const [data, setData] = useState<dataprop | null>(null);
  const allowpayment = async () => {
    try{
        const res = await api.post("/create-order",)
        setData(res.data.order)
    }
    catch(err:any){
        console.log("order error" , err.message)
    }
    // const { data } = await api.post("/create-order", { ammount: 500 });

    const option = {
      key: "rzp_test_SY9KTUPucXwHLj",
      amount: data?.amount,
        // amount: 500 * 100,
      currency: "INR",
      order_id: data?.id,
      name: "My App",
      description: "Test Payment",
      handler: function (response:any) {
        alert("Payment succesfull");
        console.log(response);
      },
    };
    console.log("window", window.Razorpay);
    const rzp = new window.Razorpay(option);
    rzp.open();
  };
  return (
    <div>
      <h1>Payment demo</h1>
      <button className="bg-green-400 py-2 px-4" onClick={allowpayment}>
        pay 2 rupees
      </button>
    </div>
  );
};

export default HandlePayment;
