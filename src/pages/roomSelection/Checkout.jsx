import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar2 from "../../components/navbar/Navbar2";
import CheckOutComponent from "../../components/checkout/CheckOutComponent";
import { AmountContext } from "../../context/amountContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Checkout = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)
  const [endDate, setendDate] = useState(new Date());
  console.log(endDate)
  const { roomState, amount } = useContext(AmountContext);
  function dayCount(startDate, endDate) {
    var milliseconds1 = startDate.getTime();
    var milliseconds2 = endDate.getTime();
    
    var differenceMs = milliseconds2 - milliseconds1;
    return Math.round(differenceMs/1000/60/60/24);
  }
  var days = dayCount(startDate, endDate)
  console.log(days)

  // above code with "days" is for no of days
  
  console.log(roomState);
  const token = localStorage.getItem("token"); //Token for user Auth
  const __DEV__ = document.domain === "localhost";

  async function displayRazorpay() {
    const data = await fetch("http://127.0.0.1:8800/payment", {
      method: "POST",
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    }).then((t) => t.json());

    const options = {
      key: __DEV__ ? process.env.RAZOR_PAY_ID : "PRODUCTION_KEY",
      amount: data.amount.toString(),
      currency: data.currency,
      name: "Madhu Home Stay",
      description:
        "Thank you for booking, your room will be booked after the payment",
      order_id: data.id,

      //Handler function for payment verification
      handler: async function (response) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razropayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          bookingDetails: roomState,
        };

        //Payment Verification
        const verify = await fetch("http://127.0.0.1:8800/verification", {
          method: "POST",
          headers: {
            "x-access-token": token,
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const res = await verify.json();
        if (res.status === "ok") {
          alert("Payment Successful");
        } else {
          alert("payment failed");
        }
      },

      //Prefill for Payment form
      prefill: {
        name: "Abhishek Bhat",
        email: "abhi@gmail.com",
        phone_number: "9113021966",
      },
    };

    //Creating razorpay window
    const razorPay = new window.Razorpay(options);
    razorPay.open();
  }
  return (
    <>
      <Navbar2 />
      <div
        className="w-full mt-24 mx-auto h-full bg-black bg-opacity-90 top-0  sticky-0"
        id="chec-div"
      >
        <div
          className="w-full absolute  h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div
              className=" w-full  pl-4 pr-10 md:pr-4  py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
              id="scroll"
            >
              <div
                className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                // onClick={() => setShow(!show)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <p className="text-sm pl-2 leading-none">
                  {" "}
                  <Link to="/">Back</Link>
                </p>
              </div>
              <p className="md:text-5xl text-3xl font-black leading-10 text-gray-800 pt-4">
                Select your suite
              </p>

              <div className="my-2 p-1 md:flex mt-10 rounded">
                  <p className="  text-black text-center mt-2 w-48">Check in:</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="To"
                    className="bg-grey-100 text-black border-black rounded-xl "
                    
                    
                  />
                  <p className="  text-black text-center mt-2 w-48">Check out:</p>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setendDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="To"
                    className="bg-grey-100 text-black border-black rounded-xl "
                    
                    
                  />
                </div>
              <CheckOutComponent amount={9000} roomType={1} capacity={2} />
              <CheckOutComponent amount={8000} roomType={2} capacity={2} />
              <CheckOutComponent amount={7000} roomType={3} capacity={2} />
            </div>

            <div className=" md:w-1/2  w-full bg-gray-100 h-full">
              <div className="flex flex-col md:h-screen px-14 py-20  overflow-y-auto">
                <div>
                  <p className="text-4xl font-black leading-9 text-gray-800">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800">
                      $9,000
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800">$30</p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800">Tax</p>
                    <p className="text-base leading-none text-gray-800">$35</p>
                  </div>
                </div>
                <div>
                  <div className="flex  items-center pb-6 justify-between md:mt-10  pt-20">
                    <p className="text-2xl leading-normal text-gray-800">
                      Total
                    </p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                      {amount}
                    </p>
                  </div>
                  <button
                    onClick={displayRazorpay}
                    className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
